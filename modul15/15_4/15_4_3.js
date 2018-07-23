const sum = (accumulator, currentValue) => accumulator + currentValue;
const average = (...args) => (args.reduce(sum) / args.length).toFixed(2);

console.log(`Average: ${average(1, 3, 6, 6)}`);