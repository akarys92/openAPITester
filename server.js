/**
 * An app for recommending concerts to Spotify users based on their listening habits
 */

// External imports
var express = require('express');
var bodyParser = require('body-parser'); 
var router = express.Router();

// Create an express app
var app = express();
app.use(bodyParser.json());

// Routes 
router.post('/', (req, res) =>{
    var body = req.body;
    console.log(body);
    res.send({"message": body});
});

router.get('/', (req, res) =>{
    res.send({"message": "You GOT me!"});
});

router.post('/code', (req, res) => {
    console.log(req.body);
    var error = req.body.error;
    res.status(error);
    res.send();
});

app.use('/test', router);

app.use(express.static(__dirname + '/public'));

/**************************************************************** */
var port = process.env.ENVKEY ? process.env.PORT : 8888;
console.log('Listening on 8888');
app.listen(port);