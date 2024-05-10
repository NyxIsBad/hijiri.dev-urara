---
title: Fda 510K Database Searching
created: 2024-05-10
flags:
  - DevPost
  - Python
---

# FDA 510K Database Searching
The US FDA, or Food and Drug Administration, has this huge responsibility which is approving medical devices for use in the United States. The 510K database is a collection of all the devices that have been approved for use in the US. Maintained online, it's extremely primitive and is, honestly, horrible to work with as a developer. There is no API, and the only real way to do anything is web scraping (which I hate to do on a government website, so ideally we will want to keep this to a minimum). 

## What is a 510K?
A 510k is the submission form made to the FDA to get a medical device approved for use in the US. It's a long, detailed form that includes a lot of information about the device, its intended use, and the testing that was done to prove that it's safe and effective. More importantly, this information can include the intended use, restrictions, etc.

Now say that we want to search for all devices under a certain category with a keyword in the 510k. How do we do that? uhh... turns out there isn't really a native solution, and because this is such a niche problem, there isn't really a third party solution either.

It turns out that the FDA has this database, but has literally nothing to search it with. About 4 months ago, I wrote a short (very inefficient) script to do it myself. It's written in python and is found [here](https://github.com/NyxIsBad/fdasearch).

This isn't a medical device/regulations site, so lets go into the code, which is the actually interesting part.

# The Script
The idea is essentially to scrape the site using regular URL patterns. I used BS4 for this, but because of how incredibly simple the scrape is you can probably get away with writing your own protocol or using a different library.

## Imports:
```python
# data related libs
import pandas as pd
import csv 
import pickle
# ocr
from tempfile import TemporaryDirectory
import pytesseract
import pdf2image
from PIL import Image
import requests
import cv2
# web scraping w/ bs4
import httplib2
from bs4 import BeautifulSoup, SoupStrainer
```
I'm using pandas because we're actually going to be working with a considerable amount of data here. The CSV library is used because I'm going to be loading the initial code files from a CSV that the FDA helpfully provides [here](https://www.fda.gov/medical-devices/510k-clearances/downloadable-510k-files). The pickle library is used to save the data in a way that can be loaded quickly. The script takes a while to run because we're going to OCR a lot of PDFs, so we want to be able to stop and restart the code without having to re-do everything.

## Global Variables
```py
# -------------------------
# GLOBALS
# -------------------------
# 1: read from csvs, generate lists, save them
# 2: read from lists, scan pdfs, create txts
# 3: scan through txts for keywords
start_idx = 0
mode = 2
# file prefix
DATADIR = "data/"
# data names (eg. the names of the csvs)
DATA = ['96cur','7680','8185','8690','9195']
# pdf prefix
PDFDIR = "pdf/"
# csv delimiter
DELIM = '|'
# valid product codes
VALID_CODE = ['GEI','PAY','ONQ','OHV','GEX','OHS','NUV','ONG','ONE','ONF']
# keywords - all lowercase
COND_KEYWORD = ['wrinkle']
KEYWORD = ['fitzpatrick','scale','type']
# DB Link (510k)
DBPREFIX = 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID='
```
I end up writing this script to have 3 modes. 
- The first one is a first pass, which just creates a list of the possible 510k files of interest. It will sort out the ones that don't have a public summary file (eg there's almost no details publicly available, so isn't very useful).
- The second one goes through the lists of the 510k files and scans them for keywords. It will OCR the PDFs and save the text files in the data directory.
- The third one goes through the text files and scans them for the keywords. I ended up not implementing this because it's actually slightly redundant given the second step. 

In my above example code I also have some basic file/directory names, the delimiter for the CSV that the FDA publishes (which is |). Then I speciy my search conditions. Here we will look for any one of the keywords if and only if the statement has the conditional keyword, and we will search all files under those product codes.

