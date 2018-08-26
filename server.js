const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const server = express();
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/errorHandler');
const passport = require('passport');
const localStrategy = require('../strategy/local');



server.use(axios);

//environment
dotenv.config();

// passport configuration and initialization
passport.use(localStrategy);
server.use(passport.initialize());

// connect database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

// routes


//port
const port = process.env.PORT || 6000;

//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// routers


//errorhandling
server.use(errorHandler);

//404 handler
server.use(notFoundHandler);

//on stage
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});
