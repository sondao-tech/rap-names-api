const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  songoku: {
    age: 120,
    location: "Japanese",
    realName: "Kakalot",
  },
  tom: {
    age: 88,
    location: "NewYork",
    realName: "God of Mercy",
  },
  jerry: {
    age: 88,
    locationocation: "NewYork",
    realName: "God of Running",
  },
  unknow: {
    age: "Unknow",
    locationocation: "Unknow",
    realName: "Unknow",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const characterName = request.params.name.toLowerCase();
  if (rappers[characterName]) {
    response.json(rappers[characterName]);
  } else {
    response.json(rappers["unknow"]);
  }
});

app.listen(PORT, () => {
  console.log(`Looking your port ==> ${PORT}`);
});
