---
title: An Introduction to Propositional Logic
created: 2026-01-17
tags: 
  - Logic
  - Mathematics
  - DevPost
---

# Intro

Propositional Logic is a deep topic, covering most of what we can call "logical reasoning". You have probably seen most of it before, and the goal today is to use it towards proving some kind of completeness theorem.

Be warned that at the moment, I have no intention of putting proofs in here. The "introduction" posts will be definitions only, pretty much. I may come back later and have a series of posts titled eg. "Proofs of Propositional Logic", but for now, just definitions.

# Math

The general idea is that propositional logic allows us to define a set of propositions, and then use logical connectives to build more complex propositions. We will distinguish between syntax, semantics, and the proof system that ties them together.

## Basic Definitions

A propositional logic system must be able to express some kind of statement, give a meaning to that statement, and then have a way to prove things about those statements.

To put it another way, think of the typical Algebra 1 expressions you work with. We need a way to write expressions and formulas, eg "x+y" and "2+3", a way to assign meaning to those expressions, eg "x=2" and "y=3", and then a way to prove things about those expressions, eg "2+3=5".

### Structure of Propositional Logic

**Definition (Propositional Symbols):** I include the tex here for easy copy pasting for those using tex.

| Symbol | Name | Meaning | Tex |
|--------|------|---------| ----|
| $\wedge$ | And | Conjunction | `\wedge` |
| $\vee$ | Or | Disjunction | `\vee` |
| $\neg$ | Not | Negation | `\neg` |
| $\rightarrow$ | Implies | Implication | `\rightarrow` |
| $()$ | Parentheses | Grouping | `()` |

Note that we are defining grouping here! 

If you have ever taken a programming languages course, you will know that grouping is very important for defining order of operations. We will not define a "parser" here, but know that parentheses are very important, and that when we evaluate expressions, we will always evaluate it as if there *was* a parser.

For instance, we will always evaluate the innermost parentheses first. Additionally, we must group every expression with parentheses. For example, instead of writing $A \wedge B \rightarrow C$, we will write $((A \wedge B) \rightarrow C)$. 

If I do not write parentheses, it should be obvious from context that I am omitting them for brevity, and that it can be grouped in a way that makes sense.

**Definition (Propositional Variable):** A propositional variable, the set of which will be denoted $Var$, is just some set of symbols that represent a proposition. For example, $P$, $Q$, and $R$ could be propositional variables. The cardinality of this set must be at least countably infinite, eg $|Var|=\aleph_0$.

**Definition (Propositional Formula):** A propositional formula is the following:
- Any propositional variable is a propositional formula.
- Propositional formulas are closed under the logical connectives defined above. For example, if $A$ and $B$ are propositional formulas, then so are $(A \wedge B)$, $(A \vee B)$, $(\neg A)$, and $((A) \rightarrow (B))$.
- Nothing else is a propositional formula.

Note that this is a recursive (or inductive) definition. We can build up complex formulas from simpler ones, and that is the only way we can do them. It also means we can break down complex formulas into simpler ones by finding a recursive path that builds it up, and then reversing that path. Note that this recursive path also doesn't have to be unique under valuation; for example, $((A \wedge B) \vee C)$ can be built up in two different ways depending on which connective we apply first, which are $((A \wedge B))$ and $C$, or $A$ and $(B \vee C)$.

When discussing how to build a tree of a propositional formula, we may use "recursive" because it's more computational. However, when discussing proofs by induction on propositional formulas, we will use "inductive" since it's more mathematical.

__TLDR__: a propositional formula is the smallest possible set of things that contains all propositional variables and is closed under the logical connectives.

Because formulas are inductive items, proofs on them will be done with structural induction, eg by proving a base case and then showing that the property holds under closure.