## Helper Functions
```py
# -------------------------
# DATA/FILE SAVING/LOADING
# -------------------------
# Load codes from csv    
def load_csv(input):
    data = pd.read_csv(input, sep=DELIM, header=0, keep_default_na=False)
    return data # returns df
# load a list from a text file
def load_txt(input):
    lst = list()
    with open(input,'r') as f:
        for line in f:
            lst.append(line.rstrip())
    return lst
# Load a list from file
def load_obj(file):
    with open(file,"rb") as f:
        obj = pickle.load(f)
    return obj
# output a list as a text
def write_txt(out, lst):
    with open(out, "w") as f:
        for item in lst:
            f.write(f"{item}\n")
# write an object to file 
def write_obj(out, obj):
    with open(out, "wb") as f:
        pickle.dump(obj,f)
# read csv files
def read_single(file):
    return load_csv(file)
# read multiple csv
def read_multiple(arr):
    return pd.concat(map(lambda date: load_csv(f'{DATADIR}{date}.csv'), arr))
# -------------------------
# FILTERING
# -------------------------
# return the rows in a df that match a value in the arr
def filter_by_col_arr(pd_arr, column, value_arr):
    return pd_arr.loc[pd_arr[column].isin(value_arr)]
# return the rows in a df that match the value
def filter_by_col(pd_arr, column, value):
    return pd_arr.loc[pd_arr[column] == value]
# returns the column as a list
def get_col_as_list(pd_arr, column):
    return list(pd_arr[column])
```
An assortment of helper functions that I wrote for a few different formats so I can call them quickly in the code later

## Scraping
```py
# gets the link for a summary or statement from the FDA db by scraping
def getlink(type, prefix, code):
    http = httplib2.Http()
    status, resp = http.request(f'{prefix}{code}')
    for link in BeautifulSoup(resp, features='html.parser', parse_only=SoupStrainer('a')):
        if link.has_attr('href') and link.string==type:
            return link['href']
    return ""
```
This is an incredibly simple bs4 function that I wrote to get the summary argument from the FDA database. It simply takes a link and looks for the first link that has the text "type" in it. We pass in Summary later, so it looks for the link with the text "Summary" in it.

The URL scheme of the 510k DB is the most important, and is a little bit tricky to figure out because it's not very well documented. The URL for the codes we are interested in are in the form of `https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID={code}`. The code is the product code, and the FDA has a list of valid product codes that they use.

However other than CDRH's 510ks, there are other departments, sometimes there are weird prefixes for the codes, etc. Specifically in the context of this search, these parameters work. If you want to adapt this script for other purposes you definitely need to change this part.

## Main Function
```py
# -------------------------
# READ/OCR PDF
# -------------------------
# Reading the text. There are multiple cases to this.
# Case 1: OCR correctly reads text. In this case, we concatenate all text and 
#       save it as a .txt file in PDFDIR/ocr/{code}.txt. Also return "success" or 1
# Case 2: We can't read it. Then, we return "fail" or 0. This will get concatenated to the 
#       "none_knums" variable and outputted as a text file.
def pdfscanner(type, prefix, code):
    # vars
    img_lst = []
    # open the file online and then create a pdfreader instance
    url = getlink(type, prefix, code)
    if url == "": 
        return 0
    # get the actual content.
    pdf = requests.get(url, stream=True).content
    # We use OCR to recognize the text. 
    # We can use PdfReader to find the DPI.
    # reader = PdfReader(bytes_stream)
    print(f"{type} of {code}: URL {url} | DB URL: {prefix}{code}")
    
    # Implementation of case 1:
    with TemporaryDirectory() as tempdir:
        # Step 1, turn the pdf into images.
        # read the pdf as images
        pdf_pages = pdf2image.convert_from_bytes(pdf)
        for num, pg in enumerate(pdf_pages, start=1):
            fname = f'{tempdir}/{code}_{num:03}.png'
            pg.save(fname,"PNG")
            img_lst.append(fname)
        # Step 2, read the images
        # open the txt file output
        with open(f'{PDFDIR}/ocr/{code}.txt','w') as f: 
            for img in img_lst:
                # OCR the page
                # image preprocessing can be put under here
                image = cv2.imread(f'{img}')

                page_txt = str(pytesseract.image_to_string(image, lang='eng', config='--psm 6')).replace("-\n","")
                f.write(f'{page_txt}\n')
    return 1
```
This is the bulk of the work done. You can tell that there's quite a few phases here.

