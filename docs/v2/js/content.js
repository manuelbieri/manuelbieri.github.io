function header(title, intro) {
    document.write(
        '<nav class="navbar navbar-expand-sm navbar-light bg-light">\n' +
        '  <div class="container-fluid">\n' +
        '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '      <span class="navbar-toggler-icon"></span>\n' +
        '    </button>\n' +
        '    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n' +
        '      <ul class="navbar-nav mx-auto">\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link" href="index.html">Home</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link" href="blog.html">Blog</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link" href="projects.html">Projects</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link" href="cv.html">CV</a>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</nav>\n' +
        '<br>\n' +
        headings(title, intro)
    )
}

function headings(title, intro) {
    return '<h1 class="h3">' + title + '</h1>\n' +
        '<br>\n' +
        '<p>' + intro + '</p>' +
        '<br>'
}

function footer() {
    document.write(
        "<footer>\n" +
        "</footer>")
}

function articleTitle(title) {
    document.write(
        '<h5 class="h5 articleTitle">' + title + '</h5>\n'
    )
}

function articleText(text) {
    document.write(
        '<p>' + text + '</p>\n'
    )
}

function articleImage(rel_path, text) {
    document.write(
        '<div class="text-center">\n' +
        '   <img src="img/' + rel_path + '" class="img-fluid" alt="Image not available">\n' +
        '   <p class="text-center"><i>' + text + '</i></p>' +
        '</div>\n'
    )
}