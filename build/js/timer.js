const timer = () => {
  const timerBlock = document.querySelector(".timer");
  const daysBlock = timerBlock.querySelector(".timer__days");
  const hoursBlock = timerBlock.querySelector(".timer__hours");
  const minutesBlock = timerBlock.querySelector(".timer__minutes");
  const secondsBlock = timerBlock.querySelector(".timer__seconds");

  const wordsSeconds = ["Cекунда", "Cекунд", "Cекунды"];
  const wordsMinutes = ["Минута", "Минут", "Минуты"];
  const wordsHours = ["Час", "Часов", "Часа"];
  const wordsDays = ["День", "Дней", "Дня"];

  // Функция подбора склонений слов для таймера
  const numWord = (value, wordsArray) => {
    const lastNum = value % 10;

    if (value == 0 || lastNum == 0) return wordsArray[1];
    if (value == 1 || lastNum == 1) return wordsArray[0];
    if (value > 1 && value < 5) return wordsArray[2];
    if (value >= 10 && value <= 20) return wordsArray[1];
    if (lastNum >= 5 && lastNum < 10) return wordsArray[1];
    if (lastNum > 1 && lastNum < 5) return wordsArray[2];
  }

  const setTime = () => {
    const date = new Date();
    const deadlineTime = new Date("27 april 2022");
    const timeRemaining = (deadlineTime - date) / 1000;

    const lostDay = Math.floor(timeRemaining / 60 / 60 / 24);
    const lostHours = Math.floor((timeRemaining / 60 / 60) % 24);
    const lostMinutes = Math.floor((timeRemaining / 60) % 60);
    const lostSeconds = Math.floor(timeRemaining % 60);

    const fLostDay = lostDay < 10 ? "0" + lostDay : lostDay;
    const fLostHours = lostHours < 10 ? "0" + lostHours : lostHours;
    const fLostMinutes = lostMinutes < 10 ? "0" + lostMinutes : lostMinutes;
    const fLostSeconds = lostSeconds < 10 ? "0" + lostSeconds : lostSeconds;

    daysBlock.textContent = fLostDay;
    hoursBlock.textContent = fLostHours;
    minutesBlock.textContent = fLostMinutes;
    secondsBlock.textContent = fLostSeconds;

    secondsBlock.nextElementSibling.textContent = numWord(secondsBlock.textContent, wordsSeconds);
    minutesBlock.nextElementSibling.textContent = numWord(minutesBlock.textContent, wordsMinutes);
    hoursBlock.nextElementSibling.textContent = numWord(hoursBlock.textContent, wordsHours);
    daysBlock.nextElementSibling.textContent = numWord(daysBlock.textContent, wordsDays);

    if(timeRemaining <= 0) {
      daysBlock.textContent = "00";
      daysBlock.style.color = "red";

      hoursBlock.textContent = "00";
      hoursBlock.style.color = "red";

      minutesBlock.textContent = "00";
      minutesBlock.style.color = "red";

      secondsBlock.textContent = "00";
      secondsBlock.style.color = "red";

      clearInterval(run);
    }
  }

  let run = setInterval(setTime, 500);
}

timer();



