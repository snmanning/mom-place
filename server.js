const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = express();
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/errorHandler');
const passport = require('passport');
const localStrategy = require('./strategy/local');


server.use(axios);

//environment
dotenv.config();

// passport configuration and initialization
passport.use(localStrategy);
server.use(passport.initialize());

// connect database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });
// mongoose.set('useCreateIndexes', true);
// mongoose.set('useFindAndModify', false);

// routes
const userRouter = require('./router/users');

//port
const port = process.env.PORT || 6000;

//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// routers
server.use('/api', userRouter);

//errorhandling
server.use(errorHandler);

//404 handler
server.use(notFoundHandler);

//on stage
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});
