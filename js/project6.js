//global variables
var sumOfSquares = 0;
var squareOfSums = 0;

//find the sum of the squares of the first 100 natural numbers
//find the sum of the first 100 natural numbers
for(var i = 1; i <= 100; i++) {
	sumOfSquares += i*i;
	squareOfSums += i;
}

//square the sum of the first 100 natural numbers
squareOfSums *= squareOfSums;

// test alerts
// alert(sumOfSquares);
// alert(squareOfSums);

//output the difference
alert(squareOfSums - sumOfSquares);

