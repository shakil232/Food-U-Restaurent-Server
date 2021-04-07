const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Object = require('mongodb').ObjectID;
require('dotenv').config();
const port =  process.env.PORT || 4100;


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})