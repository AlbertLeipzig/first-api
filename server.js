// ZIEL : DATEN LIEFERN

// express import

import express from "express";

// neues app mit express anlegen

const app = express();

// app (server | API) rufen

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});