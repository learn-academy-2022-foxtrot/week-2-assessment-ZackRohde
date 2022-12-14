// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
  it("decides if the number inside it is evenly divisible by three or not.", () => {
    expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })
})

// ReferenceError: divisibleByThree is not defined

const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function with the function name of divisibleByThree
// Only one parameter (object)
// Make a conditional statement checking to see if the value is divisble by three
// Create a return 

const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`
  } else if (object.number === 0) {
    return `${object.number} is divisible by three`
  } else if (object.number % 3 !== 0) {
    return `${object.number} is not divisible by three`
  } else {
    return "Error"
  }
}

// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capWords", () => {
  it("returns an array with all the words capitalized.", () => {
    expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// // ReferenceError: capWords is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function named capWords
// Iterate through the array using .map method
// In order to capitalize each first character I'll need to use charAt(0) which means it's going over only the first character of the index
// Then I'll use .toUpperCase() to capitalize each first character
// After I'll need it to stop so I can use .slice(1) which means it will start at the first index character and then using .toLowerCase() ensures everything after the first index is lowercased

function capWords(newArr) {
  return newArr.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel.", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function, no name given so I named it firstVowel
// Create a forloop that says the index is less than the firstVowels length
// Create a conditional statement that goes through each index of the string and checks if it's a vowel and if it is in it will continue until the vowel is found which means using the logical operator OR || 
// Create a return statetment of i

const firstVowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u") {
      return i
    }
  }
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total