const scripts = [
    "loadstring(game:HttpGet('https://raw.githubusercontent.com/desertikki/1/main/script1.lua'))()",
    "loadstring(game:HttpGet('https://raw.githubusercontent.com/desertikki/1/main/script2.lua'))()",
    "loadstring(game:HttpGet('https://pastefy.app/u3bu02iq/raw'))()",
    "loadstring(game:HttpGet('https://pastefy.app/65b8l49h/raw'))()"
];

const videoLinks = [
    "https://www.youtube.com/watch?v=VIDEO1",
    "https://www.youtube.com/watch?v=VIDEO2",
    "https://www.youtube.com/watch?v=NZ0f78iOr-g",
    "https://www.youtube.com/watch?v=NZ0f78iOr-g"
];

const executorLinks = [
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com"
];

// Улучшенная функция копирования
function copyScript(index) {
    if (index < 1 || index > scripts.length) {
        alert('Ошибка: неверный индекс скрипта');
        return;
    }
    
    const script = scripts[index - 1];
    const textarea = document.createElement('textarea');
    textarea.value = script;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert('✅ Скрипт скопирован!');
    } catch (err) {
        prompt('❌ Скопируйте вручную:', script);
    }
    
    document.body.removeChild(textarea);
}

// Функции открытия ссылок с проверкой
function openVideo(index) {
    if (videoLinks[index - 1]) {
        window.open(videoLinks[index - 1], '_blank', 'noopener,noreferrer');
    } else {
        alert('Видео не найдено');
    }
}

function openExecutor(index) {
    if (executorLinks[index - 1]) {
        window.open(executorLinks[index - 1], '_blank', 'noopener,noreferrer');
    } else {
        alert('Ссылка на исполнитель не найдена');
    }
}
