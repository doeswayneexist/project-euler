var numberCap, firstNumber, secondNumber, fibSum, totalSum;
numberCap = 4000000;
firstNumber = secondNumber = 1;
fibSum = totalSum = 0;
for (var i = fibSum; i < numberCap; i = fibSum) {
    fibSum = firstNumber + secondNumber;
    if (fibSum % 2 == 0 && fibSum < numberCap) totalSum = totalSum + fibSum;
    firstNumber = secondNumber;
    secondNumber = fibSum;
}
alert(totalSum);
