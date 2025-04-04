document.querySelector("#headCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#headCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#headCircle").addEventListener("click", headInfo);

function headHighlight() {
  console.log("headHighlight");
  document.querySelector("#headCircle").style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  document.querySelector("#headCircle").style.fill = "#f00";
}

function headInfo() {
  console.log("headInfo");
  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
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