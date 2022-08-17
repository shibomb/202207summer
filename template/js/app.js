import * as myModule from "./modules/myFunction.js";

function hello() {
  let app = window.document.getElementById("app");
  console.log(app);
  app.innerHTML = "Hello World";
}

function main() {
  console.log("#main start");

  // simple
  hello();

  // module
  myModule.myFunction();

  console.log("#main finished");
}

main();
