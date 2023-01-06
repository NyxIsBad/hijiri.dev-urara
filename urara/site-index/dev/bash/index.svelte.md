---
title: Recreating Bash
date: 2022-12-08
tags: 
  - Bash
  - Linux
  - DevPost
---

# Project Description

One of my uni classes last Fall was an introduction to Computer Systems, and during the last month we were introduced to various shells like bash and tcsh. Well, during the class we had also learned about everything required to make a shell, so that's awfully convenient isn't it?

Thus, I have recreated (to a very limited degree!) some elements of the bash shell.

It's worth noting that I'm actually running this command via SSH, so when I input eg `cd`, it actually gives me the dir of my Windows VSC workspace.

I named the shell "badsh".

# About the Code

Given that this code heavily involves work from projects that I wrote in class, I can't release the code (since otherwise the University people will give me a big no no and I'll probably cry myself to sleep after getting kicked out of the school). However, there are some interesting things I'd like to share.

The first, this was written in C. We are working with linux/bash here, so it was a given. We used a prebuilt bison parser during our class in order to parse cli input, but I decided that I wanted to be cool and wrote my own. Consequently, the code runs inefficiently and has many issues with parsing some specific patterns (eg giving it inputs for a manually implemented command (eg the whoami command, which simply returns the code author) with arguments that are nonascii characters will break it). 

The general algorithm is structured like so:
- Read input
  - If the buffer is 0, break
  - Otherwise, read the buffer into command history (so we have command recall functionality)
  - Parse the input
    - This works by attempting to first find certain flags, such as `|` or `&` or `>` or `<` (input redirection). Then, 
    - Construct a tree and recursively call the parser left or right until you finish building the tree
    (Some flags have more priority than others to keep in line with bash, of course)
  - Call executor sub program
  - Repeat until the heat death of the universe or until we exit

The executor program is relatively simple,
- Accept input in the form of our parsed tree
  - Starting at the top of the tree, make our way down, recursively calling the executor on the left and right side.
    - If left fails, kill everything
    - Depending on which flag we're seeing on our tree, we may want to start a pipe or read/write to a file. Implementations for those are there in the form of various forks and pipes via dup2.
    - If we see a pipe or subshell, go through children in order to isolate the environment
  - Check input against manually implemented commands, eg "exit" or "cd", which concern themselves with the special environment rather than linux's native commands, or fun manually implemented ones like "whoami"
  - Call an exec function in order to use linux's native commands

Seems pretty simple, yea? Unfortunately, this took me the better part of my winter break. I started as soon as I got off school 2022-12-20 and now its 2023-01-05 and I'm finally showing this off. 

![](/bash/20_43_42_000247.png)