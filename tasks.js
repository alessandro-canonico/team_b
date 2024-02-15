let tasks = [`Backup OS`, `Push tasks.js,`];

//function1: addTask
function addTask(task, callback){
    if (typeof task === "string" && task !== ""){
        setTimeout(() => {
            tasks.push(task)
            callback(null, `Task added successfully`)
        }, 1000)
    } else {
        callback(new Error ("Task must be a non empy string"), null)
    }
}

addTask("Push task.js to GitHub repo", screenMessage)

//function2: complete task
function completeTask(index, callback){
    if (index < tasks.length && index >= 0){
        setTimeout(() => {
            tasks.splice(index, 1)
            callback(null, `Task completed successfully`)
        }, 2000)
    } else {
        callback(new Error("Invalid task index"))
    }
}

completeTask(0, screenMessage)

//callback function for function 1 & 2
function screenMessage (error, message){
    if (message){
        console.log(message);
    } else {
        console.log(error);
    }
}

//function3: list all tasks on console
function listTasks(tasksArray) {
  tasksArray.forEach((task) => {
    console.log(task);
  });
}

listTasks(tasks);
