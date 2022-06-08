require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./connectDB/connect');
app.use(express.json());
const tutorialRuter = require('./routes/main')

app.use(cors())
app.use('/api', tutorialRuter);
app.options('*', cors());
const port = process.env.PORT || 5000;

const start = async () => {
  try {
      
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();