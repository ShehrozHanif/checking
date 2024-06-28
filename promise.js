// const promise1= new Promise((res,rej)=>{
//     return res(2);
// }).then((resp:any)=>{
//     console.log(`Firest response (resp) ${resp}`)
//    let add = resp + 3;
//    console.log(`After addition :${add}`)
//   return add;   
// })
// .then((Resp2)=>{
//     console.log("Resp2", Resp2)
//     let multiple =Resp2 * 2;
//     console.log("After multiply ", multiple);
//     return multiple;
// })
// .then((resp3)=>{
//     console.log("Resp3", resp3)
//     let division = resp3 / 5;
//     console.log("After division ", division);
//     return division
// })
let promise1 = new Promise((resolve, reject) => {
    return resolve(2);
}).then((res) => {
    console.log("First response", res);
    let add = res + 2;
    console.log("After addition ", add);
    return add;
}).then((resp2) => {
    console.log("Second response ", resp2);
    let multiply = resp2 * 2;
    console.log("After multiply ", multiply);
    return multiply;
}).then((resp3) => {
    console.log("Third response ", resp3);
    let divi = resp3 / 2;
    console.log("After division ", divi);
});
export {};
