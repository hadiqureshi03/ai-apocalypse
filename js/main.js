// document.querySelector("#headCircle").addEventListener("mouseover", headHighlight);
// document.querySelector("#headCircle").addEventListener("mouseout", headUnHighlight);
// document.querySelector("#headCircle").addEventListener("click", headInfo);

// function headHighlight() {
//   console.log("headHighlight");
//   document.querySelector("#headCircle").style.fill = "#fff";
// }
// function headUnHighlight() {
//   console.log("headUnHighlight");
//   document.querySelector("#headCircle").style.fill = "#f00";
// }

// function headInfo() {
//   console.log("headInfo");
//   document.querySelector(".info-text > h2").textContent = "Hovedet!";
//   document.querySelector(".info-text > article > p").textContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// }

function submitForm(form) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);
  console.log("🚀 ~ submitForm ~ formData:", formData)

  // Create an object to hold the form data
  const data = {};
  formData.forEach((value, key) => {
    console.log("🚀 ~ formData.forEach ~ key:", key, value)
    data[key] = value;
  });

  // Log the form data to the console (or send it to a server)
  console.log(data);

  // Display the summary in the summary section
  const summaryContent = document.querySelector('#summary-content');
  summaryContent.innerHTML = ''; // Clear previous content
  for (const [key, value] of Object.entries(data)) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    summaryContent.appendChild(p);
  }

  return false; // Prevent default form submission
}

//**** TOGGLE DARK / LIGHT MODE ****/ 

// Get DOM elements
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize dark mode state (default to light mode for safety)
let isDarkMode = false;

// Check for system preference (if available in this environment)
try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode = true;
        updateUI();
    }
} catch (error) {
    // If the system preference check fails, just continue with default
    console.log("Unable to check system preference");
}
// Update UI elements based on dark mode state
function updateUI() {
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.setAttribute('aria-pressed', isDarkMode.toString());
}

// Initialize UI based on current state
updateUI();

// Toggle dark mode on click
darkModeToggle.addEventListener('click', toggleDarkMode);

// Support keyboard accessibility
darkModeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDarkMode();
    }
});

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    updateUI();
}
