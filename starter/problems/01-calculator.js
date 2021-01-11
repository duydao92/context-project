/***********************************************************************
Below we've declared a Calculator constructor function that has a property
representing the total - which is currently set to 0.

Write four methods on the Calculator's prototype named:
1. add(num) - add the num arg to the total
2. subtract(num) - subtract the num arg from the total
3. divide(num) - divide the total by the num arg
4. multiply(num) - multiply the total by the num arg

Each of the above methods should return the total.

Examples:

***********************************************************************/

function Calculator() {
	this.total = 0;
}

Calculator.prototype.add = function(num) {
	this.total += num;
	return this.total;
}
Calculator.prototype.subtract = function(num) {
	this.total -= num;
	return this.total;
}
Calculator.prototype.multiply = function(num) {
	this.total *= num;
	return this.total;
}
Calculator.prototype.divide = function(num) {
	this.total /= num;
	return this.total;
}


let calculator = new Calculator();
console.log(calculator.add(50)); // => returns 50
console.log(calculator.subtract(35)); // => returns 15
console.log(calculator.multiply(10)); // => returns 150
console.log(calculator.divide(5)); // => returns 30
console.log(calculator.total) // => returns 30
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = Calculator;
