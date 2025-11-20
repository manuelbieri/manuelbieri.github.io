function resetNavbar(){
    const element = document.getElementById("navbarSupportedContent");
    const navLinks = document.querySelectorAll('.nav-item')
    if (element.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(element)
        navLinks.forEach(() => bsCollapse.hide());
    }
}

function resetToggler() {
    const button = document.getElementById("navbar-button");
    button.blur();
}

function hideBlogPost(type) {
    [].forEach.call(document.querySelectorAll('.other'), function (el) {
        el.style.visibility = 'show';
    });
    [].forEach.call(document.querySelectorAll('.research'), function (el) {
        el.style.visibility = 'show';
    });
    [].forEach.call(document.querySelectorAll(type), function (el) {
        el.style.visibility = 'hidden';
    });
}

$(document).scroll(function() {
    resetNavbar();
    resetToggler();
});

$(document).click(function() {
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

