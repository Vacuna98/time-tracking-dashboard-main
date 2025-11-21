// app.js

// Get the three texts: Daily / Weekly / Monthly
const dailyText = document.getElementById("dailyText");
const weeklyText = document.getElementById("weeklyText");
const monthlyText = document.getElementById("monthlyText");

let jsonData = null; // we'll put data.json here after it loads

// Load data.json
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("JSON loaded:", data);
    jsonData = data;

    // Default view
    showWeekly();

    // Attach click events
    dailyText.addEventListener("click", showDaily);
    weeklyText.addEventListener("click", showWeekly);
    monthlyText.addEventListener("click", showMonthly);
  })
  .catch((err) => {
    console.error("Error loading JSON:", err);
  });

// ---------- FUNCTIONS TO UPDATE CARDS ----------

function showDaily() {
  if (!jsonData) return;

  // Work = jsonData[0]
  document.querySelector(".container2 .hours").innerText =
    jsonData[0].timeframes.daily.current + "hrs";
  document.querySelector(".container2 .previous").innerText =
    "Previous - " + jsonData[0].timeframes.daily.previous + "hrs";

  // Play = jsonData[1]
  document.querySelector(".container4 .hours").innerText =
    jsonData[1].timeframes.daily.current + "hrs";
  document.querySelector(".container4 .previous").innerText =
    "Previous - " + jsonData[1].timeframes.daily.previous + "hrs";

  // Study = jsonData[2]
  document.querySelector(".container6 .hours").innerText =
    jsonData[2].timeframes.daily.current + "hrs";
  document.querySelector(".container6 .previous").innerText =
    "Previous - " + jsonData[2].timeframes.daily.previous + "hrs";

  // Exercise = jsonData[3]
  document.querySelector(".container3 .hours").innerText =
    jsonData[3].timeframes.daily.current + "hrs";
  document.querySelector(".container3 .previous").innerText =
    "Previous - " + jsonData[3].timeframes.daily.previous + "hrs";

  // Social = jsonData[4]
  document.querySelector(".container5 .hours").innerText =
    jsonData[4].timeframes.daily.current + "hrs";
  document.querySelector(".container5 .previous").innerText =
    "Previous - " + jsonData[4].timeframes.daily.previous + "hrs";

  // Self Care = jsonData[5]
  document.querySelector(".container7 .hours").innerText =
    jsonData[5].timeframes.daily.current + "hrs";
  document.querySelector(".container7 .previous").innerText =
    "Previous - " + jsonData[5].timeframes.daily.previous + "hrs";
}

function showWeekly() {
  if (!jsonData) return;

  document.querySelector(".container2 .hours").innerText =
    jsonData[0].timeframes.weekly.current + "hrs";
  document.querySelector(".container2 .previous").innerText =
    "Previous - " + jsonData[0].timeframes.weekly.previous + "hrs";

  document.querySelector(".container4 .hours").innerText =
    jsonData[1].timeframes.weekly.current + "hrs";
  document.querySelector(".container4 .previous").innerText =
    "Previous - " + jsonData[1].timeframes.weekly.previous + "hrs";

  document.querySelector(".container6 .hours").innerText =
    jsonData[2].timeframes.weekly.current + "hrs";
  document.querySelector(".container6 .previous").innerText =
    "Previous - " + jsonData[2].timeframes.weekly.previous + "hrs";

  document.querySelector(".container3 .hours").innerText =
    jsonData[3].timeframes.weekly.current + "hrs";
  document.querySelector(".container3 .previous").innerText =
    "Previous - " + jsonData[3].timeframes.weekly.previous + "hrs";

  document.querySelector(".container5 .hours").innerText =
    jsonData[4].timeframes.weekly.current + "hrs";
  document.querySelector(".container5 .previous").innerText =
    "Previous - " + jsonData[4].timeframes.weekly.previous + "hrs";

  document.querySelector(".container7 .hours").innerText =
    jsonData[5].timeframes.weekly.current + "hrs";
  document.querySelector(".container7 .previous").innerText =
    "Previous - " + jsonData[5].timeframes.weekly.previous + "hrs";
}

function showMonthly() {
  if (!jsonData) return;

  document.querySelector(".container2 .hours").innerText =
    jsonData[0].timeframes.monthly.current + "hrs";
  document.querySelector(".container2 .previous").innerText =
    "Previous - " + jsonData[0].timeframes.monthly.previous + "hrs";

  document.querySelector(".container4 .hours").innerText =
    jsonData[1].timeframes.monthly.current + "hrs";
  document.querySelector(".container4 .previous").innerText =
    "Previous - " + jsonData[1].timeframes.monthly.previous + "hrs";

  document.querySelector(".container6 .hours").innerText =
    jsonData[2].timeframes.monthly.current + "hrs";
  document.querySelector(".container6 .previous").innerText =
    "Previous - " + jsonData[2].timeframes.monthly.previous + "hrs";

  document.querySelector(".container3 .hours").innerText =
    jsonData[3].timeframes.monthly.current + "hrs";
  document.querySelector(".container3 .previous").innerText =
    "Previous - " + jsonData[3].timeframes.monthly.previous + "hrs";

  document.querySelector(".container5 .hours").innerText =
    jsonData[4].timeframes.monthly.current + "hrs";
  document.querySelector(".container5 .previous").innerText =
    "Previous - " + jsonData[4].timeframes.monthly.previous + "hrs";

  document.querySelector(".container7 .hours").innerText =
    jsonData[5].timeframes.monthly.current + "hrs";
  document.querySelector(".container7 .previous").innerText =
    "Previous - " + jsonData[5].timeframes.monthly.previous + "hrs";
}

