function copyScript(elementClass) {
    const text = document.querySelector('.' + elementClass).innerText;
    navigator.clipboard.writeText(text.trim())
        .then(() => {
            alert('✅ Script copied to clipboard!');
        })
        .catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = text.trim();
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            prompt('❌ Copy manually:', text.trim());
        });
}
document.querySelectorAll('.copy-box').forEach((box, index) => {
    box.classList.add('script' + (index + 1));
    box.onclick = function() {
        copyScript('script' + (index + 1));
    };
});
