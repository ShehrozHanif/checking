// export function sum(num1:number,num2:number){
//     return num1 + num2
// }
const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(matrix.length);
function diagonal(matrix) {
    console.log("Diagonal Elements");
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
let response = diagonal(matrix);
function calculateElements(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][i];
        }
    }
    return sum;
}
// console.log(matrix[i].length)
let check = calculateElements(matrix);
console.log(check);
export {};
