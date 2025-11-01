const dayText = document.getElementById("dayText");
let currentDay = 1;
let totalDays = 365;
let delay = 50;
const minDelay = 80;
const acceleration = 0.985;

// Сначала плавное появление текста
window.addEventListener("load", function() {
  dayText.style.opacity = 1; // запускаем fade-in
  setTimeout(startCounting, 1500); // ждём 1.5 сек, пока текст появился
});

function startCounting() {
  function showNextDay() {
    if (currentDay <= totalDays) {
      dayText.textContent = "Day " + currentDay;
      currentDay++;
      delay = Math.max(minDelay, delay * acceleration);
      setTimeout(showNextDay, delay);
    } else {
      dayText.textContent = "Day X ";

    function showCinematicTexts() {
  const texts = [
    "С каждым годом нам нужно принимать все больше важных решений...",
    "И перед каждым из нас встает важный выбор...",
    "Например: Пак Богом или же Ли Чон Сок...",
    "Поехать в Москву или Китай...",
    "Обосрать бывшего подруг или нет...",
    "И перед iamri встает выбор тоже..."
  ];

  const container = document.createElement("div");
  document.body.appendChild(container);
  container.className = "textLine";

  let index = 0;

  function showNextText() {
    if (index >= texts.length) return;

    container.textContent = texts[index];
    container.style.opacity = 1; // Плавное появление

    // Держим текст 3 секунды
    setTimeout(() => {
      container.style.opacity = 0; // Исчезает
      setTimeout(() => {
        index++;
        showNextText();
      }, 1500); // ждём, пока завершится fade-out
    }, 3000);
  }

  showNextText();
}  
    }
  }
  showNextDay();
}