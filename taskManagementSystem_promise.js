let tasks = [];



function addTask(task) { 
  console.log(`Adding task...`);
  let toAdd= [task  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof task === "string" && task !== "") {
        tasks= [...tasks, ...toAdd]
        resolve(`Task "${task}" added successfully`);
      } else {
        reject(`Task must be a non empty string`);
      }
    }, 1000);
  });
}

function completeTask(index) {
  setTimeout(() => {
    console.log(`Removing completed task...`);
  }, 2000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index < tasks.length && index >= 0) {
        resolve(`Task "${tasks[index]}" removed successfully`);
        tasks.splice(index, 1);
      } else {
        reject(`Invalid task index`);
      }
    }, 3000);
  });
}

async function add() {
  try {
    const add = await addTask(`live coding`);
    console.log(add);
  } catch (error) {
    console.log(error);
  }
}

async function remove() {
  try {
    const remove = await completeTask(0);
    console.log(remove);
  } catch (error) {
    console.log(error);
  }
}

add();
remove();

function listTasks() {
  setTimeout(() => {
    console.log(`Remaining tasks:`);
  }, 4000);
  setTimeout(() => {
    for (let i = 0; i < tasks.length; i++) {
      const index = tasks.indexOf(tasks[i]);
      console.log(`${index} : ${tasks[i]} `);
    }
  }, 5500);
}

listTasks();
