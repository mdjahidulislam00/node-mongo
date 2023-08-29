const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome To Node journey')
})

app.listen(4500, () => console.log('running on port 3000'))