---
title: N-Gram Model Prediction in Machine Learning and LMs
created: 2025-02-01
tags: 
  - Machine Learning
  - N-Gram
  - DevPost
---

# Intro
This will be the first in a brief series on how language models work. 

Suppose you have an example sentence, for instance 

> "The student opened their \_\_\_\_". 

You as a person, what would you put? Well, you might say "book", or "laptop", or "notebook". You, the reader, might have much more ideas than this also. But how do you know these ideas? Where do we get the "next word" from, and how do we complete sentences?

This problem is the entire basis of language models, many of which recently exploding in popularity (eg. ChatGPT, Claude, Perplexity)

Although we very rarely think about it, there must exist some kind of unique way that we as humans understand language that gives us an inference on what would happen next.

Consider this: If this sentence was asked to someone in the 1940s, they would not be able to answer "laptop". In the modern day, most who read this sentence would answer "laptop", as they become increasingly ubiquitous and physical textbooks phase out of classroom usage in the vast majority of classrooms.

Thus, our internal "language model", so to speak, is based on the data we have seen. One intuitive idea, then, is that we as humans quite simply would predict the next word using the most common word that we could think of that fits in that location.

# What's an N-Gram anyway?

Back to our example, we have "The student opened their \_\_\_\_". 

Then, suppose we had every single english sentence ever written! That is, we somehow managed to accumulate the entire corpus of the English language, and found an infinitely powerful and fast machine that could process it. Then, an intuitive idea is that we could simply count the number of times any word appears after "The student opened their \_\_\_\_".

For instance, suppose that we had the following sentences:

> 1. __The student opened their__ <span style="color: green">book</span>
> 2. Then, __the student opened their__ <span style="color: green">laptop</span>
> 3. However, the teacher was displeased to see __the student opened their__ <span style="color: green">laptop</span>
> 4. __The student opened their__ <span style="color: green">notebook</span>
> 5. However, he then turned to see that __the student opened their__ <span style="color: green">notebook</span>
> 6. __The student opened their__ <span style="color: green">laptop</span>

We can then "Ctrl+F" through our data using some program and find that the word "laptop" appears 3 times, "notebook" appears 2 times, and "book" appears 1 time. Then, since "laptop" is the most common word, we would predict that the next word is "laptop".

However, this has obvious drawbacks! For one, we would need to have every single sentence ever written in order to predict the next word. Even then, this method fails all the time. Many "brand new sentences" are written every single day, and English is inherently a creative language.

For instance, if I prompt a program with an entire paragraph, it will very frequently NOT find that entire paragraph even if we HAD the entire English language laid out before us and we could somehow store all however many petabytes of data that would be, nevermind process it all in a reasonable amount of time.

So we must settle for the "N-Gram". 

The N-Gram idea is simply to ignore everything but the last N words. For instance, in the above example, we could only consider the 2 last words as a prompt, or "context" for the next word (Note: a prompt differentiates from a context in the sense that a prompt is given by the user while context constantly changes; suppose we need to generate multiple words, then for each new word we add that to the context along with the original prompt). Thus, rather than considering 

> "The student opened their \_\_\_\_"

We would consider

> "opened their \_\_\_\_"

This would require us to store far less data, since we could just precompute every single 2-gram in the English language (given a vocabulary of $V$ words, this would require $O(V^2)$ space, which is still very unreasonable but much better than the infinite amount of data we would need to store otherwise).

It would also allow us to give responses to much more unique prompts, since we would not have to have seen the entire prompt before to give a response, only the last 2 words.

# Prediction

## General Idea

Okay, so we have an idea of how to predict the next word. But how do we actually do it? That is, how do we predict the "most likely" next word?

Once again, a naive method would be to simply count the number of times each word appears after the prompt, and then predict the most common word. 

Mathematically, what we're really asking is what $P(w|h)$ is, where $w$ is the word we want to predict, and $h$ is the history of words we have seen so far. For instance, we might want to compute 

$$ P(\text{computer}|\text{The student opened their}) $$

We can decompose this sequence using the chain rule of probability as

```math
\begin{align*}
P(x_1\dots x_n)&=P(x_1)P(x_2|x_1)P(x_3|x_1x_2)\dots P(x_n|x_1\dots x_{n-1})\\
&=\Pi_{i=1}^n P(x_i|x_1\dots x_{i-1})
\end{align*}
 ```

## The Markov Assumption

The Markov Assumption is that context is only dependent on the last few words to some degree. For instance, the assumption that a 2-gram model is sufficient to predict the next word, as opposed to an infinity-gram model.

It should be intuitively clear that this results in a loss of information, and thus accuracy. However, for the sake of computation, we have to let this go for now. Thus, assume for a 2-gram model for instance, that

```math
P(x_n|x_1\dots x_{n-1})\approx P(x_n|x_{n-1})
```

and in general for some $N$-gram model

```math
P(x_i|x_1\dots x_{i-1})\approx P(x_i|x_{i-N+1}\dots x_{i-1})
```

## Computing $P(w|h)$

The question remains of how we will get these base probability values; we will do so via the Maximum Likelihood Estimation (MLE) method. We get an MLE estimate by counting from the dataset, and then normalizing the counts to get a probability distribution (so that they are in between 0 and 1)

We will find $P(x_n|x_{n-1})$, for instance, by computing 
```math
P(x_n|x_{n-1})=\frac{C(x_{n-1}x_n)}{\sum_{x}C(x_{n-1}x)}
```

where $C(x_{n-1}x_n)$ is the number of times the bigram $x_{n-1}x_n$ appears in the dataset, and $C(x_{n-1}x)$ is the number of times the unigram $x_{n-1}$ appears in the dataset.

Since the sum of all bigram counts that start with $x_{n-1}$ is the same as the unigram count of $x_{n-1}$, this can be simplified to 

```math
P(x_n|x_{n-1})=\frac{C(x_{n-1}x_n)}{C(x_{n-1})}
```

To elaborate; the sum of all bigram counts is the same as the unigram count because we're counting the number of times any word appears after another word, and then summing this; but this is the same as just counting the number of times the first word appears.

For the general case of an n-gram model, we can then compute

```math
P(x_n|x_{n-N+1}\dots x_{n-1})=\frac{C(x_{n-N+1}\dots x_n)}{C(x_{n-N+1}\dots x_{n-1})}
```

Note that this estimates n-gram probability by dividing a sequence frequency by its prefix frequency; we call this **relative frequency**. 

## Scale

In practice, language models are huge. Thus, we may be multiplying together numbers between 0 and 1 many, many times. If you took 5th grade maths you may recall that multiply two numbers between 0 and 1 results in an even smaller number; this will eventually result in data underflow, which would be catastrophic. To prevent this we frequently use **log probability** as the method of storage.

Recall from your high school maths that $\log(ab)=\log(a)+\log(b)$; thus, we can convert our multiplication into addition, which is much more stable. In general, where $p_i$ is some probability, 

```math
p_1\cdot p_2\cdot p_3\cdot p_4\cdot p_5\approx \exp(\log(p_1)+\log(p_2)+\log(p_3)+\log(p_4)+\log(p_5))
```

# Next

We'll discuss a broad overview of training and evaluation, along with entropy next, to continue the N-Gram series. We will eventually advance to neural models and modern attention, transformer, and scaling ideas.

I hope to continue this series alongside working on the ADS series and covering other mid level ML concepts.