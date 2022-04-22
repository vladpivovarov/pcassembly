
// Проверить, подключился ли js на страницу
document.documentElement.classList.remove("no-js");


// РЕАЛИЗАЦИЯ АККОРДЕОНА

const contentArray = document.querySelectorAll(".program-line__content");

contentArray.forEach((content, index) => {
  const title = content.querySelector(".program-line__title");
  const descr = content.querySelector(".program-line__descr");


  title.addEventListener("click", () => {

    contentArray.forEach((contentAgain, i) => {

      const descrAgain = contentAgain.querySelector(".program-line__descr");
      if (i === index) {
        return;

      } else {
        descrAgain.classList.remove("active");
      }
    });

    descr.classList.toggle("active");
  })
})