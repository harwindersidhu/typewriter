const sentence = "hello there from lighthouse labs";
let interval = 50;
let i = -1;
for (const char of sentence) {
   i++;
  //console.log(char);
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, interval * i); 
}

setTimeout(() => {
  console.log("");
}, interval * (i + 1));