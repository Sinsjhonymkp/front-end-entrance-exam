import "../css/style.css";

const exprienseCard = document.querySelectorAll(".expiriense__wrapper-item");

exprienseCard.forEach((item) => {
  const newBtn = document.createElement("button");
  newBtn.textContent = "most resent";
  newBtn.classList.add("experiense__btn");
  item.appendChild(newBtn);
  newBtn.addEventListener("click", (btn) => {
    item.classList.toggle("expiriense__wrapper-item-active");
    item.classList.toggle("expiriense__wrapper-item");
    newBtn.classList.toggle("experiense__btn-active");
  });
  item.addEventListener("click", () => {
    item.setAttribute("contenteditable", "true");
    item.style.cursor = "text";
  });
  item.addEventListener("mouseleave", () => {
    item.setAttribute("contenteditable", "false");
    item.style.cursor = "default";
  });
});
const mainSections = document.querySelectorAll(".main > div");
mainSections.forEach((section) => {
  section.setAttribute("draggable", true);

  section.addEventListener("dragstart", handleDragStart);
  section.addEventListener("dragover", handleDragOver);
  section.addEventListener("drop", handleDrop);
  section.addEventListener("dragenter", handleDragEnter);
  section.addEventListener("dragleave", handleDragLeave);
});

let draggedSection = null;

function handleDragStart(event) {
  draggedSection = this;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", this.innerHTML);
  this.classList.add("dragging");
}

function handleDragOver(event) {
  event.preventDefault();
  return false;
}

function handleDrop(event) {
  event.stopPropagation();
  if (draggedSection !== this) {
    draggedSection.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
  }
  return false;
}

function handleDragEnter(event) {
  this.classList.add("over");
}

function handleDragLeave(event) {
  this.classList.remove("over");
}

mainSections.forEach((section) => {
  section.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    mainSections.forEach((sec) => sec.classList.remove("over"));
  });
});