**Definition (Subformula):** The function $Sub$, which defines the set of subformulas of a propositional formula, is defined as follows:
- $Sub(P) = \{ P \}$ for any propositional variable $P$.
- $Sub((\neg A)) = \{ (\neg A) \} \cup Sub(A)$.
- $Sub((A \wedge B)) = \{ (A \wedge B) \} \cup Sub(A) \cup Sub(B)$.
- $Sub((A \vee B)) = \{ (A \vee B) \} \cup Sub(A) \cup Sub(B)$.
- $Sub((A \rightarrow B)) = \{ (A \rightarrow B) \} \cup Sub(A) \cup Sub(B)$.
- Nothing else.

As an example, let's prove that for all formulas, $\phi$, we have that $\phi \in Sub(\phi)$. Again, we will do this by structural induction.

**Example:** We will prove that for all formulas, $\phi$, we have that $\phi \in Sub(\phi)$.

**Proof:** We will do this by structural induction on $\phi$.
- **Base Case:** Let $\phi$ be a propositional variable, $P$. Then, by the definition of $Sub$, we have that $Sub(P) = \{ P \}$, so $P \in Sub(P)$.
- **Inductive Step:** Assume that for all formulas $A$ and $B$, we have that $A \in Sub(A)$ and $B \in Sub(B)$. We will show that this holds for the formulas $(\neg A)$, $(A \wedge B)$, $(A \vee B)$, and $(A \rightarrow B)$.
  - Let $\phi = (\neg A)$. Then, by the definition of $Sub$, we have that $Sub((\neg A)) = \{ (\neg A) \} \cup Sub(A)$. By the inductive hypothesis, we have that $A \in Sub(A)$, so $(\neg A) \in Sub((\neg A))$.
  - Let $\phi = (A \wedge B)$. Then, by the definition of $Sub$, we have that $Sub((A \wedge B)) = \{ (A \wedge B) \} \cup Sub(A) \cup Sub(B)$. By the inductive hypothesis, we have that $A \in Sub(A)$ and $B \in Sub(B)$, so $(A \wedge B) \in Sub((A \wedge B))$.
  - Let $\phi = (A \vee B)$. Then, by the definition of $Sub$, we have that $Sub((A \vee B)) = \{ (A \vee B) \} \cup Sub(A) \cup Sub(B)$. By the inductive hypothesis, we have that $A \in Sub(A)$ and $B \in Sub(B)$, so $(A \vee B) \in Sub((A \vee B))$.
  - Let $\phi = (A \rightarrow B)$. Then, by the definition of $Sub$, we have that $Sub((A \rightarrow B)) = \{ (A \rightarrow B) \} \cup Sub(A) \cup Sub(B)$. By the inductive hypothesis, we have that $A \in Sub(A)$ and $B \in Sub(B)$, so $(A \rightarrow B) \in Sub((A \rightarrow B))$.

Thus, by structural induction, we have that for all formulas $\phi$, we have that $\phi \in Sub(\phi)$.

This is a *very* bulky proof! For the future, I will truncate similar proofs to just the base case and one inductive step, since the rest are analogous. Additionally, we will avoid trying to prove things that are obvious.

**Definition (Variables):** Let's formally define the function $Var(\phi)$, which gives us the set of propositional variables in a formula $\phi$. Note that $Var()$ is different than $Var$. The first is a function that produces a set of propositional variables from a formula, while the second is the set of all propositional variables.
- $Var(P) = \{ P \}$ for any propositional variable $P$.
- $Var((\neg A)) = Var(A)$.
- $Var((A \wedge B)) = Var(A) \cup Var(B)$.
- ... and so on for the other connectives.
- Nothing else.

### Substitution

The notion of substitution is something that we should all understand to some degree. In 6th grade algebra, when we have the expression $x + 2$, and we don't know what $x$ is in *this* expression, but we do know that $x = 3$ from some other context, we can replace $x$ with $3$ to get $3 + 2 = 5$.

The idea is that we can replace things in propositional logic too. They can be from within the same universe of discourse, or from different ones. For example, if we have the formula $(P \wedge Q)$, and we know that $P$ is equivalent to $(R \vee S)$, then we can replace $P$ with $(R \vee S)$ to get $((R \vee S) \wedge Q)$.

