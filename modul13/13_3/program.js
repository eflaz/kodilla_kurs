process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input !== null){
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				console.log('Quitting app!');
				process.exit();
				break;
			case '/version':
				console.log('Wersja node: ' + process.version);
				break;
			default:
				console.log('Wrong instruction');
		}
	}
});