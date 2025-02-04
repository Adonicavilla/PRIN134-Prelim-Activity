let numbers = [12,7,5, 20, 33, 42, 19, 8, 10];
let EvenNumber = [];
let OddNumber = [];

numbers.forEach(number => {
    if(number % 2 === 0){
        EvenNumber.push(number);
    } else{
        OddNumber.push(number);
    }
});

console.log("Number:", numbers.join());
console .log("Even Number:", EvenNumber.join(), "| Count", EvenNumber.length);
console .log("Odd Number:", OddNumber.join(),"| Count", OddNumber.length);
