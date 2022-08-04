require("colors");

const  { inquirerMenu, pause } = require("./helper/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");

const main = async () => {
    let opt = '';

  do {
    // opt = await inquirerMenu();
    // console.log({opt})


    const task = new Task('Learn Node.js');
    const tasks = new Tasks();
    console.log(task)
    console.log(tasks)
    await pause()
    
  } while (opt !== '0');
};

main();
