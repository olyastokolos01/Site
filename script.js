const quotes = [
    {
        text: "Успіх — це здатність крокувати від однієї невдачі до іншої, не втрачаючи ентузіазму.",
        author: "Вінстон Черчилль"
    },
    {
        text: "Успіх — це круто",
        author: "Святік Cool"
    },
    {
        text: "Найкращий спосіб передбачити майбутнє — створити його.",
        author: "Пітер Друкер"
    },
    {
        text: "Єдиний спосіб робити велику роботу — любити те, що ви робите.",
        author: "Стів Джобс"
    },
    {
        text: "Життя — це те, що з тобою відбувається, поки ти будуєш інші плани.",
        author: "Джон Леннон"
    },
    {
        text: "Найкращий час посадити дерево був 20 років тому. Другий найкращий час — сьогодні.",
        author: "Китайське прислів'я"
    }
];

function generateQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];
document.getElementById('quote').innerHTML = `"${quote.text}" - ${quote.author}`;
}

window.onload = generateQuote;