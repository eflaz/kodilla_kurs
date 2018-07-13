const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum +=arg);
	return Math.round(sum / args.length);
}
console.log(`Average: ${average(1, 3, 6, 6)}`);