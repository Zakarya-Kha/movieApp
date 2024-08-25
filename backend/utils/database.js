import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});


const dataBaseConnection = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
}

export default dataBaseConnection;
