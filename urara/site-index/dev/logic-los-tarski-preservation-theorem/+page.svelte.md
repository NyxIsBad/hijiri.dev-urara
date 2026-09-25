---
title: The Łoś–Tarski Preservation Theorem
created: 2026-09-25
tags:
  - Logic
  - Mathematics
  - Model Theory
  - DevPost
summary: A quick summary of the Los Tarski preservation theorem
---

# Intro

This is the Łoś–Tarski preservation theorem, it's statement, and proof. I personally learned this back in undergraduate logic class, but it's a good starter theorem to learn that has some nice consequences. I also wrote the  corresponding [Wikipedia article proof on the Łoś–Tarski preservation theorem](https://en.wikipedia.org/wiki/%C5%81o%C5%9B%E2%80%93Tarski_preservation_theorem), so that's a bit of ulterior motivation to write this lmao.

# Theorem

Fix a first order logic $L$. Then,

**Definition (Substructure):** If $A\subseteq B$ are $L$ structures, then $A$ is a substructure of $B$ if
- the domain of $A$ is a subset of the domain of $B$,
- every function symbol of $B$ restricts to $A$, and
- every relation of $A$ is the corresponding relation of $B$ restricted to tuples from $A$.

**Definition (Universal Sentence):** A universal sentence is a sentence logically equivalent to the form 
$$
\forall x_1 \cdots \forall x_n\, \psi(x_1, \ldots, x_n)
$$ where $\psi$ is quantifier free. These formulas are also called $\forall_1$ formulas

**Definition (Preserved under substructures):** A sentence $\varphi$ is preserved under substructures if whenever $A\subseteq B$ and $B\models \varphi$, we have $A\models \varphi$.

**Theorem (Łoś–Tarski):** Let $\varphi$ be a first order $L$-sentence. Then, the following are equivalent:

1. If $A \subseteq B$ and $B \models \varphi$, then $A \models \varphi$.
2. $\varphi$ is logically equivalent to a universal $L$-sentence.

Our first condition states that $\varphi$ is preserved under substructures. It's extremely strong! It must hold for *every* structure satisfying $\varphi$ and *every* substructure of that structure.

## Intuition

The easy direction of the theorem (that universal sentences are preserved under substructures) is easy to grasp the intuition of: If $B \models \forall \bar{x}\,\psi(\bar{x})$, then every tuple from substructure $A$ already makes $\psi$ true in $B$. Since quantifier free formulas have the same truth value in $A$ and $B$ on tuples from $A$, the same tuple makes $\psi$ true in $A$. Note that universal quantifiers only ask us to check elements that remain after passing to a substructure.

In contrast, an existential statement could fail in a substructure. A trivial example: if $B\models \exists x,P(x)$ because a newly added element satisfies $P$, a substrucuture $A$ that omits the element may not satisfy the sentence.

There's another way that we can state this theorem, however. It's stronger and is relative to the theory $T$.

**Theorem (Łoś–Tarski):** Let $T$ be a theory in $L$. Let $\Phi(\bar{x})$ a set of $L$-formulas, where the tuple $\bar{x}$ may be infinite. Then the following are equivalent:

1. If $A \subseteq B$ are both models of $T$, $\bar{a}$ is a tuple from $A$, and $B \models \bigwedge \Phi(\bar{a})$, then $A \models \bigwedge \Phi(\bar{a})$.
2. Mod $T$, the set $\Phi$ is equivalent to a set of $\forall_1$ formulas.

If we take $T$ to be empty, and let $\Phi=\{\varphi\}$, we can derive the form above; the relative form is a generalization of the sentence form. 

The relative form is also useful for studying theories; this is because if a theory $T$ is preserved under substructures, then its universal part $T_{\forall}$ is equivalent to $T$. 

__Note__: For a theory $T$, the universal part $T_{\forall}$ records for substructures of models of $T$. The theorem demonstrates why. Also of note is that if an elementary class is closed under substructures, then this theorem states that it has a universal axiomatization. Conversely a counterexample by substructure proves that no universal axiomatization can exist.

**Example:** The sentence
$$
\forall x\,\neg R(x,x),
$$

is universal. We know this because of the theorem + the fact that induced substructure of an irreflexive structure is still irreflexive.

__Note:__ If an arbitrary first order sentence survives under all substructures, then (even if it was written with alternating quantifiers) there must be some logically equivalent universal sentence behind it.

**Example:** Take

$$
\forall x\,\exists y (x=y\wedge (P(y)\rightarrow Q(y)))
$$

This is equivalent to the universal sentence 

$$
\forall x(P(x)\rightarrow Q(x))
$$

But we can also derive this by showing the original sentence is preserved under substructure and then citing this theorem.

# Proof

I will prove the sentence form.

## Universal sentences are preserved

($\Leftarrow$): Suppose

$$
\varphi \equiv \forall \bar{x}\,\psi(\bar{x}),
$$

where $\psi$ is quantifier free. Let $A \subseteq B$ with $B \models \varphi$. Then for each $\bar{a}$ from $A$, $B \models \psi(\bar{a})$. Quantifier free formulas are evaluated identically in a structure vs its substructures on tuples from the smaller structure, so $A \models \psi(\bar{a})$. Therefore $A \models \varphi$.

## From preservation to a universal sentence

($\Rightarrow$): Let $\varphi$ be preserved under substructures. Let $\Gamma$ be the set of all universal $L$-sentences that are logical consequences of $\varphi$. We will show that

$$
\Gamma \models \varphi
$$

Let $A \models \Gamma$. For each element $a$ in $A$, let $c_a$ be a new constant symbol. Add $c_a$ to the language $L$ for each $a\in A$. 

**Definition (Diagram):** Let $A$ an $L$-structure. Then, the diagram of $A$ is the set of all atomic and negated atomic sentences in the expanded language that is true in $A$. The notation for this is $\operatorname{Diag}(A)$.

Then here, we have that $\operatorname{Diag}(A)$ is the set of all atomic and negated atomic sentences in the expanded language that are true in $A$.

We will claim that
$$
\{\varphi\} \cup \operatorname{Diag}(A)
$$

is satisfiable. On the contrary, suppose it is not satisfiable. By compactness, there exists some finite conjunction $\delta(\bar{c})$ of sentences from $\operatorname{Diag}(A)$ that is inconsistent with $\varphi$. Replace those finitely many new constants with variables. Then

$$
\varphi \models \forall \bar{x}\,\neg\delta(\bar{x}).
$$

The sentence on the right is universal, so it belongs to $\Gamma$. But $A \models \delta(\bar{a})$ for the elements named by $\bar{c}$, a contradiction. 

Take a model $B$ of $\{\varphi\} \cup \operatorname{Diag}(A)$. By the diagram lemma (since $B\models \operatorname{Diag}(A)$), $A$ is isomorphic to a substructure of the reduct of $B$ to the original language $L$. The reduct of $B$ satisfies $\varphi$.

Preservation under substructures gives $A \models \varphi$. Since $A$ is arbitrary, $\Gamma \models \varphi$.

Compactness admits some finite $\Gamma_0 \subseteq \Gamma$ st

$$
\Gamma_0 \models \varphi.
$$

Because of how $\Gamma$ was defined, $\varphi$ will imply every member of $\Gamma_0$. Thus

$$
\varphi \equiv \bigwedge \Gamma_0.
$$

By a theorem, the conjunction of finitely many universal sentences is again equivalent to one universal sentence. Thus $\varphi$ is equivalent to a universal sentence.

# Epilogue

Surely I will write more logic articles.