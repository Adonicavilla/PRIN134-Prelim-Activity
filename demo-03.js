// let numbers = ['12,7,5, 20, 33, 42, 19, 8, 10'];
// let EvenNumber = [];
// let OddNumber = [];

// numbers.forEach(number=>{
//     if(numbers % 2 === 0){
//         EvenNumber.push(numbers);
//     } else{
//         OddNumber.push(numbers);
//     }
// });

// console.log("Number:", numbers)
// console .log("Even Number:", EvenNumber, "| Count", EvenNumber.length)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let oddNumbers = [];

numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }
});


// console.log("Number:", numbers)
console.log('Even numbers:', evenNumbers, evenNumbers.length);
console.log("Odd numbers:", oddNumbers);
// console.log("Number:", numbers);
// console .log("Even Number:", evenNumber, "| Count", evenNumber.length);