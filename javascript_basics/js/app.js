import * as myModule from "./modules/myFunction.js";

function practice() {
  console.log("------------------------------------------------");
  // Variable Types
  // google it:
  //      javascript variable [type],
  //      e.g. javascript variable number

  // 数値
  let num = 1;
  console.log(num);
  num = num + 1;
  console.log(num);

  // 文字列
  let str = "Hello";
  console.log(str);
  str = str + " " + "good-bye";
  console.log(str);

  // Boolean
  let isOK = true;
  console.log(isOK);
  isOK = !isOK;
  console.log(isOK);

  // Array
  let list = [100, 22, 55, 23, 30, 65, 73, 82, 91];
  console.log(list);
  list[0] = 10;
  console.log(list);

  // JSON (Dict / object)
  let json = { name: "8x9", age: 4 };

  let students = [
    { name: "kazuki", age: 16 },
    { name: "toomya", age: 18 },
    { name: "yuki", age: 23 },
    { name: "harut", age: 15 },
  ];
  let studentsDict = {
    kazuki: { name: "kazuki", age: 16 },
    toomya: { name: "toomya", age: 18 },
    yuki: { name: "yuki", age: 23 },
    harut: { name: "harut", age: 15 },
  };

  // studentsDict["yuki"].age;
  // for (let key in studentsDict) {
  // }

  // students[0].name;
  // students[0]["age"];

  console.log(json);
  json["age"] = json["age"] + 1;
  console.log(json);
}

function main() {
  console.log("#main start");

  // simple
  practice();

  // module
  myModule.myFunction();

  console.log("#main finished");
}

main();
