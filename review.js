const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 3, 4, 7, 8];

const union = [...new Set([...arr1, ...arr2])];
console.log(union);
// =>[1, 2, 3, 4, 5, 6, 7, 8]
