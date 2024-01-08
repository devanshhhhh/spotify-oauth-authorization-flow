const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();

const app=express();
const routes=require("./routes/auth.js");

app.use(express.json());
app.use("/app", routes);

app.use(cors());

const PORT=process.env.PORT;
app.listen(PORT);
