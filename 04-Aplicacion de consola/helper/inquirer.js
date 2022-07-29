const inquirer = require("inquirer");
require("colors");

const options = [
  {
    type: "list",
    name: "option",
    message: "Select an option",
    choices: [
      {
        value: "1",
        name: "1. Create tasks",
      },
      {
        value: "2",
        name: "2. Show all tasks",
      },
      {
        value: "3",
        name: "3. Show all completed tasks",
      },
      {
        value: "4",
        name: "4. Show all noncompleted tasks",
      },
      {
        value: "5",
        name: "5. Complete tasks",
      },
      {
        value: "6",
        name: "6. Delete tasks",
      },
      {
        value: "0",
        name: "0. Exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("======Select an option=====".green);
  console.log("===========================\n".green);

  const { option } = await inquirer.prompt(options);
  return option;
};

const pause = async () => {
  const q = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"enter".green} to continue`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(q);
};

const readInput = async (message) => {
  const q = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingrese un valor valido";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(q);
  return desc;
  
};

module.exports = {
  inquirerMenu,
  pause,
  readInput
};
