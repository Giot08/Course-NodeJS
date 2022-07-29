require("colors");

const { inquirerMenu, pause, readInput } = require("./helper/inquirer");
const { saveDB, readDb } = require("./helper/saveFile");
const { Tasks } = require("./models/tasks");

const main = async () => {
  let opt = "";
  
  const tasks = new Tasks();
  
  const taskDB = readDb();
  if (taskDB) {
    tasks.loadTaskFromArray(taskDB);
  }
  await pause();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        // crear opcion
        const desc = await readInput("Enter a description: \n");
        console.log(desc);
        tasks.createTask(desc);
        break;
      case "2":
        console.log(tasks.listArray);
        break;
    }
    saveDB(tasks.listArray);
    await pause();
  } while (opt !== "0");
};

main();
