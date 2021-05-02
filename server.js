import 'dotenv/config';

const express = require('express')
import cors from 'cors';

const app = express();
const router = express.Router()
const port = process.env.APP_PORT || 3000;


// Enable CORS HTTP headers
app.use(cors());

// Setting Routes
const v1_routes = require('./api/routes/v1')(router, {});
app.use('/v1', v1_routes)

// Default Route
app.get('/', (req, res) => {
    res.status(200);
    res.send("Api Server is Up!");
});

// Start Listening
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});