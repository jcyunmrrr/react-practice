const multiplier = {
    numbers: [1, 3, 5, 7, 9], 
    multiplyBy: 4, 
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());