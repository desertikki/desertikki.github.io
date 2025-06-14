const scripts = [
    "loadstring(game:HttpGet('https://raw.githubusercontent.com/desertikki/1/refs/heads/main/4'))()",
    "loadstring(game:HttpGet('https://raw.githubusercontent.com/desertikki/1/refs/heads/main/4'))()",
    "loadstring(game:HttpGet('https://pastefy.app/u3bu02iq/raw'))()",
    "loadstring(game:HttpGet('https://pastefy.app/65b8l49h/raw'))()"
];

const videoLinks = [
    "https://www.youtube.com/watch?v=NZ0f78iOr-g&t=4s&ab_channel=desert",
    "https://www.youtube.com/watch?v=NZ0f78iOr-g&t=4s&ab_channel=desert",
    "https://www.youtube.com/watch?v=NZ0f78iOr-g&t=4s&ab_channel=desert",
    "https://www.youtube.com/watch?v=NZ0f78iOr-g&t=4s&ab_channel=desert"
];

const executorLinks = [
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com",
    "https://delta-executor.com"
];

function copyScript(index) {
    const script = scripts[index - 1];
    navigator.clipboard.writeText(script)
        .then(() => alert("✅ Script copied to clipboard!"))
        .catch(() => prompt("❌ Copy manually:", script));
}

function openVideo(index) {
    window.open(videoLinks[index - 1], "_blank");
}

function openExecutor(index) {
    window.open(executorLinks[index - 1], "_blank");
}
