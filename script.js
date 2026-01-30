const welcomeBtn=document.getElementById("welcomeBtn");
const themeBtn=document.getElementById("themeBtn")
welcomeBtn.addEventListener("click", ()=> {
    welcomeBtn.textContent="Thanks for visiting!😊";
    welcomeBtn.style.backgroundColor="#d42020";
    welcomeBtn.style.color="white";
});
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});
