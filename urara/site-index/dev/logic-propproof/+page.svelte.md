---
title: An Introduction to Propositional Logic Proofs
created: 2026-10-03
tags:
  - Logic
  - Mathematics
  - DevPost
---

# Intro

Well, it's been the far better part of a year since I've intended to write a follow up entry to the propositional logic. Hopefully I am still able to retain my chain of thought, but if it drifts or seems different that is why. Once again, this series is built off of the lecture work of Aris Papadopoulos. 

# Math

## A review of the basics

Go back and read [the introduction post for propositional logic](../logic-proplogic/) if you haven't already. Generally, we defined 
- Syntax, the propositional variables and connectives that are used to construct formulas (along with subformulas and substitution)
- Semantics, the truth values of formulas and how they are evaluated (which led to models, tautologies, logical entailment and equivalence, and unsatisfiability)
- And Expressive Power, which details how a formula defines a truth function with some finite support. This led us to finish with adequacy.

Now, we want to look at how we can use these tools to prove things. What we really did in the last part of the series was to demonstrate the *meaning* of propositional formulas. But what we really want is a way to prove things about formulas, specifically which formulas are always true (eg tautologies). Furthermore, we'd like them to be automated, or at least computable.

That is, we'd like a system of proofs that a "computer" can carry out. Eventually, we will build first a computer that is hopefully only capable of proving tautologies.

Recall last time that there was a theorem that $\{\rightarrow, \neg\}$ is adequate. This means that we can use only these two connectives to express any truth function. Unfortunately at the time I was too busy to believe in proofs, so I didn't write one; there are a lot of cool proofs online that show this, and you should look one up! So, we will build a proof system that uses only these two connectives for now. 

I'll try to provide proofs when they are easy to understand and are useful.

## The computer

We want to expand on what the computer actually does. 

**Definition (Proof System):** A proof system is a symbolic system that allows us to derive formulas from other formula. A proof system composes a set of **axioms**, and a set of **deduction rules**.

**Definition (Axiom):** An axiom is a formula that is assumed to be true.

**Definition (Deduction Rule):** A statement that allows us to derive a formula from other formulas. That is, assuming some formula is true, we can derive another formula.

We will first work with the following extremely simple proof system:

- **Axioms:**
  - (A1) $\phi \to (\psi \to\phi)$
  - (A2) $((\phi\to(\psi\to\chi))\to ((\phi\to \psi)\to (\phi\to\chi)))$
  - (A3) $(\neg \phi \to \neg \psi) \to ((\neg \phi \to \psi) \to \phi)$
  for any formula $\phi, \psi, \chi$.

- **Deduction Rules:**
  - **Modus Ponens (MP):** If $\phi$ and $\phi \to \psi$ are both true, then $\psi$ is true.

Now, we will define the method by which we can utilize this proof system. 

**Definition (Formal Proof):** A formal proof of formula $\phi$ is a finite sequence $(\phi_1,\phi_2,\dots, \phi_n)$ of formulas such that $\phi_n=\phi$, and for each $i\leq n$, one of the following is true:
- $\phi_i$ is an axiom
- $\phi_i$ is derived from some $\phi_j$ and $\phi_k$ with $j,k<i$ using the deduction rules.

**Definition (Theorem):** If there exists a formal proof of formula $\phi$, then we say that $\phi$ is a theorem, and we write $\vdash \phi$.

**Definition (Deducible):** Let $\Gamma$ be a set of formulas. Then, $\phi$ is deducible from $\Gamma$ if there exists a finite sequence $(\phi_1,\phi_2,\dots, \phi_n)$ of formulas such that $\phi_n=\phi$, and for each $i\leq n$, one of the following is true:
- $\phi_i$ is an axiom
- $\phi_i \in \Gamma$
- $\phi_i$ is derived from some $\phi_j$ and $\phi_k$ with $j,k<i$ using the deduction rules.

In this case, we write that $\Gamma \vdash \phi$.

Note here that we added the line $\phi_i \in \Gamma$. This is important; the notation essentially says that not only is there a proof of $\phi$, but there is the restriction that $\phi$ is provable from the set of formulas $\Gamma$. In general, $\vdash \phi$ is a stronger statement than $\Gamma \vdash \phi$, since the latter is a restriction of the former and states essentially that we can prove $\phi$ without the "assumptions" that construct $\Gamma$.

__Example:__ We want to prove that $\vdash \phi\to \phi$. We can do this as follows (note that we can use any formula as a placeholder for $\psi$ and $\chi$ in the axioms, including using $\phi$ for more than one): 

$$
\begin{align*}
(A1):& (\phi\to((\phi\to\phi)\to\phi))\\
(A2):& ((\phi\to((\phi\to\phi)\to\phi))\to((\phi\to(\phi\to\phi))\to(\phi\to\phi)))\\
(MP):& (\phi\to(\phi\to\phi))\to(\phi\to\phi)\\
(A1):& (\phi\to(\phi\to\phi))\\
(MP):& \phi\to\phi
\end{align*}
$$

Now you may say, "Nyx, this proof system thing seems absurd. Who is writing out this by hand to show that something obviously true is true?" It's correct that this starting proof is unnecessarily verbose for something like $\phi\to \phi$. But now we can just add that $\phi\to\phi$ is provable, and we can use it in future proofs. More importantly, this entire system is computable and mechanized, and we can gradually build upon it to build more and more complex formulas. 

If you have assumptions as part of $\Gamma$, you can also declare the assumptions as steps in the proof similar to axioms. For example, if we have 

