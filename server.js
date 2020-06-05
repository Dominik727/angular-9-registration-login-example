const express = require('express');

const app = express();

app.use(express.static('./dist/angular-9-registration-login-example'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-9-registration-login-example/'}),
);

app.listen(process.env.PORT || 8080);