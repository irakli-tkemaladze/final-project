let register = document.getElementById("register");
let login = document.getElementById("login")



function addRemoveClasses() {
    let home = document.querySelector(".home");
    let about = document.querySelector(".about");
    let gallery = document.querySelector(".gallery");
    let login = document.querySelector(".log-in");
    const currentPage = document.URL.slice(document.URL.lastIndexOf('/') + 1, document.URL.lastIndexOf('.html'));
    if (currentPage === 'index') {
        home.classList.add('active')
    } else if (currentPage === 'about') {
        about.classList.add('active')
    } else if (currentPage === 'gallery') {
        gallery.classList.add('active')
    } else if (currentPage === 'login') {
        login.classList.add('active')
    }
};
addRemoveClasses();


register.addEventListener("click", function(){
    document.getElementById("register-cont").style.display = "block";
    document.getElementById("login-cont").style.display = "none";
    document.getElementById("log-in").style.minHeight = "0px";
    document.getElementById("register-section").style.minHeight = "100vh";

});

login.addEventListener("click", function(){
    document.getElementById("register-cont").style.display = "none";
    document.getElementById("login-cont").style.display = "block";
    document.getElementById("register-section").style.minHeight = "0px";
    document.getElementById("log-in").style.minHeight = "100vh";

});
