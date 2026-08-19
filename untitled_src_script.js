// ==========================================
// 1. МУЗЫКА И ГИФКИ ДЛЯ ПЛЕЕРА:
// ==========================================
const songs = [
    { name: "Kai Angel", url: "amy.mp3" },
    { name: "Tewiq", url: "tewiq.mp3" },
    { name: "Greyrock", url: "dary.mp3" }
];

const catGifs = [
    "https://media.tenor.com/j1U1FbbCaYIAAAAM/dota-cat.gif",
    "https://media.tenor.com/aNKgtdT5ymEAAAA1/cat-dance-cat.webp",
    "https://media.tenor.com/oKgyRCo2lKoAAAAm/dancing-cat-cat-dance.webp"
];

// ==========================================
// 2. ФОТОГРАФИИ ДЛЯ ГАЛЕРЕИ ВОСПОМИНАНИЙ:
// ==========================================
const memoryPhotos = [
    "https://i.imgur.com/tTzl5ZB.jpeg",
    "https://i.imgur.com/APdrXVa.jpeg",
    "https://i.imgur.com/AdvXZpw.jpeg",
    "https://i.imgur.com/g61r3gQ.jpeg",
    "https://i.imgur.com/DxH4Rt7.jpeg",
    "https://i.imgur.com/2NzI0ys.jpeg",
    "https://i.imgur.com/prQ6Uqb.jpeg",
    "https://i.imgur.com/pZGxaC3.jpeg",
    "https://i.imgur.com/AegtpCW.jpeg",
    "https://i.imgur.com/s5YQ8bx.jpeg",
    "https://i.imgur.com/DyWwNea.jpeg",
    "https://i.imgur.com/bXrMVaI.jpeg",
    "https://imgur.com/48EnCeR.jpeg",
    "https://imgur.com/5XpPRdR.jpeg",
    "https://imgur.com/uQ8qqgF.jpeg",
    "https://imgur.com/goPSOB9.jpeg",
    "https://imgur.com/AQ8DSvD.jpeg",
    "https://imgur.com/tVtvdX9.jpeg",
    "https://imgur.com/b0U17SR.jpeg",
    "https://imgur.com/dGdu8QD.jpeg",
    "https://imgur.com/kvapxmZ.jpeg"
];

let currentSongIndex = 0;
const audio = new Audio();

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].url;
    audio.play().catch(e => console.log(e));
    
    const catImg = document.getElementById('dancingCat');
    if (catImg && catGifs[currentSongIndex]) {
        catImg.src = catGifs[currentSongIndex];
    }
}

// Переключение экранов
function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

// Автозапуск музыки при первом клике
document.addEventListener('click', () => {
    if (audio.paused && songs[0].url) {
        audio.src = songs[0].url;
        audio.play().catch(e => console.log(e));
        const catImg = document.getElementById('dancingCat');
        if (catImg && catGifs[0]) catImg.src = catGifs[0];
    }
}, { once: true });

// Убегающая кнопка "Нет"
function moveButton() {
    const btn = document.getElementById('runawayBtn');
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 100;
    btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
}

// Всплывашка Огурец
function shockCucumber() {
    const modal = document.getElementById('cucumberModal');
    if (modal) modal.style.display = 'flex';
}

function closeCucumberModal() {
    const modal = document.getElementById('cucumberModal');
    if (modal) modal.style.display = 'none';
    goToScreen('screen-growing');
}

// Логика растущей кнопки
let clickCount = 0;
const phrases = [
    "ты уверен?",
    "клянешься?",
    "правда? правда?",
    "ну ладнааа, верю тебе😊"
];

const hugeBtn = document.getElementById('hugeBtn');
if (hugeBtn) {
    hugeBtn.addEventListener('click', function() {
        clickCount++;
        if (clickCount <= phrases.length) {
            document.getElementById('phrase').innerText = phrases[clickCount - 1];
            let currentScale = 1 + (clickCount * 0.4);
            this.style.transform = 'scale(' + currentScale + ')';
        }
        if (clickCount >= phrases.length) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
            }
            setTimeout(() => goToScreen('screen-menu'), 1500);
        }
    });
}

