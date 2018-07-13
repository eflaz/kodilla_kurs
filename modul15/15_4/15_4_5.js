const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = data;
console.log(`firstname: ${firstname}, lastname: ${lastname}`);