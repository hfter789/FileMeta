var express = require('express');
var multer  = require('multer');
var _ = require('lodash');
var upload = multer();
var app = express();

app.use(express.static('public'));

app.post('/filemeta', upload.any(), function (req, res, next) {
	res.json({
		filesize: _.get(req, 'files.0.size', 0)
	});
});

app.listen(3000, function(err) {
	console.log('app is listening to port: 3000');
});