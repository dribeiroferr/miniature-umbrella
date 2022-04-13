import { createConnection } from "typeorm";
import "reflect-metadata";

createConnection().then(() => {
    console.log("📦 Successfully connected to database !")
}).catch(error => console.log(`🐞  aah, a bug ! Error message: ${error} !`));