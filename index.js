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

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(err) {
	console.log('app is listening to port: 3000');
});