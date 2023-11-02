// Initialize the countToHours, countToMinutes, and countToSeconds variables
let countToHours = 24; // Set an initial value for hours
let countToMinutes = 0; // Set an initial value for minutes
let countToSeconds = 0; // Set an initial value for seconds
let countToDate; // Declare a variable to store the target date and time

var backgroundMusic = new Audio("clock_01-25293.mp3");


// Function to update the countToDate variable based on input values
function updateCountToDate() {
  const currentDate = new Date(); // Get the current date and time
  // Calculate the target date and time by adding the values of hours, minutes, and seconds
  countToDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours() + countToHours,
    currentDate.getMinutes() + countToMinutes,
    currentDate.getSeconds() + countToSeconds
  );
}

// Event listener for the "Update Timer" button
document.getElementById("updateTimer").addEventListener("click", () => {
  // Get the input values for hours, minutes, and seconds, or use 0 if input is empty
  const hours = parseInt(document.getElementById("hourInput").value) || 0;
  const minutes = parseInt(document.getElementById("minuteInput").value) || 0;
  const seconds = parseInt(document.getElementById("secondInput").value) || 0;

  // Update the countToHours, countToMinutes, and countToSeconds variables
  countToHours = hours;
  countToMinutes = minutes;
  countToSeconds = seconds;

  // Call the function to update the countToDate variable
  updateCountToDate();
});

// Initial call to set the countToDate based on the initial values (0)
updateCountToDate();

// Set up an interval to update the timer display every 250 milliseconds
setInterval(() => {
  const currentDate = new Date(); // Get the current date and time
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000); // Calculate the time remaining in seconds

  // Call the function to update the timer display
  flipAllCards(timeBetweenDates);

  // Store the previous time between dates (not defined in the provided code)
  previousTimeBetweenDates = timeBetweenDates; // Note: This variable should be defined somewhere in your code
}, 250);

// Function to update the timer display
function flipAllCards(time) {
  const seconds = time % 60; // Calculate remaining seconds
  const minutes = Math.floor(time / 60) % 60; // Calculate remaining minutes
  const hours = Math.floor(time / 3600); // Calculate remaining hours

  // Update the display for hours, minutes, and seconds using the flip function
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

// Function to animate the flipping of numbers in the timer display
function flip(flipCard, newNumber) {
  // Get the top half of the flip card
  const topHalf = flipCard.querySelector(".top");
  // Get the starting number from the top half
  const startNumber = parseInt(topHalf.textContent);
  // If the new number is the same as the starting number, do nothing
  if (newNumber === startNumber) return;

  // Get the bottom half of the flip card
  const bottomHalf = flipCard.querySelector(".bottom");
  // Create a top flip element
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  // Create a bottom flip element
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  // Update the display of the top half, bottom half, top flip, and bottom flip
  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  // Add event listeners to handle animations
  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });

  // Append the top flip and bottom flip to the flip card
  flipCard.append(topFlip, bottomFlip);
}

// Event listener for updating the timer value from a single input
document.getElementById("updateTimer").addEventListener("click", () => {
  const newTimerValue = parseInt(document.getElementById("newTimerValue").value);
  if (!isNaN(newTimerValue)) {
    countToDate = new Date().setSeconds(new Date().getSeconds() + newTimerValue);
  }
});
