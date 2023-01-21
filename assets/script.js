    // Get references to the input element and the char-count element
    const input = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const remaining = document.getElementById('remaining');
    var maxLength = 100;

    // Listen for changes to the input element
    input.addEventListener('input', () => {
      // Update the char-count element with the current number of characters
      charCount.innerText = "Characters: " + input.value.length;
      remaining.innerText = "Remaining: " + (maxLength - input.value.length);

      // Save the current character count to local storage
      localStorage.setItem('charCount', input.value.length);
    });

    // When the page loads, check if there is a saved character count in local storage
    if (localStorage.getItem('charCount')) {
      // If there is, update the input and char-count elements with the saved value
      input.value = localStorage.getItem('charCount');
charCount.innerText = "Characters: " + input.value.length;
remaining.innerText = "Remaining: " + (maxLength - input.value.length);
}