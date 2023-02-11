let pagetitle = document.title;

window.addEventListener("blur",() => {
    document.title = "Already Bored?";
});

window.addEventListener("focus", ()=>{
    document.title = pagetitle;
})


