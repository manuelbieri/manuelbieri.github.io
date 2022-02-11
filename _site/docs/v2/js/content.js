function navbar(title) {
    document.write(
        '<nav class="navbar navbar-expand-sm navbar-light bg-light">\n' +
        '  <div class="container-fluid">\n' +
        '    <button class="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '      <span class="navbar-toggler-icon"></span>\n' +
        '    </button>\n' +
        '    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n' +
        '      <ul class="navbar-nav mx-auto">\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link' + (title === 'Home' ? ' active' : "") + '" href=\"index.html\">Home</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link' + (title === 'Blog' ? ' active' : "") + '" href="blog.html">Blog</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link' + (title === 'Projects' ? ' active' : "") + '" href="projects.html">Projects</a>\n' +
        '        </li>\n' +
        '        <li class="nav-item">\n' +
        '          <a class="nav-link' + (title === 'Curriculum Vitae' ? ' active' : "") + '" href="cv.html">CV</a>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</nav>\n'
    )
}

function header(title, intro) {
    document.write(
        '<h1 class="h3">' + title + '</h1>\n' +
        '<br>\n' +
        '<p>' + intro + '</p>'
    )
}

function footer() {
    document.write(
        "<footer>\n" +
        "</footer>")
}

function articleTitle(title) {
    document.write(
        '<br>' +
        '<h5 class="h5 articleTitle">' + title + '</h5>\n'
    )
}

function articleText(text) {
    document.write(
        '<p>' + text + '</p>\n'
    )
}

function articleImage(img_name, text) {
    document.write(
        '<div class="text-center">\n' +
        '   <img src="media/img/' + img_name + '" class="img-fluid" alt="Image not available">\n' +
        '   <p class="text-center caption"><i>' + text + '</i></p>' +
        '</div>\n'
    )
}

function articleGithubTable(url, vcs, releases, version, docs, docs_title = 'Docs') {
    document.write(
        '<table class="table">' +
        '   <thead>' +
        '       <tr>' +
        '           <th class="w-25">VCS</th>' +
        '           <th class="w-25">Release</th>' +
        '           <th class="w-50">Documentation</th>' +
        '       </tr>' +
        '   </thead>' +
        '   <tbody>' +
        '       <tr>' +
        '           <td><a href="' + url + '">' + vcs + '</a></td>' +
        '           <td><a href="' + releases + '">' + version + '</a></td>' +
        '           <td><a href="' + docs + '">' + docs_title + '</a></td>' +
        '           </tr>' +
        '   </tbody>' +
        '</table>'
    )
}