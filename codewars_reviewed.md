# [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

### Problem

In this kata, you must create a digital root function. A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

## Programming Concepts To Review Before Attempting This Problem

- Data Types

  - Integers and how to manipulate them

- Control Structures

  - ForLoops and WhileLoops

- String Manipulation

  - How to convert a string to an integer and vice versa

- Recursion

  - Use recursion to continue reducing the sum of the digits until a single digit is produced

- Functions
  - Defining a function to encapsulate the logic of adding the digits and reducing them to a single digit

## Breakdown

## Step 1: Name the function.

In codewars this is done for you already but I like to remind myself that when creating functions, I need to give them descriptive names.

- Let's define the function name for this problem. We'll call it digitalRoot.
  - This function will take in one parameter, `n`, which will be an integer as a parameter.

```js
const digitalRoot = (n) => {
  // Your code here
};
```

## Step 2: Define the function.

- Then we will check if `n` has only one digit by comparing it against `10` in an if statement.
  - If `n` is less than `10`, then we will return `n` because it is already a single digit.
  - If `n` is greater than or equal to `10`, then we will continue to reduce the sum of the digits until we get a single digit.

```js
const digitalRoot = (n) => {
  if (n < 10) {
    return n;
  }
};
```

### Why do we check if `n` is less than `10`?

Checking against `10` is not only a good way to find out that `n` is a single digit but because the digital root of any single-digit number is itself. Think of this as a `guard clause` to prevent the function from continuing to run if `n` is a single digit.

## Step 3: Reduce the sum of the digits until we get a single digit.

- Let's define a variable called sumOfDigits and initialize it to `0`.
  - We will use this variable to store the sum of the digits of `n`.

```js
const digitalRoot = (n) => {
  if (n < 10) {
    return n;
  } else {
    let sumOfDigits = 0;
  }
};
```

### Why do we use `let` instead of `const`?

We use `let` because we will be reassigning the value of `sumOfDigits` as we continue to reduce the sum of the digits until we get a single digit.

- At this point we can take the parameter `n` and convert it into a string while also storing it in another variable called `strN`.
  - We will use this variable to iterate over the digits of `n` and add them to `sumOfDigits`.

```js
const digitalRoot = (n) => {
  if (n < 10) {
    return n;
  } else {
    let sumOfDigits = 0;
    let strN = n.toString();
  }
};
```

Once we have hit this point in our function we can use either a `for` loop or a `while` loop to iterate over the digits of `n` and add them to `sumOfDigits`. We will use a `for` loop in this example.

- Inside the forLoop though we need to iterate through each character of `strN` and add it to `sumOfDigits`.
  - We can do this by using the `parseInt()` function to convert each character of `strN` into an integer and then add it to `sumOfDigits`.

```js
const digitalRoot = (n) => {
  if (n < 10) {
    return n;
  } else {
    let sumOfDigits = 0;
    let strN = n.toString();

    for (let i = 0; i < strN.length; i++) {
      sumOfDigits += parseInt(strN[i]);
    }
  }
};
```

We had reached the end of our logic. At this point we have reduced the sum of the digits of `n` until we get a single digit. We can now return `sumOfDigits` as a recursive call to our function.

```js
const digitalRoot = (n) => {
  if (n < 10) {
    return n;
  } else {
    let sumOfDigits = 0;
    let strN = n.toString();

    for (let i = 0; i < strN.length; i++) {
      sumOfDigits += parseInt(strN[i]);
    }

    return digitalRoot(sumOfDigits);
  }
};
```

| Requirement                            | Explanation                                                                                                                                                                                                                                          | Programming Concepts                                                      |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Calculate the digital root of a number | The digital root of a number is the recursive sum of all the digits in a number. Given a natural number `n`, take the sum of the digits of `n`. If that value has two digits, continue reducing in this way until a single-digit number is produced. | Data Types, Control Structures, String Manipulation, Recursion, Functions |
| Handle special cases                   | If `n` has only one digit, return `n` as its digital root.                                                                                                                                                                                           | Guard Clause                                                              |
| Extract the digits of `n`              | We can do this by converting `n` into a string and then iterating over each character of the string with a forLoop and converting each character back to `int` with the `parseInt()` method.                                                         | String Manipulation                                                       |
| Call the digital root function         | If the `sum` of the digits have more than one digit, then we can call on the digital root function recursively with the sum as the new input.                                                                                                        | Recursion                                                                 |

