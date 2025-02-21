const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send({
        message: 'Hello from US Server!',
        time: new Date().toISOString(),
        status: 200
    });
});