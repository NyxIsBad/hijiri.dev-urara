---
title: An Introduction to Elementary Logic and Cantor's Theorem
created: 2026-01-17
tags:
  - Logic
  - Mathematics
  - DevPost
---

# Intro

Going to aim to keep this introduction as simple as possible. It's heavily inspired by Aris Papadopoulos' course Math445, which I took last semester.

I also want to mention that, yeah, I've been dead. I have an unlisted advanced datastructures series that I want to finish, and additionally I need to keep working on the machine learning stuff. I also want to start a new one on security. But for now, logic.

## Assumptions

I will be assuming that you have some basic familiarity with sets, functions, and proofs. If you don't, there are a lot of resources online that can help you get up to speed.

A "section" will be a self contained part of this article. Each section is designed to contain its own definitions and theorems, and new sections may depend on previous sections, but not vice versa. Some definitions might not pass through either.

# Math

## Basic Definitions

**Definition (Equinumerous):** Two sets $X$ and $Y$ are equinumerous if there exists a bijection (a one-to-one and onto function) $f: X \to Y$. We can write this as $X \sim Y$.

The gist of this is that there are an equal "number" of elements in both sets. If this is true, then naturally there is a function that maps each element to each other using the index of the element. The definition of "number" is dubious of course, since we know that $\mathbb{N} \sim \mathbb{Z} \sim \mathbb{Q}$, and we'll get into this soon.

**Definition (Subnumerous):** $X$ is subnumerous to $Y$ if there exists an injection (a one-to-one function) $f: X \to Y$. We can write this as $X \preceq Y$. The gist of this is that there are "less than or equal to" elements in $X$ as there are in $Y$.

**Definition (Power Set):** The power set of a set $X$, denoted $\mathcal{P}(X)$, is the set of all subsets of $X$.

## Theorem (Cantor's Theorem)

For any set, $A$, $A$ is not equinumerous to $\mathcal{P}(A)$. In other words, there is no bijection between a set and its power set. Here, the power set is defined as above.

**Proof #1:** This proof, more overarching, does not use the diagonal argument.

Take an arbitrary map $f$ from $A$ to $\mathcal{P}(A)$. We will show that this map cannot be surjective, and thus cannot be a bijection. To prove this, we will construct a set that is not in the image of $f$ (since the definition of surjective is that every element in the codomain has a preimage in the domain).

Then, let $B = \{ x \in A \mid x \not\in f(x) \}$. In other words, $B$ is the set of all elements in $A$ that are not in their own image under $f$. Note that $B$ is in the power set of $A$, since it is a subset of $A$ (we are only taking elements from $A$ to form $B$).

Then, $B=f(b)$ for some $b \in A$ if and only if $b \in B$ if and only if $b \not\in f(b)$ if and only if $b \not\in B$. This is a contradiction, so there is no such $b$, and thus $B$ is not in the image of $f$. Therefore, $f$ is not surjective, and thus cannot be a bijection.

However, this proof can be a little bit unsatisfying, since it doesn't really give us a concrete example of a set that is not in the image of $f$. In fact, we define some set $B$ that depends on $f$, so it feels a bit like cheating.

**Proof #2 (for $\mathbb{N}$):** Now, we will use the diagonal argument to construct a concrete example of a set that is not in the image of $f$, for the case where $A=\mathbb{N}$.

Take any arbitrary map $f$ from $A$ to $\mathcal{P}(A)$. For the sake of simplicity and without loss of generality let

$$
f(1)=\{1,3\}, f(2)=\{2,4,5\}, f(3)=\{1,4\}, f(4)=\{2\}, f(5)=\{1,3,5\}
$$

etc. Note that the domain is elements of $A$ (which for now we'll take to be $\mathbb{N}$ for simplicity), and the range is subsets of $A$.

Then, you can represent this as a matrix of 0s and 1s, where each row represents the image of an element in $A$, and each column represents whether or not an element is in the subset. For example, for $f(1), f(2)$, we have that

|   | 1 | 2 | 3 | 4 | 5 | ... |
|---|---|---|---|---|---| --- |
| 1 | 1 | 0 | 1 | 0 | 0 | ... |
| 2 | 0 | 1 | 0 | 1 | 1 | ... |
|...|...|...|...|...|...| ... |

Then, for each diagonal element (i.e. the elements where the row and column indices are the same), we flip the value (0 becomes 1, and 1 becomes 0). This gives us a new set of values that differ from each row in at least one position, always. Thus, $B=\{ x \in A \mid \text{the } x\text{-th diagonal element is } 1 \}$ is not in the image of $f$, since it differs from each $f(x)$ in at least one position (the $x$-th position).

That is, $B$ contains $1$ if $1 \not\in f(1)$, contains $2$ if $2 \not\in f(2)$, and so on. Thus, $B$ cannot be equal to any $f(x)$. Note that we must use the diagonal here because if we just flipped the first element of each row, for example, then it is possible that two rows could be identical in all other positions, and thus we wouldn't be able to guarantee that $B$ is not in the image of $f$ because we've inverted them into each other.

**Exercise:** It's an extremely interesting (and kind of annoying, if you want to do it "correctly") exercise to prove that $\mathbb{N}\sim \{0,1\}^\mathbb{N}$ (the set of all infinite binary sequences). You can also do this for $\mathbb{N}\sim \mathbb{Q}$ if you want to go a bit further, but that's further more annoying.

## Finishing Remarks

**Definition (Countable):** A set $X$ is countable if it is equinumerous to $\mathbb{N}$ (or finite). Otherwise, it is uncountable.

For instance, $\mathbb{N}, \mathbb{Z}, \mathbb{Q}$ are countable, while $\mathbb{R}$ is uncountable.

**Note:** One interesting fun note is that the continuum hypothesis, which states that there exists no set $X$ such that $\mathbb{N} \prec X \prec \mathbb{R}$. In other words, there is no set with cardinality strictly between that of the integers and the real numbers. This was shown to be independent of the standard axioms of set theory (ZFC, or the Zermelo-Fraenkel set theory with the axiom of choice), meaning that it can neither be proven nor disproven using those axioms. That is to say, both the continuum hypothesis and its negation are consistent with ZFC, assuming ZFC itself is consistent.

That is to say, ZFC is not capable of deciding the truth value of the continuum hypothesis within its own system. This tells us that a seemingly good set of axioms can still be incomplete in some sense. We'll get into this more later!

For fun, you may want to read up on ZFC [here](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory).

# End

Next: Propositional logic
