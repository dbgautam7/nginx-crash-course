const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

const appName = process.env.APP_NAME || 'My App';

app.use('/imgs', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
