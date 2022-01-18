const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routers');

const app = express();

const MONGODB_URI = '';
const PORT = 3000;

const main = () => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected ...'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api', routers);

  app.listen(PORT);
};

main();