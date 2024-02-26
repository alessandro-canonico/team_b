let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (typeof task === "string" && task !== "") {
                tasks.push(task)
                resolve(`Task "${task}" added successfully`)
            } else {
                resolve(`Task must be a non-empy string. Skipping to next...`)
            }
        }, 500)
    })
}

//fucntion2 completeTask
function completeTask(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (index < tasks.length && index >= 0) {
                resolve(`(${index})"${tasks[index]}"removed successfully`)
                tasks.splice(index, 1)
            } else {
                resolve(`Invalid index: "${index}". Skkiping to next...`)
            }
        }, 500)
    })
}

//function 4 print tasks and their index
function listTasks() {
    setTimeout(() => {
        console.log(`Listing tasks...`)
    }, 500)
    return new Promise(()  => {
        setTimeout(() => {
            const indices = tasks.map((element) =>
            tasks.findIndex((item) => item === element)
        )
        indices.filter(indice => {
            console.log(`Index (${indice}) ${tasks[indice]}`)
        })
        }, 1000)
    })

}


//function3 prende come parametro "addTasks" o "completeTasks" e un numero indefinito di parametri (da aggoingere o rimuovere)
async function taskManagement(modifyToDo, ...parameters) {
    try {
        for (let i = 0; i < parameters.length; i++) {
            {
                const modifiedTask = await modifyToDo (parameters[i])
                console.log(modifiedTask)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

//permette di effettuare più chiamate di taskManagement senza che si sovrappongano
async function parallelManagement () {
    try{
        await taskManagement(addTask, 10, `Add function 4 in "tasks.js"`, `Check async function3 in "tasks.js`, "Commit and push changes")
        await taskManagement(completeTask, "20", 2, 1) //da mettere in ordine decrescente in modo tale da non modificare l'indice degli altri elementi prima che vengano rimossi
        const taskList = await listTasks(tasks)
        console.log(taskList)

    } catch (error) {
        console.log(error)
    }
}

parallelManagement()
