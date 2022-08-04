require("colors");

const { showMenu, pause } = require("./helper/messages");

const main = async () => {
    let response = '';

  do {
    response = await showMenu();
    console.log({response})
    if(response !== '0') await pause();
  } while (response !== '0');

  // pause()
};

main();
