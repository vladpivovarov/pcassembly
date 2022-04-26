const sendForm = () => {
  const modal = document.querySelector(".modal");
  modal.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = modal.querySelector("[type=text]");
    const tel = modal.querySelector("[type=tel]");
    const email = modal.querySelector("[type=email]");

    const dataObj = {
      name: name.value,
      tel: tel.value,
      email: email.value
    }

    // Отправляем данные на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        if (response.status === 400) throw new Error("Данные не отправлены :(");
        if (response.status === 401) throw new Error("Неверные учетные данные :(");
        if (response.status === 403) throw new Error("Доступ запрещен :(");
        if (response.status === 404) throw new Error("Данные потерялись :(");
        if (response.status === 500) throw new Error("Ошибочка на сервере :(");

        return response.json()
      })
      .then((json) => console.log("Пришло с сервера: " + JSON.stringify(json)))
      .catch(error => {
        alert(error.message)
      })
      .finally(modal.reset());
  })
}

sendForm();
