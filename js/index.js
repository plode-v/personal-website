let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = "Please Come Back";
})
window.addEventListener('focus', () => {
    document.title = docTitle;
})