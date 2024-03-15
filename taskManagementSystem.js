let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(callback, ...task) {
    console.log("Adding task...")
    task.forEach((task) => {
        setTimeout(() => {
            if (typeof task === "string" && task !== "") {
                callback(null, `Task "${task}" added successfully`)
                tasks.push(task)
            } else {
                callback(new Error("Task must be a non empty string"), null)
            }
        }, 1000)
    })
}


addTask(screenMessage, `live coding`, ``, `complete exercise`, `checkpoint test`);

//function2: complete task
function completeTask(callback, ...index) {
    setTimeout(() => {
        console.log("Removing completed task...")
    }, 2000)
    setTimeout(() => {
        index.forEach((index) => {
            if (index < tasks.length && index >= 0) {
                callback(null, `Task "${tasks[index]}" removed successfully`)
                tasks.splice(index, 1)
            } else {
                callback(new Error("Invalid task index"), null)
            }
        })
    }, 3000)
}

completeTask(screenMessage, 0, 1, 8)

//callback function for function 1 & 2
function screenMessage(error, message) {
    setTimeout(() => {
        if (message) {
            console.log(message)
        } else {
            console.log(error)
        }
    }, 1000)
}

function listTasks() {
    console.log(`Remaining tasks:`);
    tasks.forEach((task, index) => {
        console.log(task, index+1);
    });
/*     for (let i = 0; i < tasks.length; i++) {
        const index = tasks.indexOf(tasks[i])
        console.log(`${index} : ${tasks[i]} `)
    }*/
} 

setTimeout(() => {
    listTasks()
}, 4000)
