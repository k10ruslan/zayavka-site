
const form = document.getElementById('contact-form');
const status = document.getElementById('status');
const scriptURL = "https://script.google.com/macros/library/d/1gje9MMEVX6IPJTo_HZ9zZRnNWloWnDyM3sbkpc7AtjNKbI_oJYLXx9wp/1";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};
  formData.forEach((value, key) => jsonData[key] = value);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      status.innerText = "Заявка успешно отправлена!";
      form.reset();
    } else {
      status.innerText = "Ошибка при отправке.";
    }
  } catch (error) {
    status.innerText = "Ошибка соединения.";
  }
});
