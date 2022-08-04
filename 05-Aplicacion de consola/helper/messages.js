require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("======Select an option=====".green);
    console.log("===========================\n".green);

    console.log("1. Create tasks".blue);
    console.log("2. Show all tasks".blue);
    console.log("3. Show all completed tasks".blue);
    console.log("4. Show all noncompleted tasks".blue);
    console.log("4. Complete tasks".blue);
    console.log("5. Delete tasks".blue);
    console.log("0. Exit".blue);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (response) => {
      readline.close();
      resolve(response);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(" \nPress `ENTER` to continue".white, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
