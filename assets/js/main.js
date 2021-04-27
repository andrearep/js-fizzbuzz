var totale = 100;
for (var i = 0; i < totale; i++) {
    numero = i + 1;
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 == 0) {
        console.log("Fizz");
    } else if (numero % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}