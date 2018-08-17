const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();

server.use(axios);

//port
const port  = precess.env.PORT || 5005;

//environment


//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//errorhandling


//404 handler


//on stage
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});
