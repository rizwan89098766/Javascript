// JavaScript Logic for US Phone Number Validator
document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

function validatePhoneNumber() {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

  // Alert if input is empty
  if (!userInput) {
    alert("Please provide a phone number");
    return;
  }

  // Define regex patterns for valid US phone numbers
  const validPatterns = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/, // e.g., 555-555-5555 or 1 555 555 5555
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/, // e.g., (555) 555-5555 or 1 (555) 555-5555
    /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/        // e.g., 1(555)555-5555
  ];

  // Validate input
  const isValid = validPatterns.some(pattern => pattern.test(userInput)) &&
                  (!userInput.startsWith('1') || /^1/.test(userInput));

  // Show result
  resultsDiv.textContent = isValid
    ? `Valid US number: ${userInput}`
    : `Invalid US number: ${userInput}`;
}

function clearResults() {
  document.getElementById('results-div').textContent = '';
}