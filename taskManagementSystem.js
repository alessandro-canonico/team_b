let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`];

//function1: addTask
function addTask(callback, ...task) {
  console.log("Adding task...");
  setTimeout(() => {
    task.forEach((task) => {
      if (typeof task === "string" && task !== "") {
        tasks.push(task);
        callback(null, `Task "${task}" added successfully`);
      } else {
        callback(new Error("Task must be a non empty string"), null);
      }
    });
  }, 1000);
}

addTask(screenMessage, `live coding`, `correre`);

//function2: complete task
function completeTask(callback, ...index) {
  setTimeout(() => {
    console.log("Removing completed task...");
  }, 2000);
  setTimeout(() => {
    index.forEach((index) => {
      if (index < tasks.length && index >= 0) {
        callback(null, `Task "${tasks[index]}" removed successfully`);
        tasks.splice(index, 1);
      } else {
        callback(new Error("Invalid task index"), null);
      }
    });
  }, 3000);
}

completeTask(screenMessage, 0, 1, 8);

//callback function for function 1 & 2
function screenMessage(error, message) {
  if (message) {
    console.log(message);
  } else {
    console.log(error);
  }
}

function listTasks() {
  console.log(`Remaining tasks:`);
  for (let i = 0; i < tasks.length; i++) {
    const index = tasks.indexOf(tasks[i]);
    console.log(`${index} : ${tasks[i]} `);
  }
}

setTimeout(() => {
  listTasks();
}, 4000);
