---
title: N-Gram Model Evaluation & Training in Machine Learning and LMs
created: 2025-02-05
tags: 
  - Machine Learning
  - N-Gram
  - DevPost
---

# Intro

So we have our N-Gram model (see [N-Gram Model Prediction in Machine Learning and LMs](../ml-ngram-prediction/)). Now, how do we evaluate it? And why do we need to evaluate it?

Well, to make any progress in the field we would like to be able to compare new models. Thus, we need some kind of metric to compare models. We now set out to find methods to evaluate models, and then discuss training and testing data.

First, some definitions;
- A **training set** is the set of data we use to learn the parameters of our model. This becomes much more relevant in the future when we start discussing neural models, but it's essentially the data that we use to "train" our model.
- A **test set** is a completely different set of data from the training set. It will be kept completely witheld from the model until it comes time for testing, and we will use it to evaluate the model's performance. We want this set to be diverse, and sometimes even separate entirely by context from the training set, since in the context of NLP the ability to generalize is a huge part of the model's performance. It importantly must be separate because we want to see how well the model generalizes to new data, not how well it memorizes the training data.
- The **dev set**, sometimes called the **validation set**, is a set that we use in neural models to tune parameters. This may not be entirely relevant now, but will be later; this is what we use to do testing during training. Sometimes, you want feedback before the model is done; this is what we use the devset for. It's important that the devset is correlated to the test set in context but do not overlap.

# Evaluation

The most obvious idea to evaluate the performance of an LM is **extrinsic evaluation**. This idea essentially is to take the model, put it in a real-world scenario, and see how well it performs. For instance, we could use the model to generate text, and then have humans rate the text. Alternatively, for something like a translation model or speech recognition, we might want to run two comparable models and then choose the better outcome.

However, running huge NLP models with this level of complexity is both expensive and time consuming; not to mention that the best judge of this sort of thing would be a human, which we don't like involving in training processes. Thus, we would like to have some kind of **intrinsic evaluation**, or something that can quickly evaluate the quality of a model without any application

## Perplexity

The perplexity of a test set is the inverse probability of the test set, normalized by the number of words. That is, we're looking for the probability that the model will predict the test set. Hopefully that's intuitive; the best way to evaluate a model internally is to see how well it will predict some data that it has never seen before that mirrors real life.

We can't use the test set for mid-training evaluation, for which we use the dev set. 

You can normalize by the number of words $N$ by taking the $N$th root of the perplexity value. For some test set of words $W=w_1, w_2, \ldots, w_N$, the perplexity is defined as 

$$
\text{Perplexity}(W) = \left( \prod_{i=1}^N \frac{1}{P(w_i | w_1, w_2, \ldots, w_{i-1})} \right)^{1/N}
$$

I encourage you to take some time to convince yourself of where this came from. To briefly demonstrate why, the idea is to take $P(w_1, w_2, \ldots, w_N)$ and then take the $N$th root of it. After expanding with the chain rule we have the above.

Note because of the inversion, the higher the probability of the word sequence, the lower the perplexity will be. Consequently, we will train for a **lower perplexity** value. 

In other words, the lower the perplexity value, the higher the probability that our trained model will predict the completions in our dev/test sets.

## Weighted Average Branching Factor

Another way to think about perplexity is to imagine it as the so called "weighted average branching factor". A **branching factor** is simply the number of branches, or possibilities, that follow any word. 

For instance, consider a situation that only considers a vocabulary of 3. Then, the branching factor is 3. Call these words $w_1, w_2, w_3$. Then, assume that we have a LM N-Gram model that predicts the next word with all 3 being equally likely with a chance of $1/3$. Then, suppose we have a test set with exactly 1 entry, of $w_1 w_1 w_1 w_1 w_2$. 

First, the perplexity of this model is demonstrably 3. That is,

$$
\text{perplexity}_1(w_1 w_1 w_1 w_1 w_2) = \left(\left( \frac{1}{1/3} \right)^{5}\right)^{-1/5} = 3
$$

Now consider an N-gram model, called 2, that works in the same context with the same vocabulary but was trained to predict $P(w_1)=.8, P(w_2)=.1, P(w_3)=.1$. Then, the perplexity of this model is demonstrably lower. 

$$
\text{perplexity}_2(w_1 w_1 w_1 w_1 w_2) = ((1/.8)\cdot (1/.8)\cdot (1/.8)\cdot (1/.8)\cdot (1/.1))^{(-1/5)}\approx 0.528
$$

# (A brief summary on) Improvements of Performance

N-Gram models are still very problematic. Here I give a brief overview of some methods used to improve performance. These have all been advanced very far in the field by amazing researchers, and this stuff goes back decades. I don't intend to cover things in depth here, but here's a general idea of a lot of the things and I encourage you to read the literature if you're interested in N-Grams or NLP in general.

## Sampling

When you predict the next word in a N-Gram model, the obvious method is simply to choose the most probable result. However, we can use sampling instead to choose less likely answers. 

