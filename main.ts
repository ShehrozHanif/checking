// function countDown(number:number){
//     let countDown = number
//     while(countDown >0){
//         console.log("CountDown",countDown)
//         countDown--
        
//     }
//     return "Countdown Completed"
// }

// let check3 = countDown(10)
// console.log(check3)


// when function doesn't return anything it show undefine after the result

type person ={
    bio:{
        name:string,
        age:number, 
        gender:string,
        email:string
    }
    address:{
        street:number,
        houseNo:string,
        location:string,
    }
    greet: ()=>void;
}

let person1:person={
    bio:{
        name:"Shehroz Hanif",
        age:25,
        gender:"male",
        email:"Shehrozhanif54@gmail.com"
    },
    address:{
        street:1,
        houseNo:"3",
        location:"Gulistn-e-juhar Perfume chock",
    },
    greet:function(){
        console.log("Hello Shehroz")
    }
}

// console.log(person1.greet())
// person1.greet()
//same issue undefine

// import inquirer from "inquirer"


// async function guessGame() {
//     let input = inquirer.prompt([
//         {
//             name:"Guessgame",
//             type:"number",
//             message:"Please Enter a number"
//         }
//     ])

    
//         let number:number
//         let attempt = 0
//         do{
//             number = Math.floor(Math.random()*10)+1
//             attempt++;
//             if(input.Guessgame === number){
//                 console.log("Apki Qismat Khul gai")
//                 return attempt;
//             }else{
//                 console.log("try again")
//             }
//         }while(true)
    
    
    
    
// }

// let check2 = guessGame(7)
// console.log(`It took ${check2} attempts`)


// import { sum } from "./main2.js"

// console.log(sum(3,5))



// import inquirer from "inquirer"
// let input = await inquirer.prompt([
//     {
//         name:"gender",
//         type:"list",
//         choices:["male","female"],
//         message:"what is your gender",
//     }
// ])

// console.log(input.gender)

// let num1 = 5;
// let attempt = 0
// do{
//     let num2 = Math.floor(Math.random()*5)+1;
//     attempt++
//     if(num1 === num2){
//         console.log("Congratulation")
//         break;
//     }else{
//         console.log("Try again")
//     }


// }while(true)


// console.log(`Attempts: ${attempt}`)    


// function check(num:number){
//     let attempt = 0;
//     let num2:number 
//     do{
//         num2 = Math.floor(Math.random()*5)+1;
//         attempt++
//         if(num === num2){
//             console.log("Congratulation")
//             return attempt;
//         }else{
//             console.log("Try again")
//         }
//     }while(true)
// }

// let attemots = check(5)

// console.log(`it took ${attemots} attempts`)




// function randomNumber(userInput:number){
//     let number:number
//     let attempt = 0
//     do{
//         number = Math.floor(Math.random()*10)+1
//         attempt++;
//         if(userInput === number){
//             console.log("Apki Qismat Khul gai")
//             return attempt;
//         }else{
//             console.log("try again")
//         }
//     }while(true)

// }

// let check2 = randomNumber(7)
// console.log(`It took ${check2} attempts`)



/* Part 3: Colorful T-shirts
 challenge:
 1.Design a type alias named product to represent a T-shirt Object with properties like name(string), price(number), and color (string).
 2.Include a Nested Object named inventory within product.This inventory object should have two properties:
  . stock(number):Represent the number of T-shirts available.
  . colorOptions(Optional array of strings):Lists available colors(if any)
 3.Inside a inventory object ,define a function named changeColor.This function accept a new color string as an argument.When called,it should:
  . Update the colorr property of the product object.
  . Adjust the price based on the new color(implement your own logic, e.g, increase by 10% for red, decrease by 5% for blue)  
*/

// type Product ={
//     name:string,
//     price:number,
//     color:string,
//     inventory:{
//         stock:number,
//         colorOptions?:string[],
//         changeColor:(product:Product, newColor:string)=>void
//     }
    
// }


// const changeColor = (product:Product, newColor:string):void=>{
//     product.color =newColor

//     switch(newColor.toLowerCase()){
//         case 'red':
//             product.price *= 1.10;
//             break;

//         case 'blue':
//          product.price *= 0.95;
//          break;
         
//         default:
//             break; 
//     }
// }


// const createProduct =(name:string,price:number,color:string,stock:number,colorOptions?:string[]):Product=>{
//     const product:Product ={
//         name,
//         price,
//         color,
//         inventory:{
//             stock,
//             colorOptions,
//             changeColor:(product:Product, newColor:string)=>changeColor(product,newColor)
//         }
//     };
//     return product
// }


// let newShirt = createProduct("cool T-shirt",300,"white",200,["red,","blue","black"])
// // console.log(newShirt)

// newShirt.inventory.changeColor(newShirt,"blue")
// console.log(newShirt)


let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/*
.matrix[i][i] accesses the element at the ith row and the ith column of the matrix.
.In a 3x3 matrix, the main diagonal elements are at positions (0,0), (1,1), and (2,2).
.console.log(matrix[i][i]) prints the diagonal element to the console.

*/
function printDiagonalElements(matrix: number[][]): void {
    console.log("Diagonal Elements:");
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
/*
First Iteration (i = 0):

matrix[0][0] is 1.
The function prints 1.
Second Iteration (i = 1):
 
matrix[1][1] is 5.
The function prints 5.
Third Iteration (i = 2):

matrix[2][2] is 9.
The function prints 9.
So, the output of the function will be:

*/
// Calling the function
printDiagonalElements(matrix);




function calculateSumOfElements(matrix: number[][]): number {
    let sum: number = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

// Calling the function and printing the result
let sum = calculateSumOfElements(matrix);
console.log("Sum of all elements in the matrix:", sum);


/*
First Outer Loop Iteration (i = 0):

First Inner Loop Iteration (j = 0):
matrix[0][0] is 1.
sum becomes 0 + 1 = 1.
Second Inner Loop Iteration (j = 1):
matrix[0][1] is 2.
sum becomes 1 + 2 = 3.
Third Inner Loop Iteration (j = 2):
matrix[0][2] is 3.
sum becomes 3 + 3 = 6.
Second Outer Loop Iteration (i = 1):

First Inner Loop Iteration (j = 0):
matrix[1][0] is 4.
sum becomes 6 + 4 = 10.
Second Inner Loop Iteration (j = 1):
matrix[1][1] is 5.
sum becomes 10 + 5 = 15.
Third Inner Loop Iteration (j = 2):
matrix[1][2] is 6.
sum becomes 15 + 6 = 21.
Third Outer Loop Iteration (i = 2):

First Inner Loop Iteration (j = 0):
matrix[2][0] is 7.
sum becomes 21 + 7 = 28.
Second Inner Loop Iteration (j = 1):
matrix[2][1] is 8.
sum becomes 28 + 8 = 36.
Third Inner Loop Iteration (j = 2):
matrix[2][2] is 9.
sum becomes 36 + 9 = 45.
So, the sum of all elements in the matrix is 45
 */
