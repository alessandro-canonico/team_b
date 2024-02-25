let tasks = []; /* `Backup OS`, `Push tasks.js`, `Check Google Calendar` */
let input= `Backup OS`; //HO DEFINITO L'INPUT DELLA NUOVA TASK QUI, MA SI PUO' FARE ANCHE NELL'INVOCAZIONE
let input2= `Push tasks.js`; // SECONDO INPUT PER VERIFICARE CHE FUNZIONI 
let toAdd= [];      //CREO UN ARRAY DI SUPPORTO, SARA' NECESSARIO ...


function addTask(task) { 
  console.log(`Adding task...`);
  let toAdd= [task];   //... QUI: L'INPUT DEVE NECESSARIAMENTE DIVENTARE UN ARRAY PER FUNZIONARE, MA 'task' RESTA UNA STRINGA
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof task === "string" && task !== "") {
        tasks= [...tasks, ...toAdd]   // LO SPERAD E' QUI, INSERISCE AUTOMATICAMENTE IL CONTENUTO DI 'toAdd' DENTRO 'tasks'
        //console.log(tasks);
        resolve(`Task "${task}" added successfully`);
      } else {
        reject(`Task must be a non empty string`);
      }
    }, 1000);
  });
}

addTask(input)
addTask(input2)

setTimeout(()=>{console.log(tasks)}, 2000)


/* 
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
 */
