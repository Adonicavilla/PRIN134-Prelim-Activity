function calculator(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtraction') {
        return a - b;
    } else if (operation === 'multiplication') {
        return a * b;
    } else if (operation === 'division') {
        if (b === 0) {
            return 'Error: Division by zero!';
        }
        return a / b;
    } else {
        return 'Error: Invalid operation!';
    }
} 


console.log("Addition 10 + 5:", calculator(10, 5, 'add'));
console.log("Subtraction 10 - 5:", calculator(10, 5, 'subtraction'));
console.log("Multiplication 10 * 5:", calculator(10, 5, 'multiplication'));
console.log("Division 10 / 5:", calculator(10, 5, 'division'));
console.log("Division by zero 10 / 0:", calculator(10, 0, 'division'));