// Список 100 причин
const reasonsList = [
    "1. Твои выразительные и невероятно красивые глаза",
    "2. Твоя лучезарная улыбка, которая сразу поднимает мне настроение",
    "3. Твой уникальный и сильный характер",
    "4. Твоя многогранная и глубокая личность",
    "5. Твой милый носик",
    "6. Твои заботливые и сильные руки",
    "7. Твоя смелость и решительность во всем",
    "8. Как ты всегда поддерживаешь меня в любых начинаниях",
    "9. То, как с тобой всегда безумно интересно разговаривать на любые темы",
    "10. С тобой я абсолютно никогда не чувствую себя одинокой",
    "11. Как внимательно ты умеешь слушать",
    "12. Как глубоко ты понимаешь меня с полуслова",
    "13. От тебя всегда исходит невероятно приятный и родной запах",
    "14. То, как ты мило и сладко спишь",
    "15. Я безумно люблю твои волосы",
    "16. Рядом с тобой я чувствую себя по-настоящему любимой и защищенной",
    "17. Твоя нежность, которую ты даришь только мне",
    "18. Твоя внимательность к самым мелким деталям",
    "19. Твой острый ум и эрудиция",
    "20. То, как легко ты находишь общий язык со всеми",
    "21. Твоя искренняя милота",
    "22. Я готова слушать тебя бесконечно, и мне никогда не надоест",
    "23. Твой приятный голос, успокаивающий в конце дня",
    "24. Мне искренне нравится наблюдать за тем, как ты увлеченно играешь",
    "25. Как уютно и здорово мы проводим время за просмотром фильмов",
    "26. Как сильно я хочу обнимать тебя вечно",
    "27. Я обожаю абсолютно все черты твоего лица",
    "28. Ты абсолютно не способен причинить кому-то боль или обидеть",
    "29. Как искренне ты всегда заботишься обо мне",
    "30. Мне невероятно комфортно и тепло рядом с тобой",
    "31. Твой огромный внутренний талант",
    "32. Ты абсолютно особенный и непохожий на других человек",
    "33. Твое трудолюбие и упорство",
    "34. Твой отличный и стильный вкус в одежде",
    "35. То, как ты невероятно мило злишься по мелочам",
    "36. Как ты всегда стараешься сделать всё самым лучшим образом",
    "37. Я всегда хочу быть только рядом с тобой",
    "38. Как ты подмечаешь детали, которые другие даже не заносят в счет",
    "39. То, как сильно ты нравишься моей семье",
    "40. Твоя способность удивлять меня снова и снова",
    "41. То, что ты совершенно не ревнивый",
    "42. Твоя абсолютная верность и преданность",
    "43. Как легко и глубоко ты мне доверяешь",
    "44. То, как сильно мне хочется рассказывать тебе вообще обо всём на свете",
    "45. Как легко ты умеешь заставлять меня искренне радоваться",
    "46. Твоя внутренняя сила и стержень",
    "47. Как часто ты говоришь мне приятные слова и делаешь комплименты",
    "48. Для меня ты — абсолютный идеал",
    "49. Твой здравый смысл и глубокая рассудительность",
    "50. Твоя аккуратность во всем",
    "51. Мне очень нравится, как ты стараешься ради нашего будущего",
    "52. Как нежно и правильно ты успокаиваешь меня, когда я плачу",
    "53. Твой заразительный и классный смех",
    "54. Как мило ты смущаешься в некоторые моменты",
    "55. Я всей душой не хочу, чтобы ты когда-либо плакал или расстраивался",
    "56. Как стойко и надежно ты защищаешь меня",
    "57. Ты всегда безоговорочно на моей стороне",
    "58. Мне очень нравится твой круг общения и твои друзья",
    "59. Ради тебя я готова пойти на многое",
    "60. Как бережно и осторожно ты относишься ко мне",
    "61. Я обожаю те милые видео и кружочки, которые ты мне присылаешь",
    "62. Как романтично и тепло мы гуляем с тобой по ночам",
    "63. Как здорово часами молча смотреть вместе на ночное небо и луну",
    "64. Как сильно я горжусь твоими успехами",
    "65. Как сильно я хочу путешествовать с тобой по всему миру",
    "66. Ты всегда готов сорваться и помочь мне в любую секунду",
    "67. Твое здоровое упрямство, когда ты идешь к цели",
    "68. Как хорошо и справедливо ты относишься даже к тем, кто этого не заслуживает",
    "69. Твоя ласка и нежность",
    "70. Твой отличный музыкальный вкус",
    "71. Ты всегда выглядишь потрясающе и стильно",
    "72. Мне безумно нравится твое сонное лицо по утрам",
    "73. Как сладко и нежно ты целуешься",
    "74. Ты всегда находишь выход из любой сложной ситуации",
    "75. Как бескорыстно ты всегда помогаешь окружающим",
    "76. То, насколько сильно ты дорог мне",
    "77. Ради меня ты готов меняться в лучшую сторону",
    "78. Как часто ты напоминаешь мне о своих чувствах",
    "79. То, как терпеливо ты относишься к моему характеру",
    "80. Как старательно ты всегда обсуждаешь проблемы вместо того, чтобы ссориться",
    "81. Твоя забавная привычка любить меня «кусать»",
    "82. Как осознанно ты признаешь ошибки и пытаешься их исправить",
    "83. Твое умение всегда прощать меня",
    "84. Я безумно люблю тебя за то, как сильно ты умеешь поднимать мне настроение",
    "85. Ты никогда в жизни не желал мне зла",
    "86. Ты никогда не позволял себе оскорбить меня",
    "87. Я обожаю твой специфический юмор",
    "88. Между нами нет никаких секретов, ты ничего от меня не скрываешь",
    "89. Ты знаешь пароль от моего телефона, потому что у нас абсолютное доверие",
    "90. Как ты постоянно фотографируешь меня, даже когда я этого не замечаю",
    "91. Я могу любоваться тобой бесконечно долго",
    "92. Как круто ты помогаешь мне с выбором и техникой",
    "93. Мне нравятся все наши совместные фотографии",
    "94. Как ты всегда желаешь мне самого доброго утра",
    "95. Как тонко ты понимаешь меня с полуслова",
    "96. То, насколько сильно ты открываешься передо мной",
    "97. Даже уставший после тяжелого дня, ты готов приехать ко мне хотя бы на минуту",
    "98. Как искренне ты всегда интересуешься моим мнением",
    "99. То, как ты регулярно звонишь мне просто так, чтобы услышать голос",
    "100. И наконец... я люблю тебя просто за то, что ты есть у меня ❤️"
];

