// Get the button element from the HTML file by ID
const getAdviceButton = document.getElementById("button");

// Define a function that fetches advice from an API
const fetchAdvice = async () => {
  // Make a GET request to the API and wait for the response
  const res = await fetch("https://api.adviceslip.com/advice");

  // Extract the JSON data from the response and wait for it
  const data = await res.json();

  // Log the data to the console
  console.log(data);

  // Update the advice displayed on the webpage
  document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById("text").innerHTML = `"${data.slip.advice}"`;
};

// Call the fetchAdvice function when the window is loaded
window.addEventListener("load", fetchAdvice);

// Add an event listener to the button that calls the fetchAdvice function when clicked
getAdviceButton.addEventListener("click", fetchAdvice);