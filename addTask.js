let tasks = [];

function addTask(task, callback) {
  console.log(`Adding task...`);
  setTimeout(() => {
    if (typeof task === "string" && task === "") {
      callback(new Error(`Task must be a non-empty string`), null);
    } else {
      tasks.push(task);
      callback(null, `Task added successfully`);
      console.log(tasks);
    }
  }, 2000);
}

function handlingErrors(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

addTask(``, handlingTasksError);


