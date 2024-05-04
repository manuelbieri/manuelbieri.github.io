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

async function copyOpenFeedLink() {
    window.open("/feed.xml", '_blank').focus();
    // TODO: Copying the RSS link does not work currently -> "Uncaught (in promise) TypeError: 'clipboardWrite' (value of 'name' member of PermissionDescriptor) is not a valid value for enumeration PermissionName."
    await navigator.permissions.query({name: 'clipboardWrite'});
    navigator.clipboard.writeText("/feed.xml");
}

