function printNumber (number) {
    if (number >= 0) {
     console.log(number);
     number--;
     printNumber(number);
    }
}
printNumber(10);
