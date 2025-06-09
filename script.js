document.getElementById("script-btn").addEventListener("click", () => {
    const script = 'loadstring(game:HttpGet("https://pastebin.com/raw/EXAMPLE"))()';
    navigator.clipboard.writeText(script)
        .then(() => alert("✅ Script copied to clipboard!"))
        .catch(() => prompt("❌ Copy manually:", script));
});

// Кнопка-ссылка на YouTube
document.getElementById("tutorial-link").addEventListener("click", () => {
    window.open("https://youtube.com", "_blank"); // Замените на свой URL
});

// Кнопка-ссылка на исполнитель
document.getElementById("executor-link").addEventListener("click", () => {
    window.open("https://delta-executor.com", "_blank"); // Замените на свой URL
});