__Example__: Prove $\Gamma\vdash (\phi\to \chi)$ if $\Gamma=\{(\phi\to \psi), (\psi\to \chi)\}$. We can do this as follows:

$$
\begin{align*}
(\Gamma):& (\phi\to \psi)\\
(\Gamma):& (\psi\to \chi)\\
(A1):& ((\psi\to\chi)\to(\phi\to(\psi\to\chi)))\\
(MP):& (\phi\to(\psi\to\chi))\\
(A2):& ((\phi\to(\psi\to\chi))\to((\phi\to \psi)\to (\phi\to\chi)))\\
(MP):& ((\phi\to \psi)\to (\phi\to\chi))\\
(MP):& (\phi\to\chi)
\end{align*}
$$

## Soundness and Completeness

The central idea of soundness is that if a formula is provable, then it is true. That is, if we can prove a formula under our system, then in order for our system to be sound it must be the case that the formula is true. This ensures that we cannot report a "false positive", and this concept of "soundness" is generally used in a lot of computing and logic. 

**Theorem (Soundness of Predicate Logic):** If $\Gamma\vdash\psi$, then $\Gamma\models\psi$. In particular, if $\vdash\psi$, then $\models\psi$. In particular, this states that every theorem is a tautology.

**Proof**: We need to show that $\{\phi:\Gamma\models \phi\}$ contains all the axioms, all the formulas in $\Gamma$, and is closed under the deduction rules (in our case MP). The first part is trivial because tautologies are closed under substitutions (recall the last lesson) and (A1)-(A3) are tautologies by truth tables (try it yourself if you want). Then, if $\Gamma\models (\phi\to\psi)$ and $\Gamma\models \phi$, then $\Gamma\models \psi$ by the definition of logical entailment, which we showed last time. And this completes the proof.

The idea of completeness then, is complementary to soundness. We want to show that if a formula is true, then it is provable. That is, our system can "complete" the task of proving all tautologies. This is a much more difficult task, and we will not prove it here, but it is a very important result in logic.

**Theorem (Completeness of Predicate Logic):** If $\Gamma \models \psi$, then $\Gamma\vdash\psi$. In particular, if $\models \psi$, then $\vdash \psi$. In particular, this states that every tautology is a theorem.

This proof is difficult and is kind of what we want to build up to in this series; as a result, I will omit it now, but let's be committed to learning it slowly over time. First, begin with the Deduction Theorem. 

**Lemma (Deduction Theorem):** The following are equivalent: 
1. $\Gamma\vdash (\phi\to \psi)$
2. $\Gamma\cup\{\phi\}\vdash \psi$

These say that if we can prove $\phi\to \psi$ from $\Gamma$, then we can prove $\psi$ from $\Gamma$ and the assumption of $\phi$. That is, if we can prove that $\phi$ implies $\psi$, then we can prove $\psi$ if we assume $\phi$. Intuitively, this makes sense, right? If we can prove that $\phi$ implies $\psi$, then if we assume $\phi$ is true, we can conclude that $\psi$ is true. And in the other direction, if we can prove $\psi$ from $\Gamma$ and the assumption of $\phi$, then by "pulling the assumption out into the statement", the proof should still hold the same way. 

**Proof:** (1) $\implies$ (2): Well, this is just MP. If we have $\Gamma\vdash (\phi\to \psi)$, then we can add $\phi$ to the proof and use MP to conclude $\psi$.

(2) $\implies$ (1): This is a fair bit more difficult. Suppose that $\phi_1,\dots,\phi_n$ is a deduction of $\psi$ from $\Gamma\cup\{\phi\}$. We want to show that $\Gamma\vdash (\phi\to \psi)$. We will do this by induction on $i$, where $i\leq n$, that $\Gamma\vdash \phi\to\phi_i$. Since $\phi_{i=n}=\phi$, we would have that $\Gamma\vdash (\phi\to \psi)$. Take some $\phi_i$, an element in the sequence. Then, if $\phi_i$ is an axiom or an element of $\Gamma$, 
$$
\begin{align*}
(\Gamma):&\phi_i\\
(A1):& \phi_i\to(\phi\to\phi_i)\\
(MP):& \phi\to\phi_i
\end{align*}
$$

If $\phi_i=\psi$, then we can use the tautology $\phi\to\phi$ to conclude that $\Gamma\vdash \phi\to\phi_i$. Finally, suppose that by induction we have the deductions that $\Gamma\vdash (\phi\to \phi_j)$ for all $j\leq i$. Then, we will show that there is a deduction $\Gamma\vdash (\phi\to\phi_i)$. By assumption, $\phi_i$ is not an axiom, or an element of $\Gamma$, so it is deducible using MP from some $\phi_{j_1}, \phi_{j2}$ with $j_1,j_2<i$. This also implies that $\phi_{j_2}$ is (without loss of generality) $\phi_{j_1}\to\phi_i$. By induction we have deductions $\Gamma\vdash (\phi\to \phi_{j_1})$ and $\Gamma\vdash (\phi\to (\phi_{j_1}\to \phi_i))$. Then, 
$$
\begin{align*}
(A2):& ((\phi\to(\phi_{j_1}\to\phi_i))\to((\phi\to \phi_{j_1})\to (\phi\to\phi_i)))\\
(MP):& ((\phi\to \phi_{j_1})\to (\phi\to\phi_i))\\
(MP):& (\phi\to\phi_i)
\end{align*}
$$
And the proof is done. 

# End

A quick one. Next time, we'll go over adequacy theorem, inconsistency, compactness, and decidability.
