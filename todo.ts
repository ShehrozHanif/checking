import inquirer from "inquirer"

let todoList:string[] = []
let condition = true

let main = async()=>{
    let option = await inquirer.prompt([
        {
            name:"option",
            type:"list",
            message:"kindly select an Option",
            choices:["Add Task", "View Tsak","Delete Task","Update Task","Exit"]
        }
    ])

    if(option.option === "Exit"){
        condition = false
    }else if(option.option === "Add Task"){
        addTask()

    }else if(option.option === "View Tsak"){
         viewTask()

    }else if(option.option === "Delete Task"){
        deleteTask()

    }else if(option.option === "Update Task"){
        updateTask()

    }
}

let addTask=async()=>{
    console.log(`-----------Welcome to Add-Task------------`)
    let add = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"which task to add in your todo list"
        }

    ])

    todoList.push(add.task)
    console.log(`${add.task} Successfully added in your To-do list`)
    main()


}

let viewTask = async()=>{
    console.log(`-----------Welcome to View-Task------------`)
    todoList.forEach((task,index) => {
        console.log(`${index + 1}:${task}`)
    
  });
  
}

// Make Another view list function for deleteTask

let view = async()=>{
    console.log("Task List:")
    todoList.forEach((task,index) => {
        console.log(`${index + 1}:${task}`)
    
  });
  
}




let deleteTask= async()=>{
     view()
    console.log(`-----------Welcome to Delete-Task------------`)
    let choose = await inquirer.prompt([
        {
            name:"delete",
            type:"input",
            message:"Enter the number which Task you want to delete"
        }
    ])

    let del = todoList.splice(choose.delete -1,1)
    console.log(del, "has been deleted Successfully from To-do List")
    console.log(`Update To-do List:`,todoList)


    
}


let updateTask = async()=>{
    console.log(`-----------Welcome to Update-Task------------`)
    view()
    let select = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"kindly enter the number at which you want to update"
        },
        {
            name:"task",
            type:"input",
            message:"Enter a new name of that task which you want to update",

        }

        
    ])
    
    todoList[select.index -1] = select.task
    console.log(`${select.task} at no:${select.index} updated Successfully [for Updated List check option "View-Task"] `)
    main()


}




main()