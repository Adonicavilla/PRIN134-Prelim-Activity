
let text = "Hello World";
let updatedText = "";
let changedLetters = "";

for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        changedLetters += text[i] + ", ";
        updatedText += "*"
    } else {
        updatedText += text[i]; 
    }
}


changedLetters = changedLetters.slice(0, -2);

console.log("Input String:", text);
console.log("Updated text:", updatedText);
console.log("Changed letters:", changedLetters);