const submit = document.querySelector("#btnSubmit");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ulList");
const btnMatch = document.querySelector("#btnMatch");
const sameName = document.querySelector("#sameName");
const moreUsers = document.querySelector("#moreUsers");
const divMatch = document.querySelector("#divMatch");
const matchList = document.querySelector("#matchList");
const cardMatch = document.querySelector("#cardMatch");
let counter = 1;

//For non dymanic input
// const arr = [
//   "Fakhri",
//   "Avaz",
//   "Jahangir",
//   "Kamran",
//   "Ali",
//   "Lutfiyar",
//   "Ismayil",
//   "Isa",
//   "Gunel",
//   "Nigar",
//   "Aliv2",
//   "Mahammad",
//   "Ramin",
//   "Allahshukur",
//   "Aykhan",
//   "Oruc",
//   "Elvin",
//   "Sabir",
//   "Nariman",
//   "Parvin",
//   "Rabil",
//   "Mammad",
// ];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let sameInput = false;

  if (!inputText.value) {
    return;
  }
  if (ulList.children.length > 0) {
    for (let i = 0; i < ulList.children.length; i++) {
      if (inputText.value === ulList.children[i].textContent) {
        sameInput = true;
        sameName.classList.remove("hidden");
        inputText.value = "";
        return;
      }
    }
  }

  if (!sameInput) {
    sameName.classList.add("hidden");
    moreUsers.classList.add("hidden");
    const li = document.createElement("li");

    li.innerHTML = `<i class="fa-regular fa-face-frown"></i>${inputText.value}`;
    li.classList.add("custom-li");
    ulList.appendChild(li);
    inputText.value = "";
  }
});

btnMatch.addEventListener("click", function (e) {
  e.preventDefault();

  //#region  Without dynamic input

  //   let firstMatch, secondMatch;
  //   do {
  //     let randomNumber = Math.trunc(Math.random() * arr.length);
  //     firstMatch = arr[randomNumber];
  //     randomNumber = Math.trunc(Math.random() * arr.length);
  //     secondMatch = arr[randomNumber];

  //     console.log(
  //       `${firstMatch} and ${secondMatch} matched, Go buy a gift ${firstMatch}!`
  //     );
  //   } while (firstMatch === secondMatch);
  //#endregion

  if (ulList.children.length < 2) {
    moreUsers.classList.remove("hidden");
    return;
  }

  divMatch.classList.remove("hidden");
  cardMatch.classList.add("match-style");

  let firstMatch, secondMatch;
  do {
    let randomNumber = Math.trunc(Math.random() * ulList.children.length);
    firstMatch = ulList.children[randomNumber].textContent;
    randomNumber = Math.trunc(Math.random() * ulList.children.length);
    secondMatch = ulList.children[randomNumber].textContent;
  } while (firstMatch === secondMatch);

  const li = document.createElement("li");
  li.innerHTML = `<span id="counterId">Match ${counter}:</span><i class="fa-regular fa-face-smile"></i> ${firstMatch} and ${secondMatch} matched, go buy a gift ${firstMatch}!`;

  li.classList.add("match-li");
  matchList.appendChild(li);

  if (document.querySelector("#counterId")) {
    const counterId = document.querySelectorAll("#counterId");
    counterId.forEach((x) => x.classList.add("custom-span"));
  }
  counter++;
});
