let colors = ["yellow", "blue", "red", "orange"];

// Oude stijl: loops
// While loop

let i = 0;
while (colors[i]) {
  console.log("While loop: " + colors[i]);
  i++;
}

// For loop

for (x = 0; colors[x]; x++) {
  console.log("for loop:" + colors[x]);
}

// Nieuwe stijl: array methods

colors.forEach((element) => console.log("Nieuwe stijl: " + element));

// 1. 5 inclusief de variable declaration
// 2. 2 inclusief de variable declaration
// 3.   voordeel van oude stijl is, is dat het sneller begrijpbaarder is.
//      Dat is voor mij zo, omdat de elementen los van elkaar staan en daarmee ook de logica van die elementen ten opzichte van elkaar voor mij in een oogopslag duidelijker is.
//      voordeel van de array method is, is dat het minder code benodigd.
// 4. Nee dus.
//    Proberen met stukje code:

const UserInfo = {
  id: 101,
  email: "pdahazzard@icloud.com",
  personalInfo: "Martin",
  IBAN: "NL03RAB1234512341",
  DriveLicense: true
};

for (const propt in UserInfo) {
  console.log(propt + ": " + UserInfo[propt]);
}

// Ja, dan ben je wel van een soort van aan het itereren.