First, some error handling, and attempt to ""save"" the PDF. If it fails we leave and try the next one, noting it down in an output file. Otherwise, we move onto the OCR step. I used pdf2image to convert the PDF to images, and then pytesseract to read the images. I save the text to a file in the PDFDIR/ocr directory.

## Driver Code
```py
# -------------------------
# DRIVER CODE
# -------------------------

if mode==1:
    # read the csvs in as df
    csv = read_multiple(DATA)
    # find results by product code
    results = filter_by_col_arr(csv, 'PRODUCTCODE', VALID_CODE)
    
    # find results with summary
    results_summary = filter_by_col(results, 'STATEORSUMM', 'Summary')
    results_statement = filter_by_col(results, 'STATEORSUMM', 'Statement')
    results_none = filter_by_col(results, 'STATEORSUMM', '')
    # get the knumbers
    results_knums = get_col_as_list(results_summary, 'KNUMBER')
    summary_knums = get_col_as_list(results_summary, 'KNUMBER')
    statement_knums = get_col_as_list(results_statement, 'KNUMBER')
    none_knums = get_col_as_list(results_none, 'KNUMBER')
    # write to files
    write_obj(f'{DATADIR}matching_codes_pickle',results)
    write_obj(f'{DATADIR}matching_codes_with_summary_pickle', results_summary)
    write_obj(f'{DATADIR}matching_codes_with_statement_pickle', results_statement)
    write_obj(f'{DATADIR}matching_codes_none_pickle', results_none)

    write_txt(f'{DATADIR}matching_codes.txt', results_knums)
    write_txt(f'{DATADIR}matching_codes_with_summary.txt', summary_knums)
    write_txt(f'{DATADIR}matching_codes_with_statement.txt', statement_knums)
    write_txt(f'{DATADIR}matching_codes_none.txt', none_knums)
    # print some numbers
    print(f'Total files: {len(results)}\n'
        f'Matching files with a knumber and summary: {len(summary_knums)}\n'
        f'Matching files by summary: {len(results_summary)}+{len(results_statement)}+{len(results_none)}')
elif mode==2:
    summary_knums = load_txt(f'{DATADIR}matching_codes_with_summary.txt')
    print(f'Successfully loaded {len(summary_knums)} nums!')
    # vars
    failed = []
    success = []
    # create the txt files for each knum with a summary
    for num, knum in enumerate(summary_knums[start_idx:]):
        if pdfscanner('Summary', DBPREFIX, knum) == 1:
            print(f'Successfully converted #{num+start_idx}: {knum} to txt')
            success.append(knum)
        else:
            print(f'Failed to convert #{num+start_idx}: {knum} to txt')
            failed.append(knum)
    write_txt(f'{DATADIR}converted_to_txt.txt', success)
    write_txt(f'{DATADIR}failed_to_txt.txt', failed)
elif mode==3: 
    print("Implement mode 3")
else:
    print("How did you get here? Wrong mode #.")
```
This stuff is pretty simple and mostly involves a lot of logging and file saving/writing etc. You can see where I call OCR in mode 2, and note that we are looking for the "Summary". There are other types of documents that the FDA has, but I only cared about the summaries. Note mode 3 not implemented because we already have search by keyword anyway. It wouldn't be too hard to write though, and I have other FAR scripts on my github that do this.

## Summary
This script is a bit of a mess, but it works. It's not the most efficient thing in the world, but it's a good example of how to scrape a website that doesn't have an API. The FDA's 510k database is a good example of this, and I hope that this script can be useful to someone. I'm not going to be maintaining it, and I certainly will not do something like this again, as I only did this for the sake of finding this very specific query. Anyway, I hope this was helpful to someone.