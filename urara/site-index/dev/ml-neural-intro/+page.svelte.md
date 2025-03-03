---
title: An Introduction to Neural Networks and LLMs
created: 2025-02-27
tags: 
  - Machine Learning
  - Neural Networks
  - DevPost
---

# Intro

There's a lot. like, a LOT. of math, and history, that we can go into with regards to neural networks. For the sake of trying to make the article more approachable (if you're using my articles as a reference paper for your classes you REALLY shouldn't) I'm going to gloss over anything that's not essentially high school maths. Let it be known that I will not be directly referencing many of the founding papers of neural networks.

If you're interested about the specifics of neural models with regards to LLMs, try reading this [paper by Bengio et al](https://papers.nips.cc/paper_files/paper/2000/file/728f206c2a01bf572b5940d7d9a8fa4c-Paper.pdf). And for those who want to approach the math of backprop in more detail, read this [blog post by Karpathy](http://karpathy.github.io/neuralnets/)!

# Learning Basics

Neural networks can easily be seen as a black box that takes in some input, and spits out some output. Okay, great. For the sake of introduction, suppose that it is, in fact, a black box. Let's create a basic 1 node network that will learn to give us `y=x`.

The node starts off by operating on one input (a number), and gives one output (also a number). The node has a weight, which is a number that it multiplies the input by. The node also has a bias, which is a number that it adds to the output. These are both randomly initialized. 

Using python, our node looks like this:

```python
class Node:
    def __init__(self):
        self.weight = random.random()
        self.bias = random.random()

    def forward(self, x):
        return x * self.weight + self.bias
```

Note that we are using the `forward` method to compute the output of the node. This is because we will later add more methods to the node, and we want to keep the code organized.

## Adjusting for Loss 

Now, we want it to give us `y=x`, the "target". We will do this by using a loss function, which will figure out how far away the output is from the "target" and then update the weights and biases accordingly.

```python
class Node:
    def __init__(self):
        self.weight = random.random()
        self.bias = random.random()

    def forward(self, x):
        return x * self.weight + self.bias

    def loss(self, x, y):
        output = self.forward(x)
        # Note that we square this here to make sure that the loss is always positive
        # This is called the Mean Squared Error (MSE) loss
        return (output - y) ** 2
```

Now that we have this loss, how do we update the weights and biases? We will use a method called **gradient descent**. This is a method that will update the weights and biases in the direction that will minimize the loss. This goes into the math of derivatives, but the essence is that we figure out how much the loss will change if we change the weight or bias by a small amount, and then update the weight or bias in the direction that will minimize the loss.

We calculate the gradient as

$$
\frac{\partial L}{\partial w} = \frac{2}{N}\sum_{i=1}^N (y_i - \hat{y}_i)x_i
$$

where $L$ is the loss, $w$ is the weight, $N$ is the number of samples, $y_i$ is the target, $\hat{y}_i$ is the output, and $x_i$ is the input.

This is the gradient of, specifically, the MSE loss function. MSE is commonly used for regression problems (like this one), where we want to have a common loss function that is easy to compute and differentiable. 

Much more generally, gradient can be calculated as

$$
\frac{\partial L}{\partial w} = \frac{1}{N}\sum_{i=1}^N \frac{\partial L}{\partial \hat{y}_i}\frac{\partial \hat{y}_i}{\partial w}
$$

where $\hat{y}_i$ is the output of the model, and $w$ is the weight. This is called the **chain rule**, and it allows us to compute the gradient of any loss function with respect to any weight.

Then, we update the weights and biases as
$$
w = w - \alpha \frac{\partial L}{\partial w}
$$

Where $\alpha$ is the learning rate, which is a **hyperparameter** that controls how much we update the weights and biases. Hyperparameters are parameters that are not *learned* (like weights and biases are, for us) but are set before training. 

Generalizing this again, we could imagine that a node with many weights and many biases can be computed as 

$$
y=f(w_1x_1+b_1,w_2x_2+b_2,\dots,w_nx_n+b_n)
$$

where $f$ is some function (we're going to go over this later, but if you're familiar with activation functions, this is that), and $w_i$ and $b_i$ are the weights and biases. For now note we aren't using any activation function, so $f$ is just the identity function.

## Training

Now we have all the pieces, we can "train" our node by giving it a bunch of inputs and the corresponding targets (we call this the "dataset"), and then updating the weights and biases using gradient descent. 

