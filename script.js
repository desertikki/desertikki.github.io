// Массивы с данными для каждого скрипта
const scripts = [
    "loadstring(game:HttpGet('https://pastefy.app/xcqWH4xT/raw'))()",
    "loadstring(game:HttpGet('https://pastefy.app/onW9UNCd/raw'))()",
    "loadstring(game:HttpGet('https://pastefy.app/dBD02P8G/raw'))()",
    "loadstring(game:HttpGet('https://pastefy.app/fiMsYnNo/raw'))()"
];

const videoLinks = [
    "https://youtube.com/ваше видео 1",
    "https://youtube.com/ваше видео 2",
    "https://youtube.com/ваше видео 3",
    "https://youtube.com/ваше видео 4"
];

const executorLinks = [
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com"
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
