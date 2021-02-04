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

/*function crazyDiff (num1, 19)  {
    let result;
    if(num1 > 19) {
        result = (num1 - num2) * 3
    } else {
        result = num1 - num2
    }
     
    return result;
    
}

console.log("Crazy diff result: " + crazyDiff(5,2))





console.log("Final result is = " + crazyDiff(8,2)) */



/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

/*function boundary (n) {
    let result; 
    if(n >= 20 && === 100) {
        result = true;
    }
}*/

//console.log(boundary(45))

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