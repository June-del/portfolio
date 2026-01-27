const button=document.getElementById("welcomeBtn");
button.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
    button.textContent="Thanks for visiting!";
    button.style.backgroundColor="#4CAF50";
    button.style.color="white";
});