const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    demandOption: true,
    describe: 'Listar las bases registradas',
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: 'marca el limite de la tabla',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base debe ser un numero");
    } else {
      return true;
    }
  }).argv;

    module.exports = argv;