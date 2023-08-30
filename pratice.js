const inputBox = document.getElementById("input-box");
const listContain = document.getElementById("list-container");

const addtask = () => {
  if (inputBox.value === "") {
    alert("Write Somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContain.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
  }
};

listContain.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContain.innerHTML);
};

const showTask = () => {
  listContain.innerHTML = localStorage.getItem("data");
};

showTask();
