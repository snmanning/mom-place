const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const server = express();

server.use(axios);

//environment
dotenv.config();

// passport configuration and initialization


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


//404 handler


//on stage
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});
