let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (typeof task === "string" && task !== "") {
                tasks.push(task)
                resolve(`Task "${task}" added successfully`)
            } else {
                //i messaggi di errore sono stati inseriti di proposito in un resolve, in modo tale che quando viene
                //trovato un errore, non viene effettuato il push dentro l'array e viene stampato il messaggio di errore, ma
                //le operazioni successive vengono comunque eseguite
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

//function 3 print tasks and their index
function listTasks() {
    setTimeout(() => {
        console.log(`Listing tasks...`)
    }, 500)
    setTimeout(() => {
        //assegno ad un nuovo array "indices" gli indici di ogni elemento dell'array
        const indices = tasks.map((element) =>
            tasks.findIndex((item) => item === element)
        )
        //stampo in console ogni indice e task corrispondente a quell'indice utilizzando map sull'array di indici
        indices.map((index) => {
            console.log(`Index (${index}) ${tasks[index]}`)
        })
    }, 1000)
}


//async function1: questa funzione prende come parametro "addTasks" o "completeTasks" e un numero indefinito di parametri c
//he vengono inseriti all'intern odell'array "parameters"
async function taskManagement(modifyToDo, ...parameters) {
    //passiamo uno alla volta i parametri contenuti in "parameters" alla funzione "addTasks" o "completeTasks"
    for (let i = 0; i < parameters.length; i++) {
            //per eseguire la funzione a intervalli regolari aspettando ogni volta il completamento dell'operazione precedente utilizzo await
            const modifiedTask = await modifyToDo(parameters[i])
            //e poi stampo il messaggio (resolve) che ho assegnato a "modifiedTask"
            console.log(modifiedTask)
    }
} //dato che non c'è un reject ho omesso il try catch in entrambe le funzioni asincrone



//async function2: permette di effettuare più chiamate di taskManagement(async function1) senza che si sovrappongano
async function parallelManagement() {
    //utilizzando questa funzione, posso effettuare più chiamate di "taskManagement", e ogni chiamata aspetterà
    //il completamento della precedente prima di essere eseguita (ovvero verranno stampati prima tutti i parametri
    //inseriti con la prima chiamata, e successivamente tutti i parametri inseriti nella seconda)
    await taskManagement(addTask, 10, `Add function 4 in "tasks.js"`, `Check async function3 in "tasks.js`, "Commit and push changes")
    await taskManagement(completeTask, "20", 2, 1) //da mettere in ordine decrescente in modo tale da non modificare l'indice degli altri elementi prima che vengano rimossi (non sono riuscito ad implementare il sort degli indici passati)
    await listTasks(tasks)
}


//effettuo la chiamata di parallelManagement per runnare tutte le funzioni richiamate al suo interno, una dopo l'altra
parallelManagement()
