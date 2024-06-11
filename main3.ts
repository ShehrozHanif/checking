#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
console.log(`----------------${chalk.yellow(`Welcome to Shehroz coding world`)}----------------`)
let mypin = 1234
let mybalance = 10000

let user = await inquirer.prompt([
    {
        name:"input",
        type:"input",
        message: `${chalk.green(`Please Enter your atm-card`)}`
    },
    {
        name:"pin",
        type:"number",
        message:`${chalk.yellow(`Please Enter a pin number`)}`
    }
])

if(user.pin === mypin){
    console.log(`${chalk.red("Welcome to atm machine")}`)

    let cpanel = await inquirer.prompt([
        {
            name:"machine",
            type:"list",
            message:`${chalk.whiteBright("Kindly select any option")}`,
            choices:["View balance","Fast Cash","Widthdrawl","Exit"]
        }
    ])

    if(cpanel.machine === "View balance"){
        console.log(`${chalk.green(`Your balance is`)} ${chalk.yellowBright(mybalance)}`)
    }



    if(cpanel.machine === "Widthdrawl"){
        let amount = await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:`${chalk.yellow("How much money you want to widthdraw")}`
            }
        ])
    
        if(amount.amount > mybalance){
           console.log(`${chalk.red("Insufficient balance")}`)
     
        }else if(mybalance -= amount.amount){
            console.log(`${chalk.green(`Your remaining balance is`)} ${chalk.yellowBright(mybalance)}`)
        }



    }if(cpanel.machine === "Fast Cash"){
        let cash = await inquirer.prompt([
            {
                name:"cash",
                type:"list",
                message:`${chalk.yellow("Select an Amount")}`,
                choices:["2500","5000","7500","4000"]
            }
        ])

        mybalance -=cash.cash
        console.log(`${chalk.green("Your remaining balance is")} ${chalk.yellowBright(mybalance)}`)

    }if(cpanel.machine === "Exit"){
        console.log(`${chalk.yellow("Thank you for using Atm")}`)
    }
 
}else{
    console.log(`${chalk.red("invalid pin number")}`)
}