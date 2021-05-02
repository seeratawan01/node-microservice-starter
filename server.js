import 'dotenv/config';

const express = require('express')
const routes = require('./api/routes');
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;


// Enable CORS HTTP headers
app.use(cors());

// Setting Routes
routes(app);

// Start Listening
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});