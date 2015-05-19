var numberCap = 4000000;
var firstNumber = 1;
var secondNumber = 1;
var fibSum = 0;
var totalSum = 0;

var numberCap, firstNumber, secondNumber, fibSum, totalSum;
numberCap = 4000000;
firstNumber = secondNumber = 1;
fibSum = totalSum = 0;

//generate fibonacci sequence
for (var i = fibSum; i < numberCap; i = fibSum) {

    //get fib numbers
    fibSum = firstNumber + secondNumber;

    //check if even 
    if (fibSum % 2 == 0 && fibSum < numberCap) totalSum = totalSum + fibSum;

    //set first to second
    firstNumber = secondNumber;

    //set new sum to second
    secondNumber = fibSum;

}


alert(totalSum);
