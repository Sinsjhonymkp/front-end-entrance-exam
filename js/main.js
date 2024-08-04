import "../css/style.css";

const exprienseCard = document.querySelectorAll(".expiriense__wrapper-item");
const changeExpirienseBtn = document.getElementById("change-expirience");
const acceptExpirienseBtn = document.getElementById("accept-expirience");
exprienseCard.forEach((item, index) => {
  const savedContent = localStorage.getItem("editable-content-" + index);
  if (savedContent) {
    item.innerHTML = savedContent;
  }

  const btn = item.querySelector(".experiense__btn");
  console.log("btn :", btn);
  btn.addEventListener("click", () => {
    btn.classList.toggle("experiense__btn-active");
    toggleActiveState(item, btn);
    setInStorage(index, item);
  });
  toggleActiveState(item, btn);
});

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
      item.style.opacity = "1";
    }, 300);
    item.style.opacity = "0";
    item.setAttribute("contenteditable", "fase");
    item.style.textDecoration = "none";
    item.style.cursor = "deafult";
    setInStorage(index, item);
  });
}

function toggleActiveState(item, btn) {
  if (btn.classList.contains("experiense__btn-active")) {
    item.classList.add("expiriense__wrapper-item-active");
    item.classList.remove("expiriense__wrapper-item");
  } else {
    item.classList.add("expiriense__wrapper-item");
    item.classList.remove("expiriense__wrapper-item-active");
  }
}

function setInStorage(key, value) {
  localStorage.setItem("editable-content-" + key, value.innerHTML);
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
