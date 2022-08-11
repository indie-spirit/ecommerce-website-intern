import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './src/routes/index.js';

dotenv.config();

let app = express();
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Database Connected");
});

app.use(json());
app.use('/', router);

let server = app.listen(process.env.PORT, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at 8080")
})
