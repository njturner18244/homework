/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const areaoFRectangle = function (l, b) {
    return l * b;
}

console.log("result of ex1 = " + areaoFRectangle(8, 4));

//wanted to experiment this with an arow function 

const area = (length, base) => { 
    return length * base; 
  }; 
  console.log("Result of ex2 = " + area(5, 10)); 

 /* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (num1, num2)  {
    let result;
    if(num1 === num2) {
        result = (num1 + num2) * 3
    } else {
        result = num1 + num2
    }
     
    return result;
    
}

console.log("Ex 2 result = " + crazySum(2,2))





console.log("Final result is = " + crazySum(8,2))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (num1, num2)  {
    let result;
    if(num1 > 19 && num2 > 19) {
        result = (num1 - num2) * 3
    } else {
        result = num1 - num2
    }
     
    return result;
    
}

console.log("Crazy diff result: " + crazyDiff(567,2))





console.log("crazyDiff result 2 is = " + crazyDiff(8,2)) //Cant get it to do the greater than 19 sum :/



/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

const boundary = function (n) {
    
    if(n >= 20 && n <=200) {
        return true;
    } else {
        return ("I respectfully ask that you please enter a number between 20 and 200. Thank you")
    }
}

console.log(boundary(687))

/*EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const checkNumber = function (x) { // x has been defined here surely 
    if (x % 3 && x % 7) {
        return "this is a multiple of 3 & 7";
    }
}


console.log(checkNumber(3)) // I don´t understand why this is undefined

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).*/

const reverseString = (str) => {
    let newString = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

console.log(reverseString("This was very annoying"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const toUpperCase = function (str) {
    str = str.substring(1) 
    return str
}

console.log(toUpperCase("i thought substring would work, evidently not"))





/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/



/* WRITE YOUR CODE HERE */

const cutString = function (str) {
    str = str.slice(1, -1) // slice is a method, start at one and then cut at last character which will be -1.
    return str
}

console.log(cutString("Nathan")) // Prints "atha"

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) { //accepts any number
    let returnedNumber = [];          //empty array to push the result
    for(i = 0; i < n; i++) {       // "regular" for loop
        returnedNumber.push(Math.floor(Math.random() * 10)); // push into variable,, math floor gives a whole number and math random is what it says it is 
    }

    return returnedNumber
    
}
console.log(giveMeRandom(9)); //*borat voice* GREAT SUCCESS