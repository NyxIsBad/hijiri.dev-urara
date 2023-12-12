---
title: WSL and Cygwin
created: 2023-08-31
summary: this is not a devpost. im just thinkin, so it's a personalpost
tags: 
  - Linux
  - PersonalPost
---

# A Curious Problem

Windows is not UNIX. This is a fact that we cannot, unfortunately, change. For the longest time, I used cygwin to ""make do"" when writing C code - at least it could compile, right. But Mintty and the emulation that cygwin provided always missed a little bit of something, especially since it was just a compatibility layer for POSIX and not the real thing.

Windows came out with WSL ages ago for me. I'm not very old, so it came out when I was in middle school, and I didn't even clearly know what the difference between Matlab and Java were at the time, so it didn't really matter for me. But I did hear from many people that WSL sucked compared to cygwin or MinGW, so when I started coding in late middle school into high school, I too installed cygwin. Cygwin is incredibly easy to use, you install it, the files are still easy to find in your C: drive, and you could legitimately edit your .c files with notepad and then just compile them on cygwin's cli if you wanted. 

WSL 2 came out a few years ago, and I started using it this summer and I cannot express how nice it is to have an actual kernel. It's true that it is ""less convenient"" than cygwin or mingw still in the sense that the files are less accessible and you need to go through the trouble of starting WSL up, but for people who aren't interested in using linux as an actual operating system but still want as complete of a UNIX based system as possible for the sake of programming, it's pretty amazing. It works with everything (with minor differences)!

I frequently ssh'd into some linux server for the sake of running programs in a more complete or powerful environment (typically because they had money and could have a lot of GPUs) and while WSL is not better than this in the slightest, it does give that feeling off. It's certainly not fair to compare WSL to cygwin since WSL is basically just coLinux while cygwin is just a compatibility layer, but I do think that WSL is easier to use and install than cygwin or mingw. And I do think that WSL is easier for new programmers to approach than cygwin is. 

All told, I think this is a rare case where Windows actually pulled something off for the sake of programming that I wholeheartedly enjoy using. Good job. But I wrote this for one thing, which is to encourage any readers to at least *try* cygwin. It's a cool experience and incredibly useful for learning a lot of basics, and I would hate for it to be so overshadowed by WSL (although deservingly so) that the experience and knowledge you get from using it is completely lost to history.