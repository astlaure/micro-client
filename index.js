const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('/api/client', (req, res) => {
    res.json({
        name: 'Dan Abramov'
    })
});

app.listen(3001, () => {
    console.log('server started on port 3001.');
});