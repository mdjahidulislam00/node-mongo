const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

const users = ['jahid', 'james', 'jony', 'jahidul islam', 'kusaer']

app.use(cors())
app.use(bodyParser.json())

// get method
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const userName = users[userId];
     res.send({userId, userName})
})

// Post method
app.post('/postUser/', (req, res) =>{
    const user = req.body;
    user.id = '1';
    res.send(user)
    console.log('get data from client',req.body)
})

app.listen(3000, () => console.log('running on port 3000'))