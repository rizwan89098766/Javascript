let num1 = Number(prompt("Enter a number")); 
let operator = prompt("Enter an operator (+ , - , * , /)");
let num2 = Number(prompt("Enter another number"));

if (operator == "+"){
    console.log(`The result of ${num1} + ${num2} is: ${num1 + num2}`);
} 
else if (operator == "-"){
    console.log(`${num1} - ${num2} = ${ num1 - num2}`);
} 
else if (operator == "*"){
    console.log(`${num1} * ${num2} = ${ num1 * num2}`);
}
else if (operator == "/"){
    console.log(`${num1} / ${num2} = ${ num1 / num2}`);
} 
else{
    console.log("Invalid Number")
}
