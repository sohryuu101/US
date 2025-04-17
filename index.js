const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use('/website', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // redirect to /website
    res.send({
        message: 'Hello from MY ORIGIN SERVER!',
        hello: 'this is updated content to see if CDN changed',
        time: new Date().toISOString(),
        status: 200
    });
});

// 404 handler should be after all routes
app.use(function(req, res) {
  res.status(404);
  // Choose either JSON or HTML response, not both
  return res.send({
    message: 'Resource not found',
    method: req.method,
    url: req.url,
    time: new Date().toISOString(),
    status: 404
  });
  
  // Alternative HTML response (uncomment if preferred)
  // return res.send(`<h1>404 Error: Resource not found</h1>
  // <p>Requested URL: ${req.url}</p>
  // <p>Method: ${req.method}</p>
  // <p>Time: ${new Date().toISOString()}</p>
  // <p>Status: 404</p>`);
});

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
