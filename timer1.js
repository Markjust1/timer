// Getting arguments
const args  = process.argv.slice(2);
console.log(args)
  for (let item of args) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, item * 1000);
  }