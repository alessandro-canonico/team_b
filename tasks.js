
let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`];

//function1: addTask
function addTask(task, callback) {
  console.log("Adding task...");
  setTimeout(() => {
    if (typeof task === "string" && task !== "") {
      tasks.push(task);
      callback(null, `Task added successfully`);
    } else {
      callback(new Error("Task must be a non empy string"), null);
    }
  }, 1000);
}

addTask(10, screenMessage);

//function2: complete task
function completeTask(index, callback) {
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

completeTask(0, screenMessage);

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
