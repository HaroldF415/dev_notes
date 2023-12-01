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
 * - How should the function behave if there are more than two pairs whose sum === target?
 * - If you have multiple maximums how should we proceed?
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

// with a sorted array
function twoSum2(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSum2([1, 2, 3, 4, 5], 5)); // [0,3]

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

function validParenthesis(string) {}

/**
 * Problem: First Element Occurring `k` Times in an Array
 *
 * Problem Statement: Given an array of `n` integers. The task is to find the first element that occurs `k` number
 * of times. If no element occurs `k` times the print is `-1`. The distribution of integer elements could be in any range.
 *
 * Constraints and Ouput Requirements:
 * - The array can contain both positive and negative integers.
 * - The array can be of size up to 10^5.
 * - The integers within the array can have a range from -10^9 to 10^9
 * - The value of `k` will be a positive integer less than or equal to the size of the array.
 * - The OUTPUT must be a single integer representing the first element that occurs `k` times
 *   or `-1` if no element occurs `k` times.
 *
 * Goal:
 * Find the first element that occurs `k` times in the given integer array or return `-1` if no such elements exists.
 *
 * Questions to ask before attempting to code:
 * N/A
 *
 * What is the INPUT?
 * - The input is an array of integers.
 * - A positive integer `k`.
 *
 * What is the OUTPUT?
 * - An integer representing the first element that occurs `k` times, or `-1` if no such element exists.
 *
 * Why does the INPUT lead to the OUTPUT?
 * - The algorithm aims to traverse the array, keeping track of the count and returning the first element
 *   that meets the `k` occurrence requirement or `-1` if none satisfy the condition.
 *
 * More Examples:
 *
 * Example 1:
 * - INPUT: [3, 1, 2, 2, 1, 2, 3], k = 2
 * - OUTPUT: 2
 *
 * Example 2:
 * - INPUT: [4, 5, 1, 2, 2, 3, 3], k = 3
 * - OUTPUT: -1
 *
 * Put into your own words:
 * - Given an integer array and a target count, return the first element that meets the requirement
 * - If no element that occurs `k` times is found then return `-1`.
 *
 * Pseudocode:
 * - Initialize a Map which will be used to store the element inside the array with its corresponding count
 * - Iterate through the array, updating the count for each element.
 * - Iterate through the array once more, returning the first element that meets the `k` requirement.
 * - If no element exists within the array, return `-1`
 *
 * Space and Time Complexity
 *
 * Space Complexity:
 * - O(n) where `n` is the size of the input array.
 * - This is due to the storage needed for the Map to track elements in the array.
 *
 * Time Complexity:
 * - O(n) where `n` is the size of the input array as well.
 * - The algorithm traverses the integer array once to keep track of the elements and its count,
 *   And once more to find the element that meets the `k` times requirement.
 *
 */

function firstElementOccurrence(nums, target) {
  // Create a map that will keep count of the indices
  const numIndices = new Map();

  // iterating through the array to keep track of the numbers and their occurrences
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (!numIndices.has(current)) {
      numIndices.set(current, { count: 1 });
    } else {
      const { count } = numIndices.get(current);
      numIndices.set(current, { count: count + 1 });
    }
  }

  // We loop through the array one more time to satisfy the FIRST occurring element `k` times.
  for (const num of nums) {
    if (numIndices.get(num).count === target) {
      return num;
    }
  }
  return -1;
}

// console.log("-----------------------------------------------------");
// console.log("First Element Ocurring `k` times");
// console.log(firstElementOccurrence([1, 3, 4, 3, 2, 4, 3, 4, 2, 1, 5, 2], 3)); // 3
// console.log(firstElementOccurrence([1, 7, 4, 3, 4, 8, 7], 2)); // 7

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

