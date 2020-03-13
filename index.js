const fs = require('fs');

const env = require('./config/prod.env');

Object.keys(env).forEach((key) => {
  if (!process.env[key]) {
    process.env[key] = JSON.parse(env[key]);
  }
});

const https = require('https');
const express = require('express');

const app = express();

require('./server')(app, process.env.SERVE_V4);

const port = parseInt(process.env.PORT || 8080, 10);

const httpsOptions = {
  cert: fs.readFileSync('../ssl/mymarkdown_io.crt'),
  ca: fs.readFileSync('../ssl/mymarkdown_io.ca-bundle'),
  key: fs.readFileSync('../ssl/mymarkdown_io.key'),
};

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(port, null, () => {
  console.log(`HTTPS server started: https://localhost:${port}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  httpServer.close(() => {
    process.exit(0);
  });
});
