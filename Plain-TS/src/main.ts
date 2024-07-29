import "./style.css";

class Person {
  constructor(public firstName: string) {}
}

const person = new Person("steve");
const app = document.getElementById("app");

if (app) {
  app.innerHTML = `<h1>${person.firstName}</h1>`;
}

enum MatchResult {
  homeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

enum Colors {
  "Red",
  "Green",
  "Blue",
}

console.log(MatchResult);
console.log(Colors);
console.log(Colors[0]);
