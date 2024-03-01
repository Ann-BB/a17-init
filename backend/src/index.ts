import express from "express";
import mongoose, { Mongoose } from "mongoose"
import router from "./routes/route";

const PORT = 4000;
const app = express();

const MONGO_URL = 'mongodb://127.0.0.1:27817'

mongoose
  .connect(MONGO_URL, {
    dbName: 'ng17-init',
  })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log('error: ', error)
  });


app.use('/', router)

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on http:://localhost:${PORT}`)
})