let currentReasonIndex = 0;

function showNextReason() {
    const container = document.getElementById('reasonsContainer');
    if (!container) return;

    if (currentReasonIndex < reasonsList.length) {
        const p = document.createElement('p');
        p.style.margin = "8px 0";
        p.style.fontSize = "15px";
        p.style.opacity = "0";
        p.style.transition = "opacity 0.4s ease";
        p.innerHTML = reasonsList[currentReasonIndex];
        
        container.appendChild(p);
        setTimeout(() => p.style.opacity = "1", 50);
        container.scrollTop = container.scrollHeight;

        currentReasonIndex++;
    } else {
        alert("Это были все 100 причин, но на самом деле их бесконечно больше! ❤️");
    }
}

function openReasons() {
    goToScreen('screen-reasons');
    const container = document.getElementById('reasonsContainer');
    if (container && container.innerHTML.trim() === '') {
        currentReasonIndex = 0;
        container.innerHTML = '<p style="color: #ffb7c5; margin-bottom: 10px; font-style: italic;">Нажимай на экран, чтобы открывать причины по одной:</p>';
        showNextReason();
    }
}

function openMemories() {
    let photosHtml = memoryPhotos.map(url => `<img src="${url}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; margin: 5px;">`).join('');
    
    let win = window.open("", "Воспоминания", "width=450,height=550");
    if (win) {
        win.document.write(`
            <body style="background: #140c1c; color: #e0d7e8; font-family: sans-serif; text-align: center; padding: 20px;">
                <h2 style="color: #e6b8c8;">Наши воспоминания ❤️</h2>
                <p>Два года невероятно теплых моментов и самой искренней любви!</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 15px;">
                    ${photosHtml}
                </div>
            </body>
        `);
    } else {
        alert("Воспоминания: Два года невероятно теплых моментов, ночных разговоров и самой искренней любви! ❤️");
    }
}

function openWishes() {
    alert("Пожелания: Спасибо тебе за всё! Желаю нам бесконечного счастья, реализации всех самых смелых планов и чтобы наша связь становилась только крепче! ✨");
}

function checkCrossword() {
    const secret = document.getElementById('c_secret').value.trim().toLowerCase();

    if (secret.length > 1) {
        if (typeof confetti === 'function') {
            confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
        }
        setTimeout(() => goToScreen('screen-win'), 1000);
    } else {
        alert("Заполни секретное слово внизу кроссворда! У тебя всё получится ❤️");
    }
}