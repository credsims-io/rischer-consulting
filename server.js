const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/rischerconsulting.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/rischerconsulting.com/fullchain.pem')
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://rischerconsulting.com');
  });
});