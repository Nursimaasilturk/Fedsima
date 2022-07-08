const text = document.querySelector(".second-text");
//const codeOne = document.querySelector("#code-one").textContent;
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "how to coding of content in 9 steps.";
  }, 0);
};
textLoad();
// var arrayCode = Array.from;
// for (let i = 0; i < arrayCode.length; i++) {
//   var char = arrayCode[i];
//   if (char === "i" || "f") {
//     console.log(char);
//     char.style.color = "blue";
//   } else if (char === "(" || ")") {
//     char.setAttribute = ("style", "red");
//   } else if (char === "=") {
//     char.setAttribute = ("style", "purple");
//   } else if (char === ";") {
//     char.setAttribute = ("style", "yellow");
//   } else {
//     char.setAttribute = ("style", "white");
//   }
// }
/*
Array.from(codeOne).forEach(function (char) {
  if (char === "i" || "f") {
    char.setAttribute = ("style", "blue");
  } else if (char === "(" || ")") {
    char.setAttribute = ("style", "red");
  } else if (char === "=") {
    char.setAttribute = ("style", "purple");
  } else if (char === ";") {
    char.setAttribute = ("style", "yellow");
  } else {
    char.setAttribute = ("style", "white");
  }
});
*/