<br>
<br>

# [RBG to Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001)

### Problem

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

```js
rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
```

## Programming Concepts To Review Before Attempting This Problem

- Variables and Data Types: Have a solid understanding of how to declare and use variables to store data, and knowing the different data types available in JavaScript.

- Arithmetic Operators: These come as no surprise. Operators like `+`, `-`, `*`, `/`, `%`, `++`, and `--` are used to perform arithmetic operations on numbers.

- Conditional Statements: These are used to perform different actions based on different conditions. You can use `if`, `else if`, and `else` statements to perform different actions based on different conditions.

- String Manipulation: You can use the `toString()` method to convert a number into a string. You can also use the `toUpperCase()` method to convert a string into all uppercase letters.

- Functions: You can use functions to group together a set of statements to perform a task or calculate a value. You can also use functions to reuse code: Define the code once, and use it many times.

- Error Handling: You can use `try` and `catch` statements to handle errors. You can use `throw` statements to create custom errors.

## Research

### What is RGB?

`RGB` stands for `Red`, `Green`, and `Blue`. `RGB` is a color model that is used to create colors on a computer screen. Each color is represented by a number between 0 and 255. The higher the number, the brighter the color.The `RGB` color model is an additive color model in which `red`, `green`, and `blue` light are added together in various ways to reproduce a broad array of colors.

### What is Hexadecimal?

Hexadecimal is a base-16 number system that uses 16 unique symbols. The symbols `0-9` are used to represent values `0-9` and the letters `A-F` are used to represent values `10-15`. Hexadecimal is often used to represent colors on the web. Each color is represented by a 6-digit hexadecimal number. The first two digits represent the amount of red, the second two digits represent the amount of green, and the last two digits represent the amount of blue.

### How to turn RGB into Hexadecimal?

To turn RGB into Hexadecimal, we need to convert each number into a hexadecimal number. We can do this by using the `toString()` method to convert each number into a string and then using the `toUpperCase()` method to convert the string into all uppercase letters.

```js
function rgb(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function toHex(num) {
  return Math.max(0, Math.min(255, num)).toString(16).padStart(2, "0");
}
```

```js
function rgb(r, g, b) {
  let hexi = "";

  const rgbArr = [r, g, b];

  const newRGB = rgbArr.map((value) => {
    if (value < 0) {
      value = 0;
    }

    if (value > 255) {
      value = 255;
    }

    return value;
  });

  if (newRGB.every((value) => value === 0)) {
    return `000000`;
  } else {
    const newMap = newRGB.map((value) => {
      value = value.toString(16).toUpperCase();
      if (value.length === 1) {
        value = `0${value}`;
      }
      return value;
    });

    return newMap.join("");
  }
}
```

### Resources

[How To Convert RGB to Hexadecimal](https://appkong.com/tools/hex-to-rgb/)

<br>
<br>

# ParseInt Reloaded

### Problem

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

```js
"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
```

## Programming Concepts To Review Before Attempting This Problem

- String Manipulation: We can assume that the input is a string. A string that represents a number in words, for this we must be able to familiar with string manipulation.

- Control Structures: Control structures like loops and conditional statements are essential when we are dealing with problems like these. We can use certain types of loops to iterate over an array that can work with our logic and help us solve the problem.

- Object and Array: We also need to use objects and arrays to find a way to store the values of the string and use them to sort of map them to numbers needed.

- Functions: We can use functions to group together a set of statements to perform a task or calculate a value. You can also use functions to reuse code: Define the code once, and use it many times.

- Error Handling:

- Math Operations:

- Regular Expressions:

## Breaking down the problem

Split the string into an array of words

```js
const words = str.split(" ");
```

Create an object that maps the words to numbers

```js
const wordObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};
```

Create an array that will represent the numerical value of the different units of the number.

```js
const numbers = [1, 10, 100, 1000, 10000, 100000, 1000000];
```

Loop through the array of words and convert each word to its corresponding numerical value.

```js
const newWords = words.map((word) => {
  return wordObject[word];
});
```

Keep track of the current unit being used to convert the word to a number.

```js
let currentUnit = 0;
```

Loop through the array of numbers and multiply each number by the current unit.

```js
const newNumbers = newWords.map((number) => {
  if (number === 1000 || number === 1000000) {
    currentUnit++;
  }
  return number * numbers[currentUnit];
});
```

<br>
<br>

# Longest Consecutive Repetition

[Kata Link - 6kyu](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

### Problem

For a given string s find the character c (or C) with longest consecutive repetition and return:
[ c, L]

where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]

In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

## Let's write some Pseudocode

```js
const longestConsecutiveRepetition(string){

  // if the input string is empty, return ["", 0]

  // initialize two variables
    // one to keep track of the longest consecutive character
      // set it to the first character of the string

    // one to keep track of the longest consecutive character's count
     // set it to 1

  // initialize two more variables
    // one to keep track of the current consecutive character
      // set it to the first character of the string

    // one to keep track of the current consecutive character's count
     // set it to 1

  // iterate through the string, start from the second element

    // write an if condition to check if the current character is the same as the current consecutive character
      // if it is, increment the current consecutive character's count by 1

      // if it is not, check if the current consecutive character's count is greater than the longest consecutive character's count
        // if it is, update the longest consecutive character and its count

      // reset the current consecutive character to the current character
      // reset the current consecutive character's count to 1

  // check to see if the last consecutive character's count is greater than the longest consecutive character's count
    // if it is, update the longest consecutive character and its count
      // set the longest consecutive character to the current consecutive character
      // set the longest consecutive character's count to the current consecutive character's count

  // return the longest consecutive character and its count
}
```

## Step 1: Understanding the problem

We need to look into a string and find the character that repeats the most times. After finding said character, I must return an array that contains that character and the number of times it repeats itself. At index[0] and index[1] respectively.

## Step 2: Plan of attack

In order to solve this problem, I must:

- Iterate through the string
- Keep track of the current character and the current character's count
- Keep track of the longest consecutive character and the longest consecutive character's count
- Compare the current character's count to the longest consecutive character's count
- If the current character's count is greater than the longest consecutive character's count, update the longest consecutive character and its count
- Return the longest consecutive character and its count

<br>
<br>

# Permutation Position

[Kata Link 6kyu](https://www.codewars.com/kata/57630df805fea67b290009a3/train/javascript)

## Resources for this problem

[Permutations of The Given String](https://www.interviewbit.com/blog/permutations-of-the-given-string/)

### Problem

In this Kata you will have to permutate through a string of lowercase letters, each permutation will start at `a` and you must calculate how many iterations it takes to reach the current permutation.

## Examples

```bash
input: 'a'
result: 1

input: 'c'
result: 3

input: 'z'
result: 26

input: 'foo'
result: 3759

input: 'aba'
result: 27

input: 'abb'
result: 28
```

## What is a permutation?

A permutation is an ordered arrangement of objects. For example, `3124` is one possible permutation of the digits `1`, `2`, `3` and `4`. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of `0`, `1` and `2` are:

```js
const permArr = [012, 021, 102, 120, 201, 210];
```

## Backtracking Approach

A `backtracking` approach is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons each partial candidate (`backtracks`) as soon as it determines that the candidate cannot possibly be completed to a valid solution.

## What are `constraint satisfaction problems`?

A `constraint satisfaction problem` (CSP) is a problem in which a set of objects must be assigned to satisfy a number of constraints or limitations. CSPs are important in artificial intelligence and operations research.

## What are `incrementally builds candidates`?

An `incremental` algorithm is an algorithm that builds a solution incrementally, in stages, rather than all at once. An incremental algorithm is often used when the solution is too large to be built all at once.

## What are `partial candidates`?

A `partial candidate` is a candidate that is not yet complete. It is a candidate that is not yet a solution.

## What are `factorials and permutations`?

A `factorial` is the product of all positive integers less than or equal to n. For example, `5! = 5 * 4 * 3 * 2 * 1 = 120`.

A `permutation` is an arrangement of objects in a particular order. For example, `3124` is one possible permutation of the digits `1`, `2`, `3` and `4`.

## Let's write some Pseudocode

```js
const permutationPosition(string){

  // initialize a variable to keep track of the index of the current permutation
  // initialize another variable that will keep track of the multiplier

  // iterate through the `string` starting from the last character


};

```
