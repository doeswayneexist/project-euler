//prime check
var newPrime = 0;

function isPrime(num) {
	if(num == 1) return false;
	for (var i = num-1; i > 1; i--) {
		if (num % i == 0) return false
	}
	return true;
}

for (var i = 1, j = 0; j < 10001; i++) {
	if(isPrime(i)) {
		j++
		newPrime = i;
		
	}
}

alert(newPrime);
