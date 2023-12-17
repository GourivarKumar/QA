document.addEventListener("DOMContentLoaded", function () {
  const pomodoroTimers = document.querySelectorAll(".pomodoroTimer");
  const takeBreaks = document.getElementById("takeBreak");

  let pomodoroRealTime = Math.floor(Date.now() / (60 * 1000));

  let countdownTime =
    localStorage.getItem("countdownTime") || pomodoroRealTime + 50;
  let isPomodoroSession = localStorage.getItem("isPomodoroSession") === "true";

  updateTimerDisplay();

  function updateTimerDisplay() {
    const color = isPomodoroSession ? "green" : "red";
    // console.log("new--", isPomodoroSession);

    pomodoroTimers.forEach((timer) => {
      if (countdownTime > pomodoroRealTime) {
        timer.textContent = `${
          countdownTime - pomodoroRealTime
        } minutes remaining`;
      } else {
        toggleSession();
        // timer.style.color = color;
      }
      timer.style.color = color;
    });
  }

  // Function to toggle between Pomodoro and break sessions
  function toggleSession() {
    isPomodoroSession = !isPomodoroSession; // Toggle the session type
    countdownTime = isPomodoroSession
      ? pomodoroRealTime + 50
      : pomodoroRealTime + 15; // Set the initial time based on the new session type
    if (!isPomodoroSession) {
      takeBreaks.textContent = "Take Break";
      takeBreaks.style.color = "red";
    } else {
      takeBreaks.textContent = "";
      takeBreaks.style.color = "";
    }
    saveToLocalStorage();
    updateTimerDisplay(); // Update the timer display
    // console.log(isPomodoroSession);
  }
  // Function to save current state to localStorage
  function saveToLocalStorage() {
    localStorage.setItem("countdownTime", countdownTime);
    localStorage.setItem("isPomodoroSession", isPomodoroSession.toString());
  }
  // Set initial display
  updateTimerDisplay();

  pomodoroTimers.forEach((timer) => {
    timer.addEventListener("click", function () {
      toggleSession();
      // Add additional functionality if needed when the span is clicked
    });
  });
  if (!isPomodoroSession) {
    takeBreaks.textContent = "Take Break";
    takeBreaks.style.color = "red";
  } else {
    takeBreaks.textContent = "";
    takeBreaks.style.color = "";
  }
  // Update the timer every minute
  //   console.log(60000 - (Date.now() % 60000));
  // Initial delay of 10 minutes
  setTimeout(function () {
    // Code to execute every 1 minute after the initial delay
    pomodoroRealTime = Math.floor(Date.now() / (60 * 1000));
    saveToLocalStorage();
    updateTimerDisplay();
    setInterval(function () {
      pomodoroRealTime = Math.floor(Date.now() / (60 * 1000));
      saveToLocalStorage();
      updateTimerDisplay();
      updateTimerDisplay();
    }, 60000);
  }, 60000 - (Date.now() % 60000));
});
