let tasks=[];

let task;

function addTask(add, callback){
setTimeout(()=>{
   if(typeof(task)== "string" && task != undefined) {
      tasks.push(add)
   } else{
      callback(error)
   }
}, 1000)
}