/**
 * Problem: Three Sum
 *
 * Problem Statement:
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 * - Can we assume that that the array is sorted?
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

function threeSum(nums, target) {}

/**
 * Problem: Common Elements of Two Arrays
 *
 * Problem Statement:
 * Given two arays, write a function that returns all elements that appear in both arrays.
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
 * INPUT:
 *
 * nums1: [ 1, 2, 2, 1];
 * nums2: [ 2, 2];
 *
 * OUTPUT: [2];
 *
 * Example 2:
 *
 * INPUT:
 *
 * nums1: [ 4, 9, 5 ];
 * nums2: [ 9, 4, 9, 8, 4 ];
 *
 * OUTPUT: [ 4, 9];
 *
 *
 * Put into your own words:
 * We are trying to find common elements between two arrays and return them to the user inside a list.
 *
 *
 * Pseudocode:
 *
 * - Initialize an empty `storageArray`
 *  - This array will store the common elements from both arrays.
 *
 * - Iterate through the first `array1`
 *  - For each element in `array1`
 *  - Create a conditional check:
 *    - Verify if the current element from `array1` exists in `array2`
 *    - Ensure the element is not already present in the `storageArray`
 *      - If both conditions are met, add the current element from `array1` into the `storageArray`
 * - Return `storageArray` to the user.
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

function commonElementsFromTwoArrays(nums1, nums2) {
  let commonElements = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !commonElements.includes(nums1[i])) {
      commonElements.push(nums1[i]);
    }
  }

  return commonElements;
}
console.log("-----------------------------------------------------");
console.log("Common Elements From Two Arrays");
console.log(commonElementsFromTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(commonElementsFromTwoArrays([1, 2, 2, 1], [2, 2])); // [2];
console.log("-----------------------------------------------------");

/**
 * Problem: Most Frequent Character
 *
 * Problem Statement:
 * Write a function that accepts a `string` as input and returns the character that appears the most frequently in that `string`.
 *
 * Constraints and Ouput Requirements:
 *
 * Goal:
 *
 * Questions to ask before attempting to code:
 *
 * What is the INPUT?
 * The input of this problem is a `string`.
 *
 * What is the OUTPUT?
 *
 * Why does the INPUT lead to the OUTPUT?
 *
 * More Examples:
 *
 * Example 1:
 *
 * INPUT: "Hello World!";
 * OUTPUT: "l";
 *
 * Example 2:
 *
 * INPUT: "abacaba";
 * OUTPUT: "a";
 *
 * Put into your own words:
 * Take a look at a `string` and return the most frequent character in that `string`.
 *
 * Pseudocode:
 *
 * - Creating an object that will store the characters as keys and their occurrences as values
 * - Create an empty `string` that will hold the value of the most frequent character in the `string`
 * - Create a variable that will hold the occurrences of that frequent character
 * - Iterate through the input `string`
 *  - Write a condition that will check if the current char in the `string` is not a space.
 *    - If this condition is met then add the current char lowercased to the object with it's proper occurrence.
 * - Iterate throught the object
 *  - Create a condition that will check if the value of frequenChar is less than the value of the current key in the object
 *    - If this is true then update the frequentCharValue to the value of the key
 *    - Update the frequentChar to key
 * - Return frequentChar
 *
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 * - O(k) where `k` is the number of unique characters in the string.
 *
 * Justification:
 *
 * - The charCount object stores unique characters encountered in the input `string`
 * - Worst case, if all characters in the input `string` are unique then the object `charCount` would have `k` entries.
 * -
 *
 *
 * Time Complexity:
 *
 * O(n+k) where `n` is the length of the INPUT `string` and `k` is the number of unique characters in the string.
 *
 * Justification:
 *
 */

function mostFrequentChar(string) {
  const charCount = {};
  let frequentChar = "";
  let maxOccurrence = 0;

  // Time complexity of O(n)
  // It iterates through the entire `string` of length `n`
  // The operations inside the forLoop are performed a constant number of times.

  // Space Complexity of O(1);
  // The variables are primitive types and occupy constant space regardless of the input size
  for (let i = 0; i < string.length; i++) {
    let current = string[i].toLowerCase();

    if (current != " ") {
      charCount[current] = (charCount[current] || 0) + 1;
    }
  }

  // Time complexity of O(k)
  // `k` is the number of unique chars in the `string`
  // It performs operations proportional to the number of unique characters

  // Space Complexity of O(k)
  // Worst scenario where each character in the string is unique then the space used will be
  // Proportional to the number of unique characters.
  for (const key in charCount) {
    if (charCount[key] > maxOccurrence) {
      maxOccurrence = charCount[key];
      frequentChar = key;
    }
  }

  return frequentChar;
}

