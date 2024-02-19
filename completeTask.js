let tasks = []

function completeTask (index, callback) {
    console.log(`Completing the task...`);
    if (index < 0 || index > tasks.length) {
        callback(new Error(`Invalid task index`), null)
    } else { tasks.splice(index, 0)
        callback(null, `Task completed successfully`)
    }
}

function handlingTasksError (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
}