// Get DOM elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Helper function to check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Event listener for the button click
checkBtn.addEventListener("click", () => {
  const userInput = textInput.value.trim();

  if (userInput === "") {
    alert("Please input a value");
    return;
  }

  const isPalindromeCheck = isPalindrome(userInput);

  if (isPalindromeCheck) {
    resultDiv.textContent = `${userInput} is a palindrome`;
  } else {
    resultDiv.textContent = `${userInput} is not a palindrome`;
  }
});

