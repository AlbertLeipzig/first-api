// ZIEL : DATEN LIEFERN

// express import

import express from "express";
import { customersData } from "./customersData.js";
// neues app mit express anlegen

const app = express();

// app (server | API) rufen

app.get("/", (request, response) => {
  response.send(customersData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
