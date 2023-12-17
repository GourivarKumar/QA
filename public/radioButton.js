// Function to set the default radio button
function setDefaultRadioButton() {
  var normalRadioButton = document.querySelector(
    'input[name="questionSet"][value="normal"]'
  );
  normalRadioButton.checked = true;
}

// Add event listener for page load
document.addEventListener("DOMContentLoaded", function () {
  // Set the default radio button on page load
  setDefaultRadioButton();

  // Function to handle radio button change and store the selected value
  function handleRadioButtonChange() {
    var selectedRadio = document.querySelector(
      'input[name="questionSet"]:checked'
    ).value;
    localStorage.setItem("selectedQuestionSet", selectedRadio);
  }

  // Add event listener for radio button change
  document.getElementsByName("questionSet").forEach(function (radio) {
    radio.addEventListener("change", handleRadioButtonChange);
  });

  // Optionally, you can uncomment the following line if you want to store the default value on the first load.
  localStorage.setItem("selectedQuestionSet", "normal");
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleSidebarButton = document.getElementById("close-sidebar");
  const mainPageK = document.getElementById("mainPage");
  const mainHrK = document.getElementById("mainHr");
  const mainH1s = document.getElementById("mainH1");
  // Initial state of the sidebar (adjust as needed)
  let sidebarOpen = false;

  toggleSidebarButton.addEventListener("click", function () {
    // Toggle the state of the sidebar
    sidebarOpen = !sidebarOpen;

    // Update the sidebar position based on the state
    sidebar.style.left = sidebarOpen ? "0" : "-250px";
    // toggleSidebarButton.style.left = sidebarOpen ? '0' : '-250px';
    toggleSidebarButton.style.marginLeft = sidebarOpen ? "275px" : "25px";
    mainPageK.style.marginLeft = sidebarOpen ? "275px" : "30px";
    mainHrK.style.marginLeft = sidebarOpen ? "275px" : "30px";
    mainH1s.style.marginLeft = sidebarOpen ? "275px" : "30px";
  });

  // Add event listener to radio buttons to close sidebar when a selection is made
  // const radioButtons = document.querySelectorAll('input[name="questionSet"]');
  // radioButtons.forEach(function (radioButton) {
  //   radioButton.addEventListener('change', function () {
  //     // Close sidebar when a radio button is selected
  //     sidebar.style.left = '-250px';
  //     toggleSidebarButton.style.marginLeft = '25px';
  //     mainPageK.style.marginLeft = '30px';
  //   });
  // });
});
