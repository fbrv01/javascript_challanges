// Palindrome: Given a string of text, print true or false indicating whether or not the text is a palindrome.
// A palindrome is a word, number, or other sequence of characters which reads the same backward as forward, such as "madam" or "racecar".
// You can also create an int palindrome.

const palindrome = str => {
    str = str.toLowerCase()
console.log(str === str.split('').reverse().join('')) 
}
palindrome('kayak')
