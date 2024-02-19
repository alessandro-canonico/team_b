let tasks = ['jump rope', 'push ups', 'plank', 'lunges', 'crunch'];
let chosenTask = "reverse push ups";
let done= 2;

 function addTask(task, callback) {
   let confirm= "Task added successfully";
   let errorText= "Task must be a non empty string";

   console.log(`input: ${task}`);

   setTimeout( ()=>{
       if (task=== ""){
         callback(errorText, null);
      } else{
         tasks.push(task);
         callback(null, confirm);
      };
   }, 200);
};

function errorFeedback(error,check){

   if(error) {
      console.log(new Error(error));
   }else { 
      console.log(check);
   };
};

addTask(chosenTask, errorFeedback) 

function completeTask(index,){
   setTimeout(()=>console.log(`input: ${tasks[index]} done`), 500);

   setTimeout(()=>{ 
      let error;
      switch (index) {
         case (index < 0 || index > tasks.length):
            error = new Error("Invalid task index");
            return console.log(error); //console.error?
            break;
      
         default:
            error= null;
            //console.log(tasks[index]);
            tasks.splice(index, 1);
            console.log("Task completed successfully");
            break;
      }
   }, 700 );

} 

completeTask(done)

function listTasks(next) {setTimeout(()=>{ next.map((i)=>console.log(`remaining tasks:
- ${i}`))},800)};


listTasks(tasks)


/* Exercise: Task Management System
   In this exercise, you will create a simple task management system using JavaScript. 
   The task management system will allow users to add tasks, complete tasks, and list all tasks.
   Instructions:

   1. Create an empty array called tasks to store tasks. [V]

   2. Implement a function named add Task(task, callback):
   The function should take two parameters: task (a string representing the task to be added) 
      and callback (a function to be called after the task is added).
   Inside the function, use setTimeout to simulate an asynchronous operation.
   • If the task parameter is not a non-empty string, 
      call the callback function with an Error object containing the message "Task must be a non empty string".   [V]
   • If the task is valid, add it to the tasks array and call the callback function 
      with null as the error parameter and the message "Task added successfully".   [V]

   3. Implement a function named complete Task(index, callback):
   The function should take two parameters: index (the index of the task to be completed) 
      and callback (a function to be called after the task is completed).
   Inside the function, use setTimeout to simulate an asynchronous operation.
   • If the index parameter is invalid (less than 0 or greater than or equal to the length of the tasks array), 
      call the callback function with an Error object containing the message "Invalid task index".
   • If the index is valid, remove the task at the specified index from the tasks array 
      and call the callback function with null as the error parameter and the message "Task completed successfully".

   4. Implement a function named list Tasks():
   The function should list all tasks in the tasks array to the console
*/