Intuitively, when you speak, you don't always use the most common word. As an example, if it were raining outside, you might not always say "It is raining". You might say "It is lightly raining", or "It is pouring". These sentences would never be completed by a model that always chooses the most probable word, because "lighly raining" and "pouring" are (at least in the year im writing this, haha) much less likely to appear in a training set than simply "raining".

Consequently, we want there to be some chance of choosing a less likely word. This is called **sampling**.

One intuitive idea is to choose each word with a probability proportional to its likelihood. That is, if we have a word $w$ with probability $P(w)$, then we can choose $w$ with probability $P(w)$. This is called **unnormalized sampling**, and can help your model to be more diverse.

There's a lot of sampling methods! And a lot of papers on them! I encourage the reader to check them out with a search on N-Gram sampling methods.

## Training Sets

Just like neural models, which we will go over later, the N-Gram model is also very dependent on the training set and can easily overfit. That is, it can "memorize" or get used to things too easily.

Suppose that I gave the N-Gram model exclusively sentences that appear in Jane Austen's works. I regret to inform the reader that I'm not really a fan of Austen's older English, and that seeing "thou" and "thee" in every sentence would be quite annoying, and certainly not representative of a modern English speaker. Consequently, our N-Gram model can be said to be "overfitted" to the training set. 

We thus require a diverse training set, that doesn't just include one specific context (for instance we can't just have school conversations because they won't have any information on how to talk about the weather or trashtalk people in Call of Duty). Yet similarly, we want to restrict our training data to the appropriate variety that we want to include. Maybe you actually don't want to include Call of Duty trashtalk in your model, and that's fine too. 

## Smoothing

A problem with using the MLE estimate for probability is that some completely fine English sentences will have a probability of 0. This is because we can't possibly have seen every single sentence in the English language, and so some sentences will have a probability of 0. 

An example? "Green Eggs". You would never expect to see those two words together in a lot of datasets, and you'd rarely hear about it irl, but despite that it's, well, definitely valid and is part of Dr Seuss!

Consequently, we want to do some **smoothing** or **discounting** as well. Essentially, we want to use some algorithm that will give us a non-zero probability for every word.

### Laplace Smoothing

Laplace smoothing is to add a fixed number (typically 1) to all counts. All counts that were 0 (impossible by the training set's count and thus by the N-Gram model) will now have a value of 1, which makes it marginally possible! Other counts will also be increased, which keeps their weights high and not devalued but less proportional. 

This method sucks in general because it's simplistic, but it gives a nice baseline and is practical enough for basic features like text classification, which doesn't really need to produce smooth output and focuses more on precision (and having every vocab word possible is important).

This has unique effects upon the model. For instance, it will change each individual probability and thus the conditional probabilities, which can change the perplexity of the model to some observable degree even though words that are ungodly rare will still be ungodly rare. This is just a reality of introducing a smoothing method; should you have 100k words in your vocab and even if your training set was so large that many of them have counts in the thousands, you are still adding 100k different counts to the dataset. Maybe not significant when comparing one to the other, but still significant in the grand scheme of things.

### Add-k Smoothing

This is just laplace smoothing but instead of 1 you add $k$.

### Interpolation

Interpolation is the idea of coputing a new probability by interpolating different models. If we had a 3-gram model and there were no instances of something in the 3-gram, we could reduce it to a 2-gram model and attempt to predict the word that way based on the 2-gram model. 

You can further reduce this to a 1-gram model, and so on and so forth. That is, for a trigram probability $P(w_n|w_{n-2}w_{n-1})$, we can compute

$$
P(w_n|w_{n-2}w_{n-1})=\lambda_1P(w_n)+\lambda_2P(w_n|w_{n-1})+\lambda_3P(w_n|w_{n-1}w_{n-2})
$$

The $\lambda$ values are "hyperparameters" that you can tune; however, its important that they sum to 1, so that this remains a weighted average. 

There's a lot of work on interpolation and how to make it better; if you're truly interested I suggest checking out the **EM** algorithm, an iterative learning algorithm that converges on the best local $\lambda$ values.

### Backoff

In a backoff model, if the n-gram model has no data for a given n-gram, it will back off to the (n-1)-gram model. This is a simple way to interpolate between models, and is a good way to avoid the problem of having a 0 probability for a word. However to keep our probability distribution, we have to scale the probabilities of the higher level N-Grams down in order to save some probability space for the lower level ones. 

In practice, it's easier to use something called **stupid backoff**, which is the equivalent of putting your hands over your eyes and pretending that the probability distribution rules don't exist. If you need to back off, you back off. Screw the rules!

# Conclusion

Thanks for reading! I hope you learned a lot about N-Gram models and how to evaluate them. This will be the last in a 2-part series about N-Grams; I don't intend to go into them greatly since this series is also kind of my regurgitation of readings following CMSC848O. Many thanks to Prof. Mohit Iyyer for guiding my learning. 

Next articles will focus on ML, in particular neural models since they have advanced to become by far and away the standard in the context of language modeling. 

Now I need to stop procrastinating on my cybersecurity and DSA articles.