﻿const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/fullchain.pem')
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);

    }).listen(80, err => {
        if (err) throw err;
        console.log('> Ready on https://localhost:443');
    });
});