var fs = require('fs');
var fileName = 'fileslist.txt';
fs.writeFile(fileName, '', 'utf-8', function(err) {
		if (err) throw err; 
		console.log('utworzono plik');
	}
);

fs.readdir('./teksty', 'utf-8', function(err, files) {

	for (var i = 0; i < files.length; i++) {
		fs.appendFile(fileName, files[i] + '\r\n', function(err) {
			if (err) throw err;
		});
	}
});