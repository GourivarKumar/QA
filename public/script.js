// let tableNameHTML = "question";
document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const mainHeadingNow = document.getElementById("mainHeading");
  const nextButton = document.getElementById("next-button");
  const tableLinks = document.querySelectorAll('a[id^="sqlTable"]');
  const radioButtons = document.getElementsByName("questionSet");
  const increaseButton = document.querySelector("[data-increase-hours]");
  const decreaseButton = document.querySelector("[data-decrease-hours]");

  // Get the radio buttons
  // const normalRadioButton = document.querySelector('input[value="normal"]').closest('label');;
  // const journalRadioButton = document.querySelector('input[value="journal"]').closest('label');;
  // console.log(tableNameHTML);

  let tableNameHTML = localStorage.getItem("tableNameHTML") || "questions";
  console.log(tableNameHTML);

  let currentSetName = localStorage.getItem("currentSetName"); // Default to normal questions
  if (mainHeadingNow) {
    mainHeadingNow.textContent = "Questions About the " + currentSetName;
  }

  let delayHours = 0; // Default delay
  let currentQuestions = [];
  let currentQuestionId;
  let delayHoursF = 0;
  let currentLevelx;
  let currentLevely;
  let lengthOfArray;
  let lengthOfCurrentArray;
  let leftTime;
  let tempLeftTime;

  // if (tableLinks) {
  tableLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      tableNameHTML = this.dataset.value;
      currentSetName = this.dataset.value1;
      let htmlFileName = this.href;
      // console.log(currentSetName);
      // console.log(tableNameHTML);
      // // console.log(htmlFileName);
      // console.log(tableNameHTML);
      // console.log(tableNameHTML);
      // console.log(tableNameHTML);
      saveToLocalStoragex();

      window.location.href = htmlFileName;
    });
  });
  // }
  function saveToLocalStoragex() {
    localStorage.setItem("tableNameHTML", tableNameHTML.toString());
    localStorage.setItem("currentSetName", currentSetName.toString());
  }

  function fetchQuestions(setName, setTableName) {
    console.log("++", setTableName);
    console.log("++", setName);
    fetch("/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        setName: setName,
        setTableName: setTableName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        currentQuestions = data;
        // console.log("****", currentQuestions.length);
        lengthOfArray = currentQuestions.length;
        displayQuestion();
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }

  // Function to get the current question ID
  function getCurrentQuestionId() {
    // console.log(currentQuestionId);
    return currentQuestionId;
  }
  function getCurrentLevelx() {
    // console.log(currentLevelx);
    return currentLevelx;
  }
  function getCurrentLevely() {
    // console.log(currentLevely);
    return currentLevely;
  }

  function getDelayHoursF() {
    // console.log(delayHoursF);
    if (delayHoursF === undefined) {
      delayHoursF = 0;
      return;
    }

    return delayHoursF;
  }

  function getRandomQuestion() {
    if (currentQuestions.length === 0) {
      if (leftTime >= 0) {
        return {
          message:
            "No more questions. Next question will be in " +
            leftTime +
            " minutes",
        };
      } else {
        return {
          message: "No more questions.",
        };
      }
    }

    const randomIndex = Math.floor(Math.random() * currentQuestions.length);
    const randomQuestion = currentQuestions[randomIndex];
    lengthOfCurrentArray = currentQuestions.length;

    // Remove the displayed question from the array
    currentQuestions.splice(randomIndex, 1);

    // Return an object with id, question_text, and delay_hour properties
    return {
      id: randomQuestion.id,
      question_text: randomQuestion.question_text,
      delay_hours: randomQuestion.delay_hours,
      levelx: randomQuestion.levelx,
      levely: randomQuestion.levely,
    };
  }

  function displayQuestion() {
    let currentTime = Math.ceil(Date.now() / (60 * 1000));
    console.log("---------------");
    console.log("ct", currentTime);
    // const timeSinceLastQuestion = currentTime - lastQuestionTimestamp;
    const randomQuestion = getRandomQuestion();
    currentQuestionId = randomQuestion.id;
    delayHoursF = randomQuestion.delay_hours;
    currentLevelx = randomQuestion.levelx;
    currentLevely = randomQuestion.levely;
    getDelayHoursF();
    console.log("dt", delayHoursF);
    console.log("ID", currentQuestionId);
    // console.log("array",lengthOfArray);
    // console.log("carray",lengthOfCurrentArray);

    leftTime = Math.ceil(delayHoursF - currentTime);
    console.log("Left Time", leftTime);
    if (lengthOfArray === lengthOfCurrentArray) {
      tempLeftTime = leftTime;
      // console.log("Left Time-1",leftTime);
      // console.log("Temp Left Time-1",tempLeftTime);
    }
    if (tempLeftTime < 0) {
      tempLeftTime = leftTime;
      // console.log("Left Time-2",leftTime);
      // console.log("Temp Left Time-2",tempLeftTime);
    }

    if (leftTime < 0 && tempLeftTime > 0) {
      leftTime = tempLeftTime;
      // console.log("Left Time-3",leftTime);
      // console.log("Temp Left Time-3",tempLeftTime);
    }
    if (leftTime > 0 && (tempLeftTime < leftTime || leftTime === 0)) {
      leftTime = tempLeftTime;
      // console.log("Left Time-4",leftTime);
      // console.log("Temp Left Time-4",tempLeftTime);
    }
    console.log("Left Time-5", leftTime);
    // console.log("Temp Left Time-5",tempLeftTime);
    console.log("---------------");

    if (delayHoursF <= currentTime) {
      // Check if it's a message (no more questions)
      if ("message" in randomQuestion) {
        questionContainer.textContent = randomQuestion.message;
      } else {
        // Display only the question_text
        questionContainer.textContent = randomQuestion.question_text;
      }
    } else {
      // Display a message indicating that it's not time to ask a new question yet
      // questionContainer.textContent = `You can ask a new question in ${Math.ceil((delayHours * 60 * 60 * 1000 - timeSinceLastQuestion) / (60 * 1000))} minutes.`;
      displayQuestion();
    }
  }

  function handleNextQuestion() {
    displayQuestion();

    if (currentQuestions.length === 0) {
      fetchQuestions(currentSetName, tableNameHTML);
      displayQuestion();
    }
  }
  if (nextButton) {
    nextButton.addEventListener("click", handleNextQuestion);
    // Event listener for right arrow key
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        handleNextQuestion();
      }
    });
  }

  // Event listener for radio button change
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      currentSetName = radioButton.value;
      mainHeadingNow.textContent = "Questions About the " + currentSetName;
      fetchQuestions(currentSetName, tableNameHTML);
      displayQuestion(); // Display a new question when switching sets
    });
  });

  if (increaseButton) {
    // Event listener for "Increase Delay" button
    increaseButton.addEventListener("click", function () {
      // Assuming you have a function to get the current questionId
      const questionId = getCurrentQuestionId();
      let currentTime = Date.now();
      let x = getCurrentLevelx();
      let y = getCurrentLevely();
      let temp;
      if (x == 0 && y == 0) {
        y = 1;
      }
      if (x > 0 || y > 0) {
        temp = x + y;
        x = y;
        y = temp;
      }
      // Make sure delayHours is declared and initialized before this point
      currentTime = currentTime / (60 * 1000);
      // console.log(currentTime);
      delayHours = currentTime + y; // Increase delay

      // Send a PUT request to update the delay on the server
      fetch(`/answer-question/${questionId}`, {
        method: "PUT", // Use PUT instead of POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          delayHours,
          questionId,
          x,
          y,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          console.log(data);
        })
        .catch((error) => {
          console.error("Error updating delay on the server:", error);
        });

      // Optionally, you may want to call a function to display the updated question
      // displayQuestion();
      handleNextQuestion();
    });
  }
  if (decreaseButton) {
    // Event listener for "Decrease Delay" button
    decreaseButton.addEventListener("click", function () {
      // Assuming you have a function to get the current questionId
      const questionId = getCurrentQuestionId();
      let x = 0;
      let y = 0;

      // Make sure delayHours is declared and initialized before this point

      delayHours = 0; // decrease delay

      // Send a PUT request to update the delay on the server
      fetch(`/answer-question/${questionId}`, {
        method: "PUT", // Use PUT instead of POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          delayHours,
          questionId,
          x,
          y,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          console.log(data);
        })
        .catch((error) => {
          console.error("Error updating delay on the server:", error);
        });

      // Optionally, you may want to call a function to display the updated question
      // displayQuestion();
      handleNextQuestion();
    });
  }

  // Initial question display based on user progress
  if (nextButton) {
    fetchQuestions(currentSetName, tableNameHTML);
    displayQuestion();
  }
});
