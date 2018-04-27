const express = require('express');
const app = expres();

app.use(express.static(_dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
	res.sendFile(path.join(_dirname + '/dist/index.html'));
}) 