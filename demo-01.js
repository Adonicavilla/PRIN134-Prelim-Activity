
let firstName = 'Nica';
let lastName = 'Villa';
let gender = 'Female';


let salutation = gender === 'Male' ? 'Mr.' : 'Ms.';
salutation = salutation.toUpperCase();
let welcomeMessage = `Hello, ${salutation} ${firstName} ${lastName}! Welcome!`;

console.log(welcomeMessage);