// console.log(mostFrequentChar("Hello World!")); // returns 'l'
// console.log(mostFrequentChar("abacaba")); // returns 'a'
// console.log(mostFrequentChar("xyyXzz")); // returns 'x' (not y)
// console.log(mostFrequentChar("")); // returns ''
// console.log(mostFrequentChar("a b a b a")); // returns 'a' (not space)

/**
 * Problem: Grouped Anagrams
 *
 * Problem Statement: Given an array of strings `strs`, group the anagrams together. You can return
 * the answer in any order.
 *
 * An anagram is a word or phrase formed by reaarranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Constraints and Ouput Requirements:
 * 1 <= strs.length <= 10^2
 *
 * Goal: Return a list of grouped anagrams
 *
 * Questions to ask before attempting to code:
 *
 * - How should the function behave if the input is an empty array?
 * - Can you provide and example of an input and the desired output?
 * - Should I consider case sensitivity?
 * - Do you have any preferences for the format of the output, such as an array of arrays or an object?
 *
 * What is the INPUT?
 * The INPUT is an array of strings where each string represents a word.
 *
 * What is the OUTPUT?
 * The OUTPUT is a collection of groups where each group contains words that are anagrams of each other.
 * In other words a list of lists.
 *
 * Why does the INPUT lead to the OUTPUT?
 * The function transforms the input array of strings into an output collection of anagram groups.
 * It does so by sorting the characters of each word and grouping words with the same sorted characters together.
 *
 * More Examples:
 *
 * Example 1:
 * Input: ["bat", "tab", "cat", "act"]
 * Output: [["bat", "tab"], ["cat", "act"]]
 *
 * Example 2:
 * Input: ["listen", "silent", "enlist", "inlets"]
 * Output: [["listen", "silent", "inlets"], ["enlist"]]
 *
 * Put into your own words:
 *
 * The function organizes a list of words into groups wher words within each group share the same set
 * characters, even if arranged differently. It identifies anagrams and gathers them together.
 *
 * Pseudocode:
 *
 * Function groupedAnagrams - words
 *  Create an empty Map to store anagram groups
 *
 *  for each word in words
 *    sort the characters of the word
 *    If the sorted word exists as a key in the map:
 *      Append the word to the corresponding list
 *    else
 *      Create a new list with the word and store it
 *
 *  Return the values of the map as a list of lists
 *
 * Space and Time Complexity:
 *
 * Space Complexity:
 *
 * The space complexity if O(n*k), where n is the number of words in the input array and
 * `k` is the maximum length of a word. It's due to the storage needed for the Map.
 *
 * Justification:
 *
 * The function uses a Map to store anagram groups. In the worst-case scenario, it might store each word
 * as a key and its associated anagrams as values, leading to O(n*k) space complexity.
 *
 * Time Complexity:
 *
 * The time complexity is O(n*k log(k)) where `n` is the number of words, and `k` is the maximum length of a word.
 * Justification:
 *
 * In the `brute force` solution we can iterate through the list of words  and seach for an anagram using an object.
 * Where for each word we count the characters and compare it to the next word to see if they match.
 *
 * In the `optimal` solution we sort every string and compare it to the next by sorting the current string and the next.
 * If they match then we have an anagram.
 *
 * A `map` in JavaScript is a data structure that allows storing key-value pairs, where the keys can be
 * of any data type, including objects and functions.
 *
 * Unlike regular objects(`{}`), `Map` provides an ordered collection, preserves the insertion order of the keys,
 * and allows iteration over its elements.
 *
 * If offers convenient methods like `set()` to add new key-value pairs,
 * `set()` to add new key-value pairs
 * `get()` to retrieve values by their keys
 * `has()` to check for the existence of a key
 * `delete()` to remove specific key-value pair
 *
 * One of its significant advantages over plain objects is that a `Map` can have keys of any data type
 * making it more versitile in certain situations
 *
 */
