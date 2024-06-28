
// ------------------------------------------------JvaScript------------------------------------------------



// Day 54

alert("Hello World")
alert("I am a JavaScript")


//Day 57 

// let officialName =prompt("'What is the official name of JavaScript?'")
// if(officialName == "ECMAScript"){
//     alert("Right")
// }else{
//     alert("You dont know? Ecma Script")
// }


// Using if..else, write the code which gets a number via prompt and then shows in alert:
//  1, if the value is greater than zero,
// -1, if less than zero,
//  0, if equals zero.

// let number = prompt("Please Enter a number")
// if(number>0){
//     alert(1)
// }else if(number<0){
//     alert(-1)
// }else if(number == 0){
//     alert(0)
// }

/*
Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

// let result = (a + b <4) ? "below":"Over";

/**
 Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
 */


// let message = ("login" == "Employee") ? "Hello": "";
//   message = (`login` == 'Director') ? "Greeting": "";
//   message = ((login == '')) ? 'No login': "";
//   message = "";


//   alert(message)



// Day 58
/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 */

 
// let begin = prompt("Who's there?")


// if(begin == "Admin"){
//     let Password = prompt("Password?")
//     if(Password == "The Master"){
//         console.log("Welcome")
//     }else if(Password !== "The Master" ){
//         console.log("Wrong Password")
//     }else{
//         console.log("Cancelled")
//     }
// }else if(begin !== "Admin"){
//     console.log("I dont know you")
// }else{
//     console.log("Cancelled")
// }



//Day 59
// Loop while
// Use the for loop to output even numbers from 2 to 10.

// for(let i=2; i<=10; i++){
//     if(i%2===0){
//     console.log(i)
//     }    
    
// }

/*
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/


// let number = 0
// while(number<3){
//     console.log(`Number ${number}`)
//     number++
// }


/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

// let num;
// do{
//  num =prompt("Please Enter a number",0)
// }while (num <=100)





/*An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */


// let n =10
// nextPrime:
// for(let i =2; i<=n; i++){
//     for(let j =2; j<i; j++){
//         if(i % j==0) continue nextPrime
        
//     }
//     console.log(i)

// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime;  // not a prime, go next i
//   }

//   console.log(i); // a prime
// }



//-------------------------------Switch--------------------------------------
/*
Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

// let browser = prompt("Tell me the browser name")
// if(browser == "Edge"){
//     console.log("You've got the Edge!")
// }else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
//     console.log("Okay we support these browsers too")
// }else{
//     console.log("Okay we support these browsers too")
// }


/*
Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

// let a = +prompt('a?', '');


// switch(a){
//     case 0:
//         console.log(0)
//         break;
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//     case 3:
//         console.log(`2,3`)
//         break;

// }







//Day 60
// Function

/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/


// function checkAge(age){
//     return (age > 18) ? true:confirm("Do you allow your parents")
// }
// // // let check =checkAge(19)
// // // console.log(check)
// console.log(checkAge(19))


//Write a function min(a,b) which returns the least of two numbers a and b.

// function min(a,b){
//     return (a<b) ? a:b
// }
// console.log(min(5,4))


/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n
*/

// function pow(x,n){
//     return x**n
// }
// console.log(pow(3,2))
// console.log(pow(3,3))




