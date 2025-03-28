const quotes = {
    motivation: {
        uk: ["«Єдиний спосіб робити велику роботу — любити те, що ви робите.» - Стів Джобс"],
        en: ["“The only way to do great work is to love what you do.” - Steve Jobs"]
    },
    success: {
        uk: ["«Успіх — це рух від невдачі до невдачі без втрати ентузіазму.» - Вінстон Черчилль"],
        en: ["“Success is going from failure to failure without losing enthusiasm.” - Winston Churchill"]
    },
    life: {
        uk: ["«Життя – це те, що з тобою відбувається, поки ти будуєш інші плани.» - Джон Леннон"],
        en: ["“Life is what happens when you’re busy making other plans.” - John Lennon"]
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
