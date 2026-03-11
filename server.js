import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import route from "./router/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(PORT, () => {
  console.log(`Rodando na porta http://localhost:${PORT}`);
});