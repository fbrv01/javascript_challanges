// Check Nums: Have the function checkNums(num1,num2) take both parameters being passed and print true if num2 is greater than num1, otherwise print false.
// If the parameter values are equal to each other then print -1.

function CheckNums(num1, num2) { 
    if (num2 > num1) {
      console.log(true)
    } else if (num2 === num1) {
      console.log(-1) 
    } else {
    console.log(false) 
    }
  }
    CheckNums(3, 5) 