**Definition (Substitution):** Let $A\in Var$ (recall that this is the set of all propositional variables), and let $\phi$ be a propositional formula. Let $\psi$ be another propositional formula. Then, we define the substitution of $A$ with $\psi$ in $\phi$ as 

$$
\phi[\psi/A] = \phi[A := \psi]
$$

These two notations are equivalent. We will use the first. In order for it to be well defined, let's have that 
- For $B\in Var$, then $$ B[\psi/A] = \begin{cases} \psi & \text{if } B = A \\ B & \text{if } B \neq A \end{cases} $$
- For $(\neg \phi)$, then $$ (\neg \phi)[\psi/A] = \neg (\phi[\psi/A]) $$
- For $(\phi_1 \wedge \phi_2)$, then $$ (\phi_1 \wedge \phi_2)[\psi/A] = (\phi_1[\psi/A] \wedge \phi_2[\psi/A]) $$
- ... and so on for the other connectives.
- Nothing else.

A shorthand we're going to make here is that 
$$
\phi[\psi_1/A_1, \psi_2/A_2, \ldots, \psi_n/A_n] = \phi[\psi_1/A_1][\psi_2/A_2] \ldots [\psi_n/A_n]
$$

Next, we will define a lemma, which basically just states that substitution on a variable that does not exist in the formula does nothing. To make an analogy if $x=5$ and we have the expression $y + 2$, substituting $x$ with $5$ does nothing since $x$ is not in the expression.

**Lemma:** If $A\notin Vars$, then $$\phi[\psi/A]=\phi$$

**Proof:** We will use induction on the structure of formulas. 

__Base case__: Let $\phi=B\in Var$. Then, assuming that $A\notin Vars(B)$, eg that $A\neq B$, then $\phi[\psi/A]=B$.

__Inductive Step__: Assume that for formulas $\psi, \phi$ if $A\notin Vars(\phi)$ then $\phi[\psi/A]=\phi$, and if $A\notin Vars(\psi)$, then $\psi[\psi/A]=\psi$. We must show it holds for $\neg, \wedge, \vee, \rightarrow$.

- For $(\neg \phi)$, if $A\notin Vars((\neg \phi))$, then $A\notin Vars(\phi)$. Thus, by the inductive hypothesis, we have that $\phi[\psi/A]=\phi$. Therefore, $(\neg \phi)[\psi/A] = \neg (\phi[\psi/A]) = \neg \phi$.
- For $(\phi_1 \wedge \phi_2)$, if $A\notin Vars((\phi_1 \wedge \phi_2))$, then $A\notin Vars(\phi_1)$ and $A\notin Vars(\phi_2)$. Thus, by the inductive hypothesis, we have that $\phi_1[\psi/A]=\phi_1$ and $\phi_2[\psi/A]=\phi_2$. Therefore, $(\phi_1 \wedge \phi_2)[\psi/A] = (\phi_1[\psi/A] \wedge \phi_2[\psi/A]) = (\phi_1 \wedge \phi_2)$.
- ... and so on for the other connectives.

**Definition (Propositional Sentence):** A propositional sentence is a propositional formula with no free variables. In other words, all variables in the formula are bound by some quantifier. At the moment, since we have not defined quantifiers, all propositional formulas are propositional sentences.

## Tautologies, Contradiction, Entailment, and Proofs

Now that we have some basic definitions and syntax out of the way, we want to define some semantics. The idea is that we want to be able to assign truth values to propositional formulas, and then use those truth values to determine whether a formula is a tautology, contradiction, or contingent.

### What does truth mean?

**Definition (Truth Table):** We want to give meetings to our formulas, and one of the easiest ways to do that is via truth tables. A truth table represents a **truth function**, which is a mapping from propositional variables to truth values (True or False).

We will denote $T$, or $True$, as the truth value "true", and $F$, or $False$, as the truth value "false". Propositional variables can take on either truth value.

Then, truth functions map ${F,T}^{|S|} \to {F,T}$, where $S$ is some set of propositional variables. For example, the truth function for $(P \wedge Q)$ is defined as follows:

