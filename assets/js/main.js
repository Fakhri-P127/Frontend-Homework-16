const submit = document.querySelector("#btnSubmit");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ulList");
const btnMatch = document.querySelector("#btnMatch");
const msg = document.querySelector("#msg");
const arr = [
  "Fakhri",
  "Avaz",
  "Jahangir",
  "Kamran",
  "Ali",
  "Lutfiyar",
  "Ismayil",
  "Isa",
  "Gunel",
  "Nigar",
  "Aliv2",
  "Mahammad",
  "Ramin",
  "Allahshukur",
  "Aykhan",
  "Oruc",
  "Elvin",
  "Sabir",
  "Nariman",
  "Parvin",
  "Rabil",
  "Mammad",
];

submit.addEventListener("click", function (e) {
  e.preventDefault();

  //   const regex = /[\s]/g;

  if (!inputText.value) {
    return;
  }
  msg.classList.add("hidden");
  const li = document.createElement("li");
  ulList.appendChild(li);
  li.innerHTML = `${`<i class="fa-regular fa-trash-can"></i>`} ${
    inputText.value
  }`;
  inputText.value = "";
  li.classList.add("custom-li");
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
    msg.classList.remove("hidden");
    msg.classList.add("error");
    return;
  }

  let firstMatch, secondMatch;
  do {
    let randomNumber = Math.trunc(Math.random() * ulList.children.length);
    firstMatch = ulList.children[randomNumber].textContent;
    randomNumber = Math.trunc(Math.random() * ulList.children.length);
    secondMatch = ulList.children[randomNumber].textContent;

    if (firstMatch === secondMatch) {
      msg.classList.remove("hidden");
      msg.classList.add("error");
      return;
    }
    console.log(
      `${firstMatch} and ${secondMatch} matched, Go buy a gift ${firstMatch}!`
    );
  } while (firstMatch === secondMatch);
});