function groupAnagrams(words) {
  // create an empty Map to sotre grouped anagrams
  let groupedAnagrams = new Map();

  // forEach word in words:
  for (let word of words) {
    // sort() the chars of the word
    let sortedWord = word.split("").sort().join("");

    // If the sorted word exits as a key in the map:
    if (groupedAnagrams.has(sortedWord)) {
      // Append the word to the corresponding list
      groupedAnagrams.get(sortedWord).push(word);
    } else {
      // Createa new list with the word and store it
      groupedAnagrams.set(sortedWord, [word]);
    }

    // Return the values of the map as a list of lists
  }
  return Array.from(groupedAnagrams.values());
}

// console.log(groupAnagrams(["rat", "bat", "cat", "tar", "art", "tab"]));

/**
 * Understanding the Problem:
 *  "So if I understand correctly, we're given an array of strings and our goal is to group together strings
 *  that are anagrams of each other, right?"
 *
 * Ask Clarifying Questions:
 * Me: "Should I consider case sensitivity?"
 * Interviewer: "That's a good question. What would you prefer? Would you consider treating the strings as
 * case-sensitive or maintain sensitivity? Let's discuss the implications of each."
 * Me: I would prefer to treat the strings as case-insensitive as it would allow me to efficiently solve this problem
 * without a higher level of difficulty.
 *
 * Me: Should the order of anagram groups in the final result be preserved, or is any order acceptable?
 * Interviewer: Why are you asking that?
 * Me: Understanding the significance of the output of the problem is crucial for ensuring that the solution meets
 * the desired expectations.
 *
 * HashMaps vs. Objects [Arrays are objects]
 * - If we try to find an element in an array [which is an object] we would potentially have to iterate through the whole array to find it.
 * - If elements are stored in a hashMap we can instantly know if the element is present or not.
 * - Object store property-value pairs
 * - Properties in objects can only store `string` or `symbol`
 * - Developers cannot store references to objects as properties
 *
 * Pseudocode:
 *
 * - Create an empty Map that will store the matching anagrams together
 * - Iterate through the `strs`
 *  - Curate the current string element for comparison purposes
 *  - Create a variable that will convert the string into an array, sort the elements in that array and convert it back to a string.
 * - Check if the Map has() the curatedWord
 *  - If it does, then push the currentWord unto the map
 *  - If it does not, then set the currentWord into the map.
 * - Return a list of lists from the Map.
 *
 * - Initialize an empty Map to group matching anagrams.
 * - Iterate through the `strings` array
 *  - Curate the current `string` for comparison
 *    - Create a variable to convert the `string` into an array, sort its elements, and reassemble it back as a string
 *  - Check if the Map contains the curated word:
 *    - If present, append the current word to the corresponding anagram group in the Map
 *    - If absent, set the current word as a new key in the Map with it's anagram group
 * - Return a list of lists from the Map to display the grouped anagrams
 *
 */

function groupedAnagrams2(strings) {
  // Space Complexity: O(m)
  // `m` is the number of unique sorted words
  const anagramGroups = new Map();

  // Time Complexity: O(n)
  // We are iterating through each string in the INPUT `array`
  // 'n' is the number of strings in the array
  for (let i = 0; i < strings.length; i++) {
    let currentWord = strings[i];

    // OVERALL Time Complexity of curating the word: O(k * log(k))
    // 'k' is the length of the longest `string`

    // .split() Time Complexity: O(k)
    // 'k' is the length of the string

    // .sort() Time Complexity: O(k * log(k))
    // `k` is the number of characters in the string

    // .join() Time Complexity: O(k)
    // `k` is the length of the characters in the string
    let sortedWord = currentWord.split("").sort().join();

    if (anagramGroups.has(sortedWord)) {
      anagramGroups.get(sortedWord).push(currentWord);
    } else {
      anagramGroups.set(sortedWord, [currentWord]);
    }
  }

  return Array.from(anagramGroups.values());
}

