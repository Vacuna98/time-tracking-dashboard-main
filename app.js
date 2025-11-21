const dailyText = document.getElementById("dailyText");
const weeklyText = document.getElementById("weeklyText");
const monthlyText = document.getElementById("monthlyText");

let jsonData = null;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    jsonData = data;
    showData("weekly");

    dailyText.addEventListener("click", () => showData("daily"));
    weeklyText.addEventListener("click", () => showData("weekly"));
    monthlyText.addEventListener("click", () => showData("monthly"));
  });

function showData(period) {
  jsonData.forEach((item, index) => {
    const container = document.querySelector(`.container${index + 2}`);
    container.querySelector(".hours").innerText =
      item.timeframes[period].current + "hrs";
    container.querySelector(".previous").innerText =
      "Previous - " + item.timeframes[period].previous + "hrs";
  });
}

