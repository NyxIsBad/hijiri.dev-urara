---
title: The Spunout Server
date: 2023-08-28
tags: 
  - Spunout
  - Python
  - Sheets
  - DevPost
cover: /site-index/dev/clearvision/6-stable479.png
---
- [Story Intro](#intro)
- [Technical Stuff](#technical-stuff)
- [Google Sheet](#the-sheet)

# Intro

So I play this game called osu!, which is pretty cool and could probably warrant a post in my personal section by itself. Regardless, I basically play a really rare (and objectively pointless, but subjectively cool) mod called Spunout, which makes the game basically no different than before, aside from removing an object called the spinner. The gameplay details of the mod can be left out, however - the points I need to make are first, that players in osu! sometimes ""main"" a mod (in which they play the majority of the game with that mod), and additionally that Spunout is incredibly rare. 

I used to be part of a discord server with 5 or 6 people in it where we all played Spunout. It was created purely from just *knowing* people who you knew played the game. But it died... years ago. I recently met a player called [renyoo](https://osu.ppy.sh/users/27209874) while reffing a tournament, and I had seen them around the mod leaderboards lately, so I struck up a conversation, and found out that they were really interested in the idea of a spunout server. So we made one, except I wanted to get everyone this time, and not just the few people who we knew. So we wrote a script! Also, for those interested, [here is the csv file I used for the countries, since I couldn't find a complete list of the osu! countries online that was accurate](countries.csv)

# Technical stuff

More specifically, I wrote the first version of the script. Fortunately, I didn't have to do any web scraping since the developer of osu!, peppy, is very nice to developers and provides an extensive API with an incredibly generous limit (2k requests per minute, at the time of writing, although I hear this will be reduced in the future). So I just did some basic query calls and came up with something that would page the top 10000 players from every country leaderboard, which altogether gave me around 800 thousand user IDs. I wasn't really keen on learning a new language for the sake of this project and I was pretty lazy, so I just wrote it in python:

```python
import ossapi
from ossapi import Ossapi
import time
from tqdm import tqdm
import pickle
import pandas
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, as_completed

# I created a client using my id and secret here but you don't get to see it ;)
# create api
api = Ossapi(client_id, client_secret)

#... some code

def get_users_country(country, scorelist, out):
    print(f"Start: {country}")
    user_ranking = api.ranking("osu", ossapi.RankingType.PERFORMANCE, country=country)
    api_count = 1
    curr = user_ranking.cursor
    user_list = list()
    # while curr checks to ensure that there remains pages
    while curr and len(user_list) < 10000:
        for j in range(0,len(user_ranking.ranking)):
            # add user to list if they are neither in the score ranking nor pp ranking
            # global rank can actually be undefined in some cases
            if (not user_ranking.ranking[j].is_ranked) or (int(user_ranking.ranking[j].play_count or 0) < 2000) or (int(user_ranking.ranking[j].global_rank or 0) > 200000):
                #print(f"Skipping user since they're too low")
                break
            elif int(user_ranking.ranking[j].global_rank or 0) <= 10000:
                #print(f"Skipping user since they're top 10k")
                break
            elif user_ranking.ranking[j].user.id in scorelist:
                #print(f"Skipping {user_ranking.ranking[j].user.id} as they are in score index")
                break
            else:
                user_list.append(user_ranking.ranking[j].user.id)
        user_ranking = api.ranking("osu", ossapi.RankingType.PERFORMANCE, cursor=curr, country=country)
        api_count += 1
        print(f"{country} Progress: {len(user_list)}/10000, with {api_count} calls")
        curr = user_ranking.cursor
        # api cooldown
        # time.sleep(.5)
    if not curr: 
        print("Ended due to curr")
    with open(out,"wb") as f:
        pickle.dump(user_list,f)
    print(len(user_list))
    return user_list

#... more code
```

A lot of this project ran into early errors when I forgot to account for silly mistakes like making sure that there were actually 10 thousand players in any one country's leaderboard (regions/states with little internet presence like American Samoa for instance would not have 10k), or checking if they were inactive (osu! would change their profile statistics to effectively "delist" them from the rankings, but the api call caught them and attempted to process them anyway)

I included pickle because python ended up being a super slow language, so I decided to split up the "getting users" (which would use relatively few api calls and calculations since I could get 50 players at a time) and actually checking for Spunout players (which would have been much more calculation and api intensive, with at least 2 calls per player). So I had dumb little helper functions like
```python
# Load a list from file
def load_users(file):
    with open(str(file),"rb") as f:
        user_list = pickle.load(f)
    return user_list
# Load country codes from csv    
def load_csv(input):
    data = pandas.read_csv(input, header=0)
    return list(data.Code)
# Load users from a txt document (The easiest way to save user lists between scripts of different languages was .txt)
def load_txt(input):
    user_list = list()
    with open(input,'r') as f:
        for line in f:
            user_list.append(line.rstrip())
    return user_list
```

Regardless, this finished the task of getting the hundreds of thousands of players reasonably quickly, taking me about an hour (intentionally slowed down to rate limit myself - i wanted to stay at 60 req/min even though I had 2k). Then, it was just the task of checking every single individual player

Well, I wrote a short script to check players too, before realizing that the script would take (about) 140 hours to finish, even running about 1k req/min. That wouldn't do. I started thinking about rewriting the whole thing in Java, before one of the people that we had invited already, [Kuwume](https://osu.ppy.sh/users/8474535), simply saved me by writing it in C++. It's *significantly* faster, and gets the job done much easier. I'm not going to link the script, but it did the job in about 6 hours as opposed to 140. He also capped out the API limit instead of taking it slow like I did.

# The Sheet

I wanted to create a google sheet where you could .. and it's [finished, and at this link](https://docs.google.com/spreadsheets/d/1e7UGhOZ74jO7eVVq5Y6mv4w304djXanQbpF-XpXduJU/edit)