// Overall Time Complexity is O(n * k * log(k))
// `n` is the number of `strings` in the strings array
// `k` is the maximum length of a string

// Overall Space Complexity if: O(m + n)
// `m` is the number of unique anagram groups
// `n` is the number of strings inside the input array

// console.log(groupedAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(groupedAnagrams2([""])); // [[""]]
// console.log(groupedAnagrams2(["a"])); // [["a"]]

/**
 * - Create an empty Map that will hold the grouped Anagrams
 * - Iterate through the `string` array
 *  - create variable for the currentWord
 *  - create a variable that would curate the currentWord
 *  - Check to see if the curated word is inside the Map
 *    - get the curatedWord and push the currentWord
 *  - If curatedWord is not present
 *    - set() the curatedWord as key and currentWord as value
 * - Return a list of lists from the Map
 *
 */

function groupedAnagrams3(strings) {
  const anagramGroups = new Map();

  // Time Complexity: O(n)
  // `n` is the number of strings inside the array
  for (let i = 0; i < strings.length; i++) {
    let currentWord = strings[i];

    // .split() : O(k)
    // `k` is the number of chars in the string

    // .sort() : O(k* log(k))
    // `k` is the number chars in the string

    // .join() : O(k)
    // `k` is the number of chars in the string
    let curatedWord = currentWord.split("").sort().join();

    if (anagramGroups.has(curatedWord)) {
      anagramGroups.get(curatedWord).push(currentWord);
    } else {
      anagramGroups.set(curatedWord, [currentWord]);
    }
  }

  return Array.from(anagramGroups.values());
}

// Overall Time Complexity: O(n * k * log(k))
// Overall Space Complexity: O(m + n);

/**
 * Problem:
 *
 * Problem Statement:
 * Given an array of `n` integers, construct a product array of size `n`
 * where each index `i` holds the product of the elements `0 - 1`
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
 * Problem: Product of Array Except Self
 *
 * Problem Statement:
 * Given an array of `n` integers, construct a product array of size `n`
 * Where each index `i` hold the product of the elements `0 - i`
 *
 * Me:
 * If I understand this correctly we're given an array of integers
 * And my goal is to return an array where each element at `i`
 * Contains the product of all elements in the original array
 * except for the element at that particular `index`
 *
 *
 * Clarifying Questions:
 *
 * Are there any constraints for this particular problem?
 * How should the function behave if an empty array is given as an input?
 *
 * Brute Force:
 *
 * I think I can achieve this by using nested loops.
 * Where I would iterate through the original array
 * Create a helper variable that will be set to 1.
 * create another array that will loop through the original array and get the product of all indexes
 * except the current outer index.
 * But this would use a time complexity of 0(n^2)
 * I believe another approach to this could be
 *
 *
 *
 * Pseudocode:
 *
 * - Create a variable that will hold the length of the input array
 * - Initialize an array of the same size as the original array
 * - Set the value of productArray[0] to 1
 * - Iterate through the input array and start at index 1
 * -
 *
 *
 *
 *
 *
 */

// X[0] to X[i-1]
// X[i + 1] to X[n - 1]

// function generateProductArrayExceptItself(nums) {
//   const length = nums.length;
//   const productArray = new Array(length);

//   productArray[0] = 1;

//   for (let i = 1; i < length; i++) {
//     productArray[i] = nums[i - 1] * productArray[i - 1];
//   }

//   // let right = 1;

//   // for (let i = length - 1; i >= 0; i--) {
//   //   productArray[i] = productArray[i] * right;
//   //   right = right * nums[i];
//   // }

