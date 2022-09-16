const MY_USERNAME = process.env.NAME
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${MY_USERNAME} IS THE BOMB!`);
    await sleep(5000);
  }
}

main();
