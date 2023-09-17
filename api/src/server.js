const express = require('express');
const cors = require('cors');
const { db } = require('./database/database');
const { router } = require('./routes/routes');

db.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Error connecting to the database: ', err);
  });

const app = express();

app.use(cors())
app.use(express.json());

app.use(router);

module.exports = {
  app,
}