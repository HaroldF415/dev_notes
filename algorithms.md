# Algorithms and Data Stuctures

There is a book I bought years ago when I was first starting to learn COMP SCI. Eveytime I would start it I would give up before reaching the 2nd chapter. This time around I will do better.

_Book_

Name: Introduction to Algorithms [3rd Edition]
Authors: Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.

# I - Foundations

## Algorithms

### "We should consider algorithms as a technology."

Just reading the introduction to this book I'm hit with a barrage of information that almost makes no sense to me. But I will write them down in this markdown file and find out what it all means.

Algorithms in this book will be presented in "pseudocode". For clarity's sake let's define these vocabulary terms:

Algorithm: a list of well-defined steps that provide instructions on how to accomplish a specific task.

Pseudocode: a way to express the logic of an algorithm in a more human-readable and informal manner.

Pseudocode serves as an intermediate step between a high-level description of an algorithm and actual code written in a specific programming language.

There are different kinds of algorithms most importantly sorting algorithms.

Insertion Sort - uses an incremental approach.
Merge Sort - uses recursive technique [ divide and conquer ]

The time each sorting algorithm requires increases with the value of _n_ [ the rate of increase between the two algorithms. ]

In order to express this "asymptotic notation" is used.

Asymptotic Notation: [ Big O Notation ] - is a mathematical notation used in computer science and software engineering to analyze and describe the performance or efficiency of algorithms. It provides a way to express the upper bound or worst-case behavior of an algorithm's runtime or space complexity in terms of its input size.

Methods for solving recurrences: useful for describing the running times of recursive algorithms.

Recursive Algorithms: they are algorithms that solve problems by breaking them down into smaller, self-similar subproblems of the same type.

A powerful technique for describing the running times of recursive methods are "Master Methods".

Master Method/Theorem: is a mathematical tool used for analyzing the time complexity of divide-and conquer algorithms. It provides a way to determine the time complexity of such algorithms by solving recurrence relations that describe the algorithm's behavior.

Probabilistic Analysis and Randomized Algorithms.

Probabilistic Analysis: allows researchers and practioners to account for uncertainty and randomness in their analysis, leading to more realistic assessments of algorithm or system performance in the real-world.

Probability Distribution: is a mathematical function or description that defines the likelihood of different outcomes or valies in a random experiment, process, or system. It provides a way to represent and quantify the uncertainty associated with various possible outcomes.

Randomized Algorithm: an algorithm whose behavior is determined not only by its input but by the values produced by a random-number generator.

Randomized algorithms can be used to enforce or sample from a desired probability distribution for inputs in various computational and statistical tasks. This approach is useful when we need to generate random samples that follow a specific distribution. [rules or probabilities]

Thereby ensuring that no particular input always causes poor performance.

"An algorithm is a sequence of well-defined computational steps that transform the input into an output."
"An algorithm is a tool to solve a well-specified computational problem."
"An algorithm describes a specific computational procedure for achieving that input/output relationship."

An instance of a problem consists of the input ( satisfying whatever constraints are imposed in the problem statement ) needed to compute a solution to the problem.

Translation....

When dealing with a problem, you have to start with a specific situation or example [ the instance ], and this situation includes certain information [ the input ] that followes the rules set by the problem [ constraints ]. This input is crucial because it's what you use to figure out the answer or solution to the problem.

## Sorting is a fundamental operation in Computer Science.

Algorithms allows individuals to accomplish tasks [ solve problems ] while efficiently using resources.

Clever algorithms are used on websites to manage and manipulate large volumes of data.

In public-key cryptography and digital signatures, the choice of algorithms is essential for security and efficiency. Researchers continually analyze and improve these algorithms to withstand evolving threats and maintain the integrity and confidentiality of digital communications and transactions.

Linear programming is used to allocate scarce resources in the most beneficial way. Linear programming helps organizations and decision-makers make efficient devisdions when facedf with limited resources and multiple competing objectives.

Dynamic Programming: is a powerful technique used in computer science and mathematics for solving complex problems by breaking them down in simpler overlapping subproblems and solving each subproblem only once. It is especially useful for optimization problems and problems that exhibit optimal substructure, which means that the solution to the overall problem can be constructed from solutions to small subproblems. [ Breaking a large problem and breaking it down into smaller solveable pieces. You only solve each piece of a problem once and keep a record of it so the same work is not repeated. We gather all the solutions together to solve the entire problem.]

## Data Structures

"A data structure is a way to store an organize data in order to facilitate access and modifications. No single data structure works well for all purposes, and so it is important to know the strengths and limitations of several of them."

The purpose of the book is to teach us techniques of algorithm design and analysis.
The book's measure of efficiency is "speed".

## 1.1 Exercises

### 1.1-1

Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

A real-world example that I can think of that requires sorting is sports championships. Consider national sports competition where teams from various cities and states compete. Sorting plays a crucial role in determining the overall ranking of teams.

First, within each city, sorting helps identify the best team based on their performance in local matches. This ensures that a city's representative is indeed the strongest team from that area.

Next, at the state level, sorting is applied once again to determine the top team from each state. This ensures that the sate is sending its most competitive team to the national competition.

Finally, when all the city and state champions gather for the nation championship, sorting is once again employed to create a ranking of all participating teams. This ranking helps identify the strongest team in the entire nation, considering their performance at the city, state, and national levels.

### 1.1-2

Other than speed, what other measures of efficiency might one use in a real-world setting?

I believe that other than speed a software engineer must consider optimizing the utilization of resources such as memory, energy and network bandwith.

### 1.1-3

Select a data structure that you have seen previously, and discuss its strengths and limitations.

One data structure that I'm familiar with is an array.

### 1.1-4

How are the "shortest-path" and "traveling-salesman" problems given above similar? How are they different?

### 1.1-5

Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution that is "approximately" the best is good enough.

---

## 1.2 Algorithms as a technology

We should always consider to implement a solution to be within the bounds of good engineering practice.
"An implementation should be well designed and documented."

Algorithms that are efficient in terms of time or space will help use resources like computing time and space in memory more wisely. They are fundamental tools in problem-solving, akin to tools and technologies used in other fields of engineering and science.

### Efficiency

Insertion sort and merge sort are sorting algorithms, used to organize data. However, their efficiency can vary significantly from one another. This efficiency gap can be much more pronounced than the performance differences influenced by the specific hardware or software in use.

### Insertion Sort
