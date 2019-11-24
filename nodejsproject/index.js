const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Why would you even look at a site like this?');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
