const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require("body-parser");

require('dotenv').config();

const middlewares = require('./middlewares/middlewares');
const api = require('./api');

const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: '*'
}));
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/data.routes')(app);

const db = require("./models");
const Role = db.role;


db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
