import app from "./app";
import dotenv from "dotenv";
import db from "config";

dotenv.config();

app.listen(process.env.PORT || "5000", () => {
    console.log("Server is running in port 5000!");
});

db //show that database is working in node!
