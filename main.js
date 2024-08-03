const buttonCheck = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");
const result = document.querySelector("#result");

buttonCheck.addEventListener("click", () => {
  const replaced = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, ""); //usde regex or replace() and also toLowerCase()

  if (inputText.value == "") {
    alert("Please input a value");
  } else if (inputText.value.length == 1) {
    result.innerText = `${inputText.value} is a palindrome`;
  } else if (replaced === [...replaced].reverse().join("")) {
    result.innerText = `${inputText.value} is a palindrome`;
  } else {
    result.innerText = `${inputText.value} is not a palindrome`;
  }
});
