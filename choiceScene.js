// choiceScene.js
function initChoiceScene() {
  const choiceScene = document.getElementById('choiceScene');
  const leftColumn = document.getElementById('leftColumn');
  const rightColumn = document.getElementById('rightColumn');

  // Показываем сцену выбора
  choiceScene.style.display = "flex";
  choiceScene.style.flexDirection = "row";
  choiceScene.style.justifyContent = "space-around";
  choiceScene.style.alignItems = "flex-start";
  choiceScene.style.height = "100vh";
  choiceScene.style.padding = "20px";

  leftColumn.innerHTML = "";
  rightColumn.innerHTML = "";

  // Ники и фразы
  const nicknames = [
    "whxducky","e_kkaterina","aliska117","ALICEE_N","eemilixx",
    "utya_yu","imtvnk","mashaavovk","i_OLYA","varrvarrass",
    "NIKUSIK0","OGONEKK101","downt1povniz"
  ];

  const phrases = [
    "Будь такой же болтушкой как когда мы иногда сплетничаем.",
    "Оставайся такой же целеустремленной, как в те дни, когда мы по три часа искали алмазы в шахтах.",
    "Продолжай жить и кайфовать, а не оправдывать чьи-либо ожидания. Оставайся такой же душевной и проницательной как в тот день, когда мы танцевали танец из дневников вампира под ливнем!",
    "Оставайся такой же заботливой, как когда приходила дарить мне цветок, встречая с уника.",
    "Оставайся такой же счастливой, как в день, когда я привела тебя к мини зоопарку на Крестовском🥹",
    "Пусть ты всегда будешь такой же целеустремленной, вдохновленной и неунывающей как после шести часовой дороги ко мне (вместо трехчасовой)",
    "Оставайся такой же теплой и жизнерадостной, как те вечера, которые мы проводили вместе",
    "Оставайся такой же веселой и озорной, как в ночь, когда мы  в новогодних пижамах выходили в магазин, а потом смотрели эксайла. Оставайся такой же любознательной, как в день, когда мы обошли несколько литературных музеев и познакомились с милой женщиной экскурсоводом❤️",
    "Пусть твоя жизнь также окрашивается красками, как наш холст с руками.",
    "Оставайся такой же внимательной и ответственной, как в тот момент, когда алисен решила устроить квест-историю с голосовыми каждому из беба..",
    "Оставайся такой же веселой и энергичной, как в день, когда танцевала для меня под курседа.",
    "С днем рождения",
    "С др браза мээ."
  ];

  // Перемешиваем для случайного порядка
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const shuffledNicks = shuffle([...nicknames]);
  const shuffledPhrases = shuffle([...phrases]);

  // Создаем элементы
  shuffledNicks.forEach(nick => {
    const div = document.createElement("div");
    div.textContent = nick;
    div.classList.add("nickname");
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.borderRadius = "10px";
    div.style.cursor = "pointer";
    div.style.transition = "all 0.3s";
    div.style.background = "rgba(255,255,255,0.05)";
    leftColumn.appendChild(div);
  });

  shuffledPhrases.forEach(phrase => {
    const div = document.createElement("div");
    div.textContent = phrase;
    div.classList.add("phrase");
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.borderRadius = "10px";
    div.style.cursor = "pointer";
    div.style.transition = "all 0.3s";
    div.style.background = "rgba(255,255,255,0.05)";
    rightColumn.appendChild(div);
  });

  // Выбор пользователя
  let selectedNick = null;
  let selectedPhrase = null;

  function checkSelection() {
    if (!selectedNick || !selectedPhrase) return;
    // проверка правильного совпадения (потом можно добавить)
    const nickIndex = nicknames.indexOf(selectedNick.textContent);
    const phraseIndex = phrases.indexOf(selectedPhrase.textContent);
    if (nickIndex === phraseIndex) {
      selectedNick.classList.add("selected");
      selectedPhrase.classList.add("selected");
      // Показ фото/видео и спецэффекты можно тут добавить
      setTimeout(() => showCredits(), 1500);
    } else {
      selectedNick.classList.add("wrong");
      selectedPhrase.classList.add("wrong");
      setTimeout(() => {
        selectedNick.classList.remove("wrong");selectedPhrase.classList.remove("wrong");
      }, 1500);
    }
  }

  // События клика
  const nickDivs = leftColumn.querySelectorAll(".nickname");
  nickDivs.forEach(div => {
    div.onclick = () => {
      if (selectedNick) selectedNick.style.opacity = 1;
      selectedNick = div;
      div.style.opacity = 1;
      nickDivs.forEach(d => { if(d!==div) d.style.opacity=0.5; });
      checkSelection();
    };
  });

  const phraseDivs = rightColumn.querySelectorAll(".phrase");
  phraseDivs.forEach(div => {
    div.onclick = () => {
      if (selectedPhrase) selectedPhrase.style.opacity = 1;
      selectedPhrase = div;
      div.style.opacity = 1;
      phraseDivs.forEach(d => { if(d!==div) d.style.opacity=0.5; });
      checkSelection();
    };
  });
}