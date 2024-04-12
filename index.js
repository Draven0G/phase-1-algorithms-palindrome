function isPalindrome(word) {
  // Write your algorithm here
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Set pointers for the start and end of the word
  let start = 0;
  let end = cleanWord.length - 1;

  // Iterate over the word while start pointer is less than end pointer
  while (start < end) {
    // If characters at start and end pointers don't match, return false
    if (cleanWord[start] !== cleanWord[end]) {
      return false;
    }
    // Move pointers closer to the middle of the word
    start++;
    end--;
  }

  // If loop completes without returning false, the word is a palindrome
  return true;
}



/* 
  Add your pseudocode here
  - Remove non-alphanumeric characters from the input word and convert it to lowercase
  - Initialize two pointers, one at the beginning of the word and one at the end
  - Iterate over the word with a loop:
    - If the characters at the pointers don't match, return false
    - Move the pointers closer to the middle of the word
  - If the loop completes without returning false, the word is a palindrome and return true

  
*/

/*
  Add written explanation of your solution here
  Explanation:
  
  - The function cleans the input word by removing non-alphanumeric characters and converting it to lowercase.
  - It then sets up two pointers, one at the start of the word and one at the end.
  - The function iterates over the word, comparing characters at the pointers.
  - If at any point the characters don't match, it returns false.
  - If the loop completes without returning false, it means all characters matched, so the word is a palindrome and it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
