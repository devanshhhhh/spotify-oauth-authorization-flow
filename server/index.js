const express=require("express");
const dotenv=require("dotenv");
dotenv.config();

const app=express();
const routes=require("./routes/auth.js");

app.use(express.json());
app.use("/app", routes);

const PORT=process.env.PORT;
app.listen(PORT);
