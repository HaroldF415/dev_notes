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
