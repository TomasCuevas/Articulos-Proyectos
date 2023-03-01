import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import calculadoraRoute from "./routes/calculadora.routes";

dotenv.config();

const app = express();

//* middleware *//
app.use(express.json());
app.use(cors({ origin: "*" }));

//* routes *//
app.use("/calculadora", calculadoraRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server iniciado en el puerto ${process.env.PORT}`);
});
