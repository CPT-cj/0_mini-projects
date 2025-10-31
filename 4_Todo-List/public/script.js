const input = document.querySelector(".input-box");
const list = document.querySelector(".list-task");
const button = document.querySelector(".button");

button.addEventListener("click", fun1);
function fun1() {
  if (input.value === "") {
    alert("write something pls");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("bg-gray-800");
    li.classList.add("border-gray-700");
    li.classList.add("border-b-1");
    li.classList.add("h-8");
    li.classList.add("w-full");
    li.classList.add("pl-9");
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
}
// ------------------------------------------------------------------

function fun10() {
  input.value = "";
}

// -------------------------------------------------------------------
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
