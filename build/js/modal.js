const modal = document.querySelector(".modal");
const modalInner = modal.querySelector(".modal__inner");
const btn = document.querySelector(".modal__button");
const btn2 = document.querySelector(".course__button");
const btns = [btn, btn2];

// Добавление кнопки закрытия модального окна (крестик)
const modalClose = document.createElement("button");
modalClose.textContent = "X";
modalClose.style = `
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
modalInner.style = "position: relative";
modalInner.appendChild(modalClose);

// При клике на "крестик" скрываем модальное окно
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
})

// При клике на одну из кнопок отображаем модальное окно
btns.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("active");
  });
})

// При клике вне модального окна - скрываем его
// Если ли разница какой способ использовать?)

// Способ 1 (ваш).

// modal.addEventListener("click", (event) => {
//   const findModalInner = event.target.closest(".modal__inner");

//   if(findModalInner) {
//     return;
//   } else {
//     modal.classList.remove("active");
//   }
// })

// Способ 2.
modal.addEventListener("click", (event) => {
  const clickedElementsTree = event.composedPath();

  if(clickedElementsTree.includes(modalInner)) {
    return;
  } else {
    modal.classList.remove("active");
  }
})

