let score = prompt("Enter your score");
console.log ("Score : " + score)

if (score >= 90 && score <= 100 ){
    console.log("Grade: A");
}
else if (score >= 80 && score <= 89){
    console.log("Grade : B");
}
else if (score >= 70 && score <= 79){
    console.log("Grade : C");
}
else if (score >= 60 && score <= 69){
    console.log("Grade : D");
}
else if (score <= 59 && score >= 0){
    console.log("Grade : F");
}
else {
    console.log("Invalid Number")
}

