const express = require("express");

const app = express();
app.use(express.json());


app.use("/api/books",(req,res) => {
    return res.status(200).json({});
});