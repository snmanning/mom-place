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

//port
const port = process.env.PORT || 3001;

// routes
const userRouter = require('./router/users');

server.get('/api/qotd', (request, response) => {
    const favqUrl = 'https://favqs.com/';
    try {
    axios.get(favqUrl)
         .then(quote => {
             response.status(200).json(quote.data)
         });
        } catch(error) {
             response.status(500).json({
                 msg: "Today's quote is not available at this time."
             });
};

//middleware
server.use(helmet());
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static('client'));

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
})