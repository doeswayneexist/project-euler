//var to store the highest palindrom
var currentPal = 0;

//check to see if it is a palindrom
function isPal (someNum) {
	
	//convert the number to a string
	var numString = someNum.toString();

	//get the length of the string
	var numLength = numString.length;

	//check the first and last chars of the string for identity
	for (var a = 0, b = numLength-1; a <= b; a++, b--) {

		//stop the loop if the numbers are not equal
		if(numString[a] != numString[b]) return false;
	}

	return true;
}

//produce every product of three digit numbers
for (var i=100; i<=999; i++) {

	for (j=100; j<=999; j++) {

		if(isPal(i*j) && currentPal < i*j) currentPal = i*j;
		//alert(testNum);
	}
	
}

alert(currentPal);
