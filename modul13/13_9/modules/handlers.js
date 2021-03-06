var fs = require('fs');
var formidable = require('formidable');
var imageFile = 'test.png';


exports.upload = function(request, response) {
	console.log("Rozpoczynam obsługę żądania upload.");
	var form = new formidable.IncomingForm();
	form.parse(request, function(err, fields, files) {
		// fs.renameSync(files.upload.path, "test.png");
		imageFile = files.upload.name;
		fs.copyFile(files.upload.path, files.upload.name, function(err) {
			if (err) throw err;
			fs.readFile('templates/upload.html', function(err, html) {
				response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
				response.write(html);
				response.end();		
			});
		});
	});
	// response.write("Rozpoczynam upload!");
	// response.end();
}

exports.welcome = function(request, response) {
	console.log("Rozpoczynam obsługę żądania welcome.");
	fs.readFile('templates/start.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
	// response.write("Witaj na stronie startowej!");
	// response.end();
}

exports.error = function(request, response) {
	console.log("Nie wiem co robić.");
	response.write("404 :( ");
	response.end();
}
exports.show = function(request, response) {
	fs.readFile(imageFile, "binary", function(err, file) {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	});
}

exports.style = function(request, response) {
	fs.readFile("templates/style.css", function(err, file) {
		response.writeHead(200, {"Content-Type": "text/css"});
		response.write(file);
		response.end();
	});
}