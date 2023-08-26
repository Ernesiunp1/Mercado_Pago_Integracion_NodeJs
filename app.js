require("dotenv").config();
const express = require("express");
const cors = require("cors");

const RouterPref = require("./routes/preferencia.routes");
const RouterBacksUrls = require("./routes/backsurls.routes");
const RouterNotification = require("./routes/notificationUrl.routes");

const app = express();
const PORT = process.env.PORT || 3000;

//  Habilitacion de cors
app.use(cors());

// Parseo de inforacion recibida
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", RouterPref);
app.use("/api", RouterBacksUrls);
app.use("/api", RouterNotification);

// Configuracion de escucha de express
app.listen(PORT, () => {
  console.log("ESCUCHANDO EN EL PUERTO: " + PORT);
});
