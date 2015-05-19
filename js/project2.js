for (firstNumber = secondNumber = 1, fibSum = totalSum = 0, i = fibSum; i < 4000000; firstNumber = secondNumber, secondNumber = fibSum, i = fibSum) {
    fibSum = firstNumber + secondNumber;
    if (fibSum % 2 == 0 && fibSum < 4000000) totalSum = totalSum + fibSum;}
alert(totalSum);