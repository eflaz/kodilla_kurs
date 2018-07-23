const sum = (accumulator, currentValue) => accumulator + currentValue;
const average = (...args) => (args.reduce(sum) / args.length).toFixed(2);
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`Average of grades: ${average(...grades)}`);