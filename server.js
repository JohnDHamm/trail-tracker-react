'use strict';

const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

//middlewares
app.use(express.static(__dirname));

// API
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
