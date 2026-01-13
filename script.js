const scriptText = "loadstring(game:HttpGet('ТВОЯ_ССЫЛКА_НА_СКРИПТ'))()";

function copyScript() {
    navigator.clipboard.writeText(scriptText).then(function() {
        alert('✅ Script copied!');
    }).catch(function() {
        const textarea = document.createElement('textarea');
        textarea.value = scriptText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Script copied!');
    });
}
