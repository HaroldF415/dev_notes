/*

Write a program that shifts one alphabet character. 
For example, you have a string "abc" the result should be 
"bcd". (a → b, b → c, c → d) and if the new string contains any vowels, 
you will have to uppercase all the vowels. For example, "zabc" → "abcd". (z → a, a → b, b → c, c → d. 
  The result string contains "a" vowel → "Abcd"

 * 
 *
 * @param {String}
 * @returns {string} "zabc" => "Abcd"

*/

const asciiValueOfZ = 122;

const shiftOneCharCapitalizedVowels = (str) => {
  if (!str) {
    return "Enter proper input";
  }

  // sanitized the data
  const sanitized = str.toLowerCase();
  const newArr = [];

  for (let i = 0; i < sanitized.length; i++) {
    let convert2Num = sanitized.charCodeAt(i) + 1;

    if (convert2Num > asciiValueOfZ) {
      convert2Num = 97;
    }

    let convert2Letter = String.fromCharCode(convert2Num);

    if (testForVowels(convert2Letter)) {
      convert2Letter = convert2Letter.toUpperCase();
    }

    newArr.push(convert2Letter);
  }

  return newArr.join("");
};

const testForVowels = (input) => {
  return /[aeiou]/.test(input);
};

console.log(shiftOneCharCapitalizedVowels("abc"));
console.log(shiftOneCharCapitalizedVowels("defgh"));
console.log(shiftOneCharCapitalizedVowels("xyz"));
console.log(shiftOneCharCapitalizedVowels("")); // ERROR
console.log(shiftOneCharCapitalizedVowels("abcde")); // bcdEf
console.log(shiftOneCharCapitalizedVowels("aeiou")); // bfjpv
console.log(shiftOneCharCapitalizedVowels("zdhnt")); // AEIOU
console.log(shiftOneCharCapitalizedVowels("xyz")); // yzA