| P | Q | (P ∧ Q) |
|---|---|---------|
| T | T |    T    |
| T | F |    F    |
| F | T |    F    |
| F | F |    F    |

If you are unfamiliar with the basic definitions of our connectives, here is a quick refresher: the conjunction $(P \wedge Q)$ is true if both $P$ and $Q$ are true, and false otherwise. The disjunction $(P \vee Q)$ is true if at least one of $P$ or $Q$ is true, and false otherwise. The negation $(\neg P)$ is true if $P$ is false, and false if $P$ is true. The implication $(P \rightarrow Q)$ is false only when $P$ is true and $Q$ is false; otherwise, it is true. These can be summarized in truth tables as well.

Note that we have ex falso quodlibet here: from a contradiction, anything follows. That is to say, $F \rightarrow x$ is always true, regardless of the truth value of $x$. 

**Definition (Truth Assignment):** A truth assignment is a function $\mathcal{A}$ which assigns each propositional variable a truth value. That is, $\mathcal{A}: Var \to \{T,F\}$. This gives a *meaning* to propositional formulas.

Then, we can define the evaluation of a propositional formula under a truth assignment! Assume that we have, defined by truth tables, the functions $f_{\wedge}, f_{\vee}, f_{\neg}, f_{\rightarrow}$ which give the truth values of the respective connectives given their inputs.

**Definition (Valuation Function):** Then, we can define the valuation function $\mathtt{val}$ as
- $\mathtt{val}_{\mathcal{A}}(P) = \mathcal{A}(P)$ for any propositional variable $P$, eg $P \in Var$.
- Let $\phi_1$ and $\phi_2$ be propositional sentences (a reminder that in our current system a propositional sentence is equivalent to a propositional formula). Then, 
  - $\mathtt{val}_{\mathcal{A}}((\neg \phi_1)) = f_{\neg}(\mathtt{val}_{\mathcal{A}}(\phi_1))$
  - $\mathtt{val}_{\mathcal{A}}((\phi_1 \wedge \phi_2)) = f_{\wedge}(\mathtt{val}_{\mathcal{A}}(\phi_1), \mathtt{val}_{\mathcal{A}}(\phi_2))$
  - ... and so on for the other connectives.

We write $\phi[\mathcal{A}]$ as shorthand for $\mathtt{val}_{\mathcal{A}}(\phi)$.

**Definition (Models):** We say that a truth assignment $\mathcal{A}$ is a model of a propositional formula $\phi$ if $\mathtt{val}_{\mathcal{A}}(\phi) = T$. Then, we write that $\mathcal{A} \models \phi$. In other words, the formula evaluates to true under the truth assignment. Similarly $\mathcal{A}\not\models \phi$ if $\mathtt{val}_{\mathcal{A}}(\phi) = F$.

**Definition (Tautology):** A formula $\phi$ is a tautology if for ALL assignments $\mathcal{A}$, we have that $\mathcal{A} \models \phi$. In other words, the formula is always true regardless of the truth values of its propositional variables. We denote this as $\models \phi$. 

An example of a tautology is $(P \vee \neg P)$, which is true regardless of whether $P$ is true or false. (you can choose any valuation for $P$, and it will always be true)

This tautology is called the law of excluded middle. Another tautology is MP, or Modus Ponens, which states that $((A\wedge (A \rightarrow B)) \rightarrow B)$ is a tautology. That is to say, if we know $A$, and $A\to B$, then we can conclude $B$.

It's somewhat controversial if the law of excluded middle should be a tautology, since in some logics (eg intuitionistic logic), it is not. However, in classical propositional logic, it is. And MP is definitely a tautology in all standard propositional logics.

**Definition (Logical Entailment):** A formula $\phi$ __logically entails__ a formula $\psi$ if for all $\mathcal{A}$, such that $\phi[\mathcal{A}]=T$, we have that $\psi[\mathcal{A}]=T$. In other words, whenever $\phi$ is true, $\psi$ is also true. We denote this as $\phi \models \psi$.

