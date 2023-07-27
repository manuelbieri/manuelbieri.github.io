function resetNavbar(){
    const element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show")
    element.classList.add("collapse");
}

function resetToggler() {
    const button = document.getElementById("navbar-button");
    button.blur();
}

$(window).scroll(function() {
    resetNavbar();
    resetToggler();
});

$(window).click(function() {
    resetNavbar();
});

function setYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