Essentially, since we already know `y=x`, we can just give it a bunch of input/output pairs, and if we define the gradient descent correctly it will learn to give us `y=x`.

```python
class Node:
    def __init__(self):
        self.weight = random.random()
        self.bias = random.random()

    def forward(self, x):
        return x * self.weight + self.bias

    def loss(self, x, y):
        output = self.forward(x)
        return (output - y) ** 2

    def gradient(self, x, y):
        output = self.forward(x)
        dL_dy = 2 * (output - y)
        dy_dw = x
        return dL_dy * dy_dw

    def update(self, x, y, alpha):
        grad = self.gradient(x, y)
        self.weight -= alpha * grad

    def train(self, dataset, alpha):
        for x, y in dataset:
            self.update(x, y, alpha)
node = Node()
dataset = [(i, i) for i in range(100)]
node.train(dataset, 0.01)
```

Note that we never actually defined the function `y=x` anywhere in here! We just gave it a bunch of random numbers and it was able to "correct" itself to learn the function. 

Imagine you're blind, and you have a ball in your hand. You want to throw the ball to your friend, but you can't see them. First, you throw the ball. It likely won't hit your friend, but you have an "oracle" that tells you how far off you were. You then adjust your throw based on the feedback, and throw again. You keep doing this until you hit your friend. This is essentially what we did here. 

# Neural Networks

Well, neural networks are just a bunch of nodes. Imagine that instead of one we had, let's say, 10 nodes, 100 nodes, or (as many LLMs do nowadays), tens of billions of nodes. 

## Structure

How do we connect these nodes? Well, we can connect them in a few ways. The most common way is to have a "layer" of nodes, where each node is connected to every other node in the next layer. This is called a **fully connected layer**.

There are also other types of layers, such as **convolutional layers**, which are used for image processing, and **recurrent layers**, which are used for sequence processing.

We can also have "skip connections", where we connect nodes from one layer to nodes in a later layer. This is called a **residual connection**.

Other types of model architectures include **transformers**, which are used for sequence processing, and **graph neural networks**, which are used for graph processing.

Many of these are not very relevant for LLMs and language modelling, so we won't go too hard into them in this series. However, I highly suggest going over them if you're interested in the field of machine learning!

## Activation Functions

We were talking about that function $f$ earlier. This is called an **activation function**, and it is used to introduce non-linearity into the model. 

Essentially, if you didn't have any activation functions, then the nodes (or **neurons**), could just "collapse". To illustrate, suppose we had 2 nodes as simple as the one earlier, in series. Then,

$$
y_1 = w_1x_1 + b_1
$$
and

$$
y_2 = w_2y_1 + b_2
$$

Then, you could expand this to 

$$
y_2 = w_2(w_1x_1 + b_1) + b_2 = w_2w_1x_1 + w_2b_1 + b_2
$$

Note that this is just a linear function $ax+b$ where $a=w_2w_1$ and $b=w_2b_1+b_2$.

This means that if you had a network of 1000 nodes, you could just collapse it into one node with a weight of $w_1w_2\dots w_{1000}$ and a bias of $b_1+b_2+\dots+b_{1000}$.

Thus, we want "nonlinearities" in between in order to allow for complex behavior. 

There are many activation functions, but the most common ones are:

- **ReLU**: $f(x) = \max(0, x)$
- **Sigmoid**: $f(x) = \frac{1}{1+e^{-x}}$
- **Tanh**: $f(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$
- **Softmax**: $f(x_i) = \frac{e^{x_i}}{\sum_{j=1}^n e^{x_j}}$

[There's a whole wikipedia article](https://en.wikipedia.org/wiki/Activation_function) with a table of other ones if you're interested!

The most common one is the ReLU, which is used in most modern neural networks. The sigmoid and tanh are used in older neural networks, and the softmax is used in the output layer of classification models. 

There's a lot of reasons why you might use one over the other (and softmax in particular is only really used in the output layer of non-regression models), but it actually turns out that with enough compute and data you can pretty much use any activation function and get similar results.

# Conclusion

Well, that's it for this one, just a quickie. This basic setup of nodes allows you to "learn" and regress to very basic functions, like polynomial math equations. 

In the next one we'll go over a bit of intermediary knowledge and then jump to RNNs, which is where LLMs really started to become powerful.