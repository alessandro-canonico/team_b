let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`];

for (let i = 0; i < tasks.length; i++) {
    const index = tasks.indexOf(tasks[i])
    console.log(index);
}

/*
//function1: addTask
function addTask(callback, task) {
  console.log("Adding task...");
  setTimeout(() => {
    if (typeof task === "string" && task !== "") {
      tasks.push(task);
      callback(null, `Task added successfully`);
    } else {
      callback(new Error("Task must be a non empty string"), null);
    }
  }, 1000);
}

addTask(screenMessage, `live coding`);

//function2: complete task
function completeTask(callback, index) {
  setTimeout(() => {
    console.log("Removing completed task...");
  }, 2000);
  setTimeout(() => {
    if (index < tasks.length && index >= 0) {
      tasks.splice(index, 1);
      callback(null, `Task removed successfully`);
    } else {
      callback(new Error("Invalid task index"), null);
    }
  }, 3000);
}

completeTask(screenMessage, 0);

//callback function for function 1 & 2
function screenMessage(error, message) {
  if (message) {
    console.log(message);
  } else {
    console.log(error);
  }
}

//function3: list all tasks on console
function listTasks(tasksArray) {
  console.log("Remaining tasks:");
  tasksArray.forEach((task) => {
    console.log(`- ${task}`);
  });
}

setTimeout(() => {
  listTasks(tasks);
}, 4000);
*/
