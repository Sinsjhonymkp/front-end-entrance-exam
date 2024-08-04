import "../css/style.css";

const exprienseCard = document.querySelectorAll(".expiriense__wrapper-item");

exprienseCard.forEach((item, index) => {
  const savedContent = localStorage.getItem("editable-content-" + index);
  item.style.cursor = "text";
  if (savedContent) {
    item.innerHTML = savedContent;
  }
  const newBtn = document.createElement("button");
  newBtn.textContent = "most resent";
  newBtn.classList.add("experiense__btn");
  item.appendChild(newBtn);
  newBtn.addEventListener("click", (btn) => {
    item.classList.toggle("expiriense__wrapper-item-active");
    item.classList.toggle("expiriense__wrapper-item");
    newBtn.classList.toggle("experiense__btn-active");
  });
});

const changeExpirienseBtn = document.getElementById("change-expirience");
const acceptExpirienseBtn = document.getElementById("accept-expirience");

changeExpirienseBtn.addEventListener("click", () => {
  changeContent(changeExpirienseBtn, acceptExpirienseBtn, exprienseCard);
});

acceptExpirienseBtn.addEventListener("click", () => {
  acceptChanges(acceptExpirienseBtn, changeExpirienseBtn, exprienseCard);
});

function changeContent(btnChange, btnAccept, content) {
  btnChange.style.display = "none";
  btnAccept.style.display = "block";
  content.forEach((item) => {
    item.setAttribute("contenteditable", "true");
    item.style.textDecoration = "underline";
    item.style.cursor = "text";
  });
}

function acceptChanges(btnAccept, btnChange, content) {
  btnChange.style.display = "block";
  btnAccept.style.display = "none";
  content.forEach((item, index) => {
    setTimeout(() => {
      item.style.position = "relative";
      item.style.left = "0";
    }, 300);
    item.style.position = "fixed";
    item.style.left = "-1000px";
    item.setAttribute("contenteditable", "fase");
    item.style.textDecoration = "none";
    item.style.cursor = "deafult";
    localStorage.setItem("editable-content-" + index, item.innerHTML);
  });
}
// сделать кнопки на блоки которые нужно редактировать, сделать форму для добавления карточек + удаления карточек

/*const elementsForEdit = document.querySelectorAll('[contenteditable="true"]');

// Load saved content
elementsForEdit.forEach((element, index) => {
  const savedContent = localStorage.getItem("editable-content-" + index);
  element.style.cursor = "text";
  if (savedContent) {
    element.innerHTML = savedContent;
  }

  element.addEventListener("click", () => {
    element.style.cursor = "text";
  });

  element.addEventListener("blur", () => {
    element.style.cursor = "pointer";
    localStorage.setItem("editable-content-" + index, element.innerHTML);
  });
}); */
