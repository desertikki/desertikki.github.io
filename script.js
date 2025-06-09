// Массивы с данными для каждого скрипта
const scripts = [
    "loadstring(game:HttpGet('ваш скрипт 1'))()",
    "loadstring(game:HttpGet('ваш скрипт 2'))()",
    "loadstring(game:HttpGet('ваш скрипт 3'))()",
    "loadstring(game:HttpGet('ваш скрипт 4'))()"
];

const videoLinks = [
    "https://youtube.com/ваше видео 1",
    "https://youtube.com/ваше видео 2",
    "https://youtube.com/ваше видео 3",
    "https://youtube.com/ваше видео 4"
];

const executorLinks = [
    "https://example.com/executor1",
    "https://example.com/executor2",
    "https://example.com/executor3",
    "https://example.com/executor4"
];

// Функция для копирования скрипта
function copyScript(index) {
    const script = scripts[index - 1];
    navigator.clipboard.writeText(script)
        .then(() => alert("✅ Script copied to clipboard!"))
        .catch(() => prompt("❌ Copy manually:", script));
}

// Функция для открытия видео
function openVideo(index) {
    window.open(videoLinks[index - 1], "_blank");
}

// Функция для открытия ссылки на исполнитель
function openExecutor(index) {
    window.open(executorLinks[index - 1], "_blank");
}
