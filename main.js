// main.js
function greet(name) {
  if (!name) {
    console.log("Name is required!");
    return;
  }
  console.log(`Hello, ${name}!`);
}

greet("Rahul");
