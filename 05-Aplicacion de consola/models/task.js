const { v4: uudiv4 } = require('uuid');

class Task {
  id = "";
  desc = "";
  done = null;
  constructor(desc) {
    this.id = uudiv4();
    this.desc = desc;
  }
}

module.exports = Task;
