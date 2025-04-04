const quotes = {
    motivation: {
        uk: [
            "«Єдиний спосіб робити велику роботу — любити те, що ви робите.» - Стів Джобс",
            "«Ти сильніший, ніж думаєш, і здатний на більше, ніж уявляєш.»",
            "«Кожен день — новий шанс змінити своє життя.»",
            "«Не зупиняйся, навіть якщо складно — саме в цей момент відбувається прогрес.»"
        ],
        en: [
            "“The only way to do great work is to love what you do.” - Steve Jobs",
            "“You are stronger than you think, and more capable than you imagine.”",
            "“Every day is a new chance to change your life.”",
            "“Don't quit when it's hard — that's when progress happens.”"
        ]
    },
    success: {
        uk: [
            "«Успіх — це рух від невдачі до невдачі без втрати ентузіазму.» - Вінстон Черчилль",
            "«Успіх приходить до тих, хто діє, а не чекає.»",
            "«Мрій, плануй, дій!»",
            "«Щоб досягти успіху, треба спочатку повірити в себе.»"
        ],
        en: [
            "“Success is going from failure to failure without losing enthusiasm.” - Winston Churchill",
            "“Success comes to those who act, not those who wait.”",
            "“Dream it. Plan it. Do it.”",
            "“To succeed, you must first believe in yourself.”"
        ]
    },
    life: {
        uk: [
            "«Життя – це те, що з тобою відбувається, поки ти будуєш інші плани.» - Джон Леннон",
            "«Життя надто коротке, щоб витрачати його на жаль.»",
            "«Насолоджуйся кожною миттю, бо вона неповторна.»",
            "«Справжнє щастя — це бути вдячним за те, що маєш.»"
        ],
        en: [
            "“Life is what happens when you’re busy making other plans.” - John Lennon",
            "“Life is too short to waste on regrets.”",
            "“Enjoy every moment — it's one of a kind.”",
            "“True happiness is being grateful for what you have.”"
        ]
    }
};

// Очікуємо завантаження сторінки
document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.querySelector(".generate-btn");
    
    if (generateBtn) {
        generateBtn.addEventListener("click", generateQuote);
    } else {
        console.error("Кнопка .generate-btn не знайдена!");
    }
});

// Функція генерації цитати
function generateQuote() {
    const category = document.getElementById("category").value;
    const language = document.getElementById("language").value;
    const quoteBox = document.getElementById("quote");
    let selectedQuotes = [];

    // Якщо вибрана категорія "Всі", збираємо всі цитати
    if (category === "all") {
        Object.keys(quotes).forEach(key => {
            if (quotes[key][language]) {
                selectedQuotes = selectedQuotes.concat(quotes[key][language]);
            }
        });
    } else {
        if (quotes[category] && quotes[category][language]) {
            selectedQuotes = quotes[category][language];
        }
    }

    // Перевіряємо, чи є взагалі цитати
    if (selectedQuotes.length === 0) {
        quoteBox.textContent = "Цитати не знайдено!";
        return;
    }

    // Вибираємо випадкову цитату
    const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
    quoteBox.textContent = randomQuote;
}
