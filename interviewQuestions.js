/**
 * Problem:
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Two Sum
 *
 * Problem Statement: Given an array of integers `nums` and an integer `target`
 * return the `indices` of the two numbers such that they add up to the given `target`
 *
 * Constraints and Output Requirements:
 * - Each input has exactly one solution.
 * - Elements cannot be used more than once in a solution.
 * - The answer can be returned in any order.
 * - (Note: If there are multiple pairs meeting the criteria, return the indices of the first pair found from the left.)
 *
 * Goal: Our job is to write an algorithm which returns the indices of two elements in an array
 * such that, when we add these two elements it should be equal to the sum of the `target`
 *
 * Questions to ask before attempting to code:
 * - Are there any specific constraints or edge cases I should be aware of?
 * - Can the input contain duplicates, and if so, how should they be handled?
 * - Can I assume that the input will always be valid?
 * - Are there any constraints on time or space complexity?
 * - Can you provide an example input and the corresponding expected output?
 * - How should the function behave with an empty input?
 *
 * What is the INPUT?
 * Input: An array of integers (`nums`) and a target integer (`target`)
 *
 * What is the OUTPUT?
 * Output: An array containing the indices of two numbers in the input array (`nums`) whose sum is equal to the target
 *
 * Why does the INPUT lead to the OUTPUT?
 * - The algorithm iterates through the elements in the input array, calculating the complement of each element with respect to the target
 * - If the complement exists in the storage object, it means a pair with the current element has been found, and the indices are returned
 * - If not, the current element's index is stored in the object
 * - This process continues until a pair is found or the iteration completes without finding a pair
 *
 * More examples:
 * Example 1:
 * - Input: nums = [2, 7, 11, 15], target = 9
 * - Ouput: [0, 1]
 *
 * Example 2:
 * - Input: nums = [ 3, 2, 4], target = 4
 * - Ouput: [1, 2]
 *
 * Put into your own words:
 * The algorithm efficiently indentifies a pair of indices in the input array where the corresponding elements add up to the target.
 * It achieves this by using an object to store encountered elements and their indices during iteration, ensuring the correct pair is identified.
 * The output is the array containing the indices of the identified pair.
 *
 * Pseudocode:
 * - Initialize an empty object to store elements and their indices
 * - Iterate through each element in the `nums` array
 *  - Assign the current element value to a variable for readability
 *  - Calculate the complement by subtracking the current value from `target`
 *  - Check if the complement exists in the object (not equal to `undefined`)
 *    - If `true`, return an array with the indices of the two elements
 *  - Check if the current element is not yet stored in the object
 *    - If `true`, store the index of the current element in the object
 * - If no pair is found during the iteration, return null
 *
 * Space and Time Complexity:
 *
 * Space Complexity: O(n)
 * The primary space usage comes from the `numIndices` object, which stores the elements and their indices.
 * In the worst case, all elements in the array are unique, and the object will store n key-value pairs.
 *
 * Justification:
 * The `numIndices` object stores at most n key-value pairs, where `n` is the length of the input array.
 * The space complexity is linear, O(n), because the space required scales with the size of the input.
 *
 *
 * Time Complexity: 0(n)
 * The algorithm iterates through the input array once, performing constant-time operations within the loop.
 * The key operation is checking and updating the `numIndices` object.
 * Each operation inside the loop takes constant time, making the overall time complexity linear with respect to the size of the input array.
 *
 * Justification:
 * The loop iterates through each element in the array exactly once.
 * Inside the loop, constant-time operations are performed
 * The dominant factor contributing to time complexity is the loop, making the overall time complexity linear, O(n), where `n` is the size of the input array.
 *
 */

function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    let complement = target - current;

    // check if the `complement` value has been encountered before in the object
    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i];
    }

    // check if the current value is not yet stored in the object
    if (numIndices[current] === undefined) {
      numIndices[current] = i;
    }
  }
  return null;
}

/**
 * Problem: Find Target Indices After Sorting Array
 *
 * Problem Statement: We are given a 0-indexed integer array `nums` and a target integer `target`.
 * A `target` index is index `i` such that `nums[i]` === `target`
 * Return a list of the target indices of `nums` after sorting the array in non-decreasing order.
 * If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
 *
 * Constraints and Ouput Requirements:
 * - The input array `nums` may contain duplicates.
 * - The output list must be sorted in increasing order
 * - If there are no target indices, return an empty list
 *
 * Goal: Develop and algorithm that efficiently returns the sorted list of target indices in the input array.
 *
 * Questions to ask before attempting to code:
 * - Can the input array be empty?
 * - Are negative integers allowed in the array?
 * - Do we need to consider the case where the target appears multiple times in the array?
 * - Should I preserve the order of elementsd in the original array, or is it acceptable to modify the array?
 *   This information will help guide my approach in terms of creating a sorted copy or directly sorting the original array.
 *
 * What is the INPUT?
 * - An array of integers (`nums`) and a target integer (`target`)
 *
 * What is the OUTPUT?
 * - A list of target indices in the sorted array.
 *
 * Why does the INPUT lead to the OUTPUT?
 * - The algorithm sorts the input array and identifies the indices where elements equal the target.
 * - The resulting list is sorted in increasing order.
 *
 * More Examples:
 *
 * Example 1:
 * Input: [1, 2, 3, 4, 5], target = 6
 * Output: []
 *
 * Example 2:
 * Input: [5, 2, 3, 5, 8, 5], target = 5
 * Output: [0, 3, 5]
 *
 * Put into your own words:
 * - Given an array of integers and a targete value, find the indices of the target value in the sorted array.
 *
 * Pseudocode:
 * - Sort the `nums` array in non-decreasing order.
 * - Initialize an empty list to store target indices.
 * - Iterate through the sorted array.
 *  - If the current element equals the target, add its index to the list.
 * - Return the sorted list of target indices.
 *
 * Space and Time Complexity:
 *
 * Space Complexity: O(n)
 *
 * Justification:
 * The primary contributors to space complexity are the additional array `numIndices`,
 * which can grown in proportion to the size of the input array `nums` created using `nums.slice()`
 * Although `slice()` creates a shallow copy it still requires additional proportional to the size of the `nums`.
 * Therefore, the overall space complexity is linear, 0(n).
 *
 * Time Complexity: O(n log n)
 *
 * Justification:
 * The dominating factor contributing to the time complexity is the sorting operation performed using `sort()`.
 * Sorting has a time complexity of 0(n log n), where `n` is the length of `nums`.
 * The subsequent iteration through the sorted array has a linear time complexity, but it is overshadowed
 * by the sorting operation. Therefore, the overall time complexity is O(n log n).
 *
 */

function targetIndices(nums, target) {
  const numIndices = [];

  // creating a shallow copy of the `nums` array cannot be mutated
  const sortedNums = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) {
      numIndices.push(i);
    }
  }

  return numIndices;
}

/**
 * Problem: Valid Parenthesis
 *
 * Problem Statement: Given a string `s` containing just the characters `(`, `{`, `[`, `]`, `}`, `)`, determine if the input string is valid.
 *
 * Constraints and Ouput Requirements:
 * The input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 *
 * Goal: To validate the input string according to the parameters given
 *
 * Questions to ask before attempting to code:
 * - Are there any constraints on the length of the input string?
 * - Is the order of opening and closing brackets important, do they need to be nested correctly?
 * - How should the function handle an empty string as INPUT?
 *
 * What is the INPUT?
 * - The INPUT is a string containing just the characters: `{([])}`
 *
 * What is the OUTPUT?
 * - The OUTPUT is achieved by validating the string if it has an opening character and a matching closing character.
 *
 * Why does the INPUT lead to the OUTPUT?
 * The INPUT leads to the OUTPUT in the problem of validating parentheses because of the specific rules governing the arragement and pairing
 * of parentheses in a valid expression. The validation process involves checking whether the input adheres to these rules.
 *
 * More Examples:
 *
 * Example 1:
 * INPUT: "({[)]}";
 * OUTPUT: false
 *
 * Example 2:
 * INPUT: "()[]{}";
 * OUTPUT: true
 *
 * Put into your own words:
 * We are making sure that every opening parenthesis has a matching closing parenthesis in the correct order in a given string.
 *
 * Pseudocode:
 * - Initialize an empty stack to keep trac
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function validParenthesis(string) {
  
  const 
}

/**
 * Problem: First Element Occurring `k` Times in an Array
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function elementOccurrence(nums, target) {}

/**
 * Problem: Partition Even & Odd Values in an Array ( while preserving order )
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function evenOddValuesOrdered(nums) {}

/**
 * Problem: Partition Even & Odd Values in an Array ( without preserving order )
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function evenOddValuesUnordered(nums) {}

/**
 * Problem: Sort Array of 3 Values
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function threeValueSort(nums) {}

/**
 * Problem: Rotate Array
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

function rotatedList() {}

/**
 * Problem: Longest Substring Without Repeating Characters
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Longest Common Prefix
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Letter Combinations of a Phone Number
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Find First and Last Position of an Element in a Sorted Array
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Return Values of a Matrix in Spiral Order
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Validate Binary Search Tree
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Sort an Array Without a Built in Method ( Bubble Sort )
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Reverse an Integer
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Reverse a Linked List
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Rotate an Array `k` indices
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Check if a `string` is a palindrome
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Most Frequent Character
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Find The Maximum Subarray in an Array
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Longest Substring in a `string` without repeat
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Find the First Element Occuring `k` times in an Array.
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Find Common Elements in Two Arrays
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Merge Two Arrays in `ascending` order
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Flatten a Matrix
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Rotate a Matrix
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Unspiral a Matrix
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: First to Occur `k` Times
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Three Sum on a `sorted` Array ( 2 pointer )
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Reverse a Linked List
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Common Elements of Two Arrays
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */

/**
 * Problem: Integer to Roman Numeral
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * Example 2:
 *
 * Put into your own words:
 *
 * Pseudocode:
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * Justification:
 *
 * Time Complexity:
 *
 * Justification:
 *
 */