//   // for (let i = 0; i < nums.length; i++) {
//   //   let productHelper = 1;
//   //   for (let j = 0; j < nums.length; j++) {
//   //     if (j !== i) {
//   //       productHelper *= nums[j];
//   //     }
//   //   }
//   //   productArray[i] = productHelper;
//   // }

//   return productArray;
// }

// function generateProductArrayExceptItself(nums) {
//   const length = nums.length;
//   const productArray = new Array(length);

//   productArray[0] = 1;

//   for (let i = 1; i < length; i++) {
//     productArray[i] = nums[i - 1] * productArray[i - 1];
//   }

//   let right = 1;

//   for (let i = length - 1; i >= 0; i--) {
//     productArray[i] *= right;
//     right *= nums[i];
//   }

//   return productArray;
// }

//console.log(generateProductArrayExceptItself([2, 1, 3, 4]));
// [1, 2, 2, 6]
// [12,12,4,1]
// [12, 24, 8, 6]

function productExceptItself(nums) {
  const length = nums.length;
  const productArray = new Array(length);

  // for (let i = 0; i < length; i++) {
  //   let helper = 1;

  //   for (let j = 0; j < length; j++) {
  //     if (j !== i) {
  //       helper *= nums[j];
  //     }
  //   }
  //   productArray[i] = helper;
  // }

  productArray[0] = 1;

  for (let i = 1; i < length; i++) {
    productArray[i] = nums[i - 1] * productArray[i - 1];
  }

  let right = 1;

  for (let i = length - 1; i >= 0; i--) {
    productArray[i] *= right;
    right *= nums[i];
  }

  return productArray;
}

console.log(productExceptItself([2, 1, 3, 4]));

/**
 * Given a list of menu items and their ratings, return the highest rated menu item(s)
 * Along with and object if there was an input array - even if the rating was high, but if the item is
 * in the array, do not print
 *
 * Clarifying Questions:
 * If I understand this correctly I'm give an object that contains menus and their ratings
 * I should out the most highest rated menu item correct.
 * And if an array is given with exceptions
 * Even is the menu has a high rating dont print it out?
 *
 *
 */

function highestRatedMenu(menu, excludedItems) {
  let maxRating = 0;
  const highlyRated = [];

  for (const item in menu) {
    if (!excludedItems.includes(item) && menu[item] > maxRating) {
      maxRating = menu[item];
    }
  }

  for (const item in menu) {
    if (!excludedItems.includes(item) && menu[item] === maxRating) {
      highlyRated.push(item);
    }
  }

  return highlyRated;
}

const input1 = { pizza: 2, sushi: 4, coffee: 3 };
const input2 = { pizza: 2, sushi: 4, coffee: 3, burrito: 4 };
const excludeItems = ["pizza", "coffee"];

console.log(highestRatedMenu(input1, excludeItems));
console.log(highestRatedMenu(input2, excludeItems));

function groupedAnagrams(strings) {
  // Space Complexity:
  // O(m)
  // `m` is the amount of unique grouped anagrams
  const anagramGroups = new Map();

  // Time complexity of: 0(n)
  // `n` is the length of the array
  for (let i = 0; i < strings.length; i++) {
    let current = strings[i].toLowerCase();

    // .split():
    // O(k)
    // `k` is the length of the word.

    // .sort():
    // O(k * log(k))
    // `k` is the length of the word.

    // .join()
    // O(k)
    // `k` is the length of the word
    let curatedWord = current.split("").sort().join();

    if (anagramGroups.has(curatedWord)) {
      anagramGroups.get(curatedWord).push(current);
    } else {
      anagramGroups.set(curatedWord, [current]);
    }
  }

  return Array.from(anagramGroups.values());
}

// Overall Time Complexity:
// O(n * k * log(k))

// Overall Space Complexity:
// O(m + n)
// `m` is the number of unique grouped anagrams
// `n` is the number of strings withing that group

console.log(groupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupedAnagrams([""])); // [[""]]
console.log(groupedAnagrams(["a"])); // [["a"]]