More generally, for a set of formulas $\Gamma$, we say that $\Gamma$ logically entails $\psi$ if for all $\mathcal{A}$, such that for all $\phi \in \Gamma$, we have that $\phi[\mathcal{A}]=T$, then $\psi[\mathcal{A}]=T$. In other words, whenever all formulas in $\Gamma$ are true, then $\psi$ is also true. We denote this as $\Gamma \models \psi$.

**Definition (Logical Equivalence):** We say that a formula $\phi$ is logically equivalent to a formula $\psi$ if $\phi\leftrightarrow \psi$ is a tautology. In terms of logical entailment, this is equivalent to saying that $\phi \models \psi$ and $\psi \models \phi$. We denote this as $\phi \equiv \psi$.

It's a fun exercise to prove that if $\phi$ and $\psi$ are formulas, then the following are equivalent: $\phi$ logically implies $\psi$, and $(\phi \rightarrow \psi)$ is a tautology. In symbols, $\phi \models \psi$ if and only if $\models (\phi \rightarrow \psi)$.

**Definition (Unsatisfiable):** A formula $\phi$ is unsatisfiable if there is NO truth assignment $\mathcal{A}$ such that $\mathcal{A} \models \phi$. In other words, the formula is always false regardless of the truth values of its propositional variables. We can also say that a set of formulas $\Gamma$ is unsatisfiable if there is NO truth assignment $\mathcal{A}$ such that for all $\phi \in \Gamma$, we have that $\mathcal{A} \models \phi$.

### Truth Functions

Let $\mathbb{A}$ be the set of all truth assignments. Then, we should intuitively be able to define a function from truth assignments to truth values for any propositional formula. This is called a truth function.

**Definition (Truth Function):** A function $f: \mathbb{A}\to \{T,F\}$ is a truth function if there exists a finite set of variables $\{A_1,\dots, A_n\}\subseteq Var$ such that for all assignments $\mathcal{A}, \mathcal{B}$ we have that if 

$$ \mathcal{A}(A_i) = \mathcal{B}(A_i) \text{ for all } i=1,\dots,n $$

Then, we have that $f(\mathcal{A}) = f(\mathcal{B})$. In this case, we can call $\{A_1,\dots, A_n\}$ the set of variables that $f$ depends on, or the *support* of $f$. 

Then, given some formula $\phi$ we can define the function for $\phi$ in the most obvious way:

$$ f_{\phi}: \mathbb{A} \to \{T,F\} = \mathcal{A} \mapsto \mathtt{val}_{\mathcal{A}}(\phi) $$

Note that every propositional variable implies a truth function, where $$ f_{P}: \mathbb{A} \to \{T,F\} = \mathcal{A} \mapsto \mathcal{A}(P) $$ The support of this function is just $\{P\}$.

Additionally, all truth functions can be described by a finite truth table. This is because the support of a truth function is finite, and thus there are only finitely many combinations of truth values for the variables in the support. Thus, we can enumerate all possible combinations of truth values for the variables in the support, and then define the output of the function for each combination. This is of course impractical for large supports, but it is theoretically possible, and might remind you that we are working with finite, countable objects here.

**Definition (Adequacy of Truth Functions):** Let $\mathcal{F}$ be a set of truth functions. We will say that $\mathcal{F}$ is adequate if for every truth function $f$, there exists a formula $\phi$ such that the truth function induced by $\phi$ is equal to $f$, and $\phi$ only uses truth functions from $\mathcal{F}$.

That is, every truth function $g:\{T,F\}^n \to \{T,F\}$ can be expressed as a propositional formula using only the truth functions in $\mathcal{F}$ under composition. 

**Theorem:** I don't really do theorems in this because I didn't want to bloat the post with proofs, but it's worth stating that the set of truth functions $\{\wedge, \vee, \neg\}$ is adequate. It might be a fun exercise to show that the remaining functions $\rightarrow$ and $\leftrightarrow$ can be expressed in terms of these three functions.

From this, you can also deduce that $\{\rightarrow, \neg\}$ is adequate, since you can express $\wedge$ and $\vee$ in terms of these two functions.

# End

Next: Propositional logic proof systems.