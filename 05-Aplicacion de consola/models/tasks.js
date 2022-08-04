const Task = require("./task");

class Tasks {
  taskList = {};

  get listArray() {
    const listFiltered = [];
    Object.keys(this.taskList).forEach(key => {
      listFiltered.push(this.taskList[key]);
    });
    return listFiltered;
  }

  constructor() {
    this.taskList = {};
  }

  loadTaskFromArray(tasks = []) {
    tasks.forEach(task => {
      this.listArray[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this.taskList[task.id] = task;
  }
}

module.exports = { Tasks };
