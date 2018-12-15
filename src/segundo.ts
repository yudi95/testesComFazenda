export const isPythagoras = (catA: number, catB: number, hip: number): boolean => ( catA ^ 2 ) + (catB ^ 2) === ( hip ^ 2);

console.log(isPythagoras(2, 4, 5));