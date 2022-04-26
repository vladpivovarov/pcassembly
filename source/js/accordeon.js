const accordeon = () => {
  // РЕАЛИЗАЦИЯ АККОРДЕОНА
  const contentArray = document.querySelectorAll(".program-line__content");

  contentArray.forEach((content, index) => {
    const title = content.querySelector(".program-line__title");
    const descr = content.querySelector(".program-line__descr");

    descr.style.transition = "height 0.3s";


    title.addEventListener("click", () => {

      contentArray.forEach((contentAgain, i) => {

        const descrAgain = contentAgain.querySelector(".program-line__descr");
        if (i === index) {
          descr.style.height = descr.scrollHeight + "px";
        } else {
          descrAgain.style.height = "0";
        }
      });
    })
  })
}

accordeon();