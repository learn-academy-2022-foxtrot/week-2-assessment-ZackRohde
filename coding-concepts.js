// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: The .split("") method splits the called upon function name into a new string... 
// b) Verify and explain: The .split method takes everything inside of the string and individually seperates the characters. Such as "F","o", etc. I knew I was on the right path, but forgot it seperates each individual character that is inside the string.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))


// a) Your answer: This is an example of what a UI function would look like. It's saying this greeter (function name) is equal to the name that is inputted in the UI platform. It will log the name and show the name of what is inputted, in this example the code will show "Hello, learn student!" 
// b) Verify and explain: I ran the code and received a undefined. I looked up in our syllabus ternary operator, because I know string interpolation is in there and have found that, the RETURN is missing from inside the curly braces. I knew there was something missing, but I didn't take my time understanding what was happening in the code. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: There is a function named multipledByTwo followed by an array of numbers that has the .map method which means to iterate through the present array create a new array with the new values. Following that there is a parameter number and a function following meaning to take those numbers inside of the array and multiply them by two. 
// b) Verify and explain: My answer was correct! To elebrate on this .map() is apart of higher-order functions and specifcally what we see after the .map is the value, index, and array. Those three items inside must be matched exactly. In this example number is the value, in this circumstance the index is just each of the numbers, and the array (remember .map() iterates through the array and creates a new array with the new value given). 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: We have a function named onlyOdds with an array of numbers that has the .filter() method attached to it which means it is filtering out the numbers that are not even which would leave [11, 13, 15] as the answer. 
// b) Verify and explain: I was correct in my answer as I know the .filter() method iterates through the array and creates a new array with values that the condition wants. The snytax is the exact same as the .map() method as in the value, index, array which in this case means the numbers are the value, the index is taking each of those numbers and checking to see if there is a remainder not equal to zero. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: The answer is Javascript, because based on the console log it says the variable name with the object's key value pair. The language is the key and the values are what is after so, there are programming languages and the console log is saying to check the index of 0. As we know the index of 0 is the first value based in this case the array of strings. 
// b) Verify and explain: This example is a object with four different key value pairs some as an array and some as a string. To access the different key value pairs you must call the object's name (myCodingSkills) and then the pair. If that pair is more than one than you must call upon the index too. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
      this.cohort = "Foxtrot",
      this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This is a class named Learn. The class has three objects student, cohort, and year so, when we made a new student we are saying George is apart of the Foxtrot cohort in 2022. 
// b) Verify and explain: I was mostly correct, but it's not a sentence, when called upon it will show the syntax of the class, student: George, cohort: "Foxtrot", year: 2022. The parameter is also stating the name which is why it knows to log that with Foxtrot 2022, I think?
