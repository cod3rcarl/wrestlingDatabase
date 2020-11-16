const submitButton = document.querySelector("#submit-button");
let dateValue = document.querySelector("#dateInput");
const superstar = document.querySelector(".superstar");
let url = PG_URL || "http://localhost:5000";
// const allDataButton = document.querySelector("#displayAllData")

submitButton.addEventListener("click", wrestlerInfo);
console.log("working");
//allDataButton.addEventListener('click', bootCamperInfo);

async function wrestlerInfo() {
  let value = dateValue.value;

  const response = await fetch(`${url}`);
  const data = await response.json();

  data.payload.forEach((item) => {
    let dateOne = item.datelost;
    let dateTwo = item.datewon;

    const champion = item.champion;

    D_1 = dateOne.split("/");
    D_2 = dateTwo.split("/");
    D_3 = value.split("/");

    let dlost = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);

    let dwon = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);

    let d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);

    if (d3 < dlost && d3 > dwon) {
      console.log("success");
      superstar.innerText = champion;
    }
  });
}
