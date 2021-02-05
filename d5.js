//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/

const test = "This is a string";


/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/

const sum = 16 - 12;


/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

const random = (Math.floor(Math.random() * 21));
//console.log("Here is your random number: " + random)

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
const myInfo = {
    name: "Nate",
    surname: "Turner",
    age: 30
}


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete myInfo.age


/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/

myInfo.skills = "Some Javascript"



/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.*/

   delete myInfo.skills

   //console.log(myInfo)


//**********************FUNCTIONS******************




   /* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/

const dice = () => {
    let dice= (Math.floor(Math.random() * 7))

    return dice
}

//console.log("The number you have rolled is: " + dice())

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/

function whoIsBigger (num1, num2, isNan)  {  //Wanted to practise with ternarys so any suggestions would help 
    return num1 > num2 ? "The frst number is bigger"
           : num2 > num1 ? "The second number is bigger"
           : num1 === num2 ? "These numbers are the same"
           : num1 && num2 === isNan ? "Please enter a number" // If number one or two is NaN return this message, but doesn´t work
           : "A number must be entered"
}

//console.log(whoIsBigger("44", 70))

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = function (str) {
    return str.trim().split(" "); //I have used trim to get rid of "whitespace"(spaces for example), split to obviously split. 
};
//console.log(splitMe("I Love Coding When It Finally Works After Staring At The Problem For Five Hours"));


/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/


//no idea



/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"

   
*/
function non_digit_string(str) {
	const regex = /\D+/g;
	let m;

	non_digit_arr = [];
	while ((m = regex.exec(str)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}


		m.forEach((match, _groupIndex) => {
			if (match.trim() != '') {
				non_digit_arr.push(match.trim());
			}
		});
	}
	return non_digit_arr;
}

const str = `I love 123 whatever`;
//console.log("A string without numbers: " + non_digit_string(str));


/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/

function isThisAnEmail(_mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  {
    return (true)
  }
    
    return (false)
}
 //console.log(isThisAnEmail("email@email.com"))  // This is all I could think of, the problem is I could type any nonses and get "true"
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.

*/

let d1 = new Date()
//console.log(d1.toString()) //This seemed like the easiest way, but I would appreciate where I could go to find out more 


/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
 const rollTheDice = function  (die1, die2) {
    
      
        
        die1 = (Math.floor(Math.random() * 7))
        die2 = (Math.floor(Math.random() * 7))
        roll = die1 + die2;
        
        console.log ("The first die rolled is: " + die1);
        console.log ("The second die rolled is: " + die2);
        console.log("Your total roll is " + roll);

 }

 //console.log(rollTheDice())

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
function days_passed(dt) {
    let current = new Date(dt.getTime());
    let previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  //console.log("Number of days passed is: " + days_passed(new Date(2020, 10, 14)));

  
  
/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.

   


/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

for (let line = "*"; line.length < 4; line += "*")
  console.log(line);

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree3
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.*/

  function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  //console.log(isPrime(567567567))



  

//**************** arrays exercises are below ********/






  const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

  
  
     // JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/




/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
const titles =[]
for (let movie of movies) {
 
    titles.push(movie.Title)
}

const mappedMovies = movies.map(m=> ({movie:m.Title, year:m.Year, isGood:true}))
console.log(mappedMovies)

 

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/





const thisMill = function (movies) {
  return movies.filter(m => parseInt(m.Year)> 2000);
}





/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/





/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/
    
/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

for (let line = "*"; line.length < 4; line += "*")
console.log(line);

/* Ex.22 
Create a function tree that receives the height and creates an "*" tree with that height.
Example: 
tree(3)
  *  
 *** 
*****
*/

/* Ex.23
Create a function isItPrime that receives a number and returns true if the number is a prime number.*/

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

//console.log(isPrime(567567567))

//
