//written by Manuel Bieri, 2020

function navbar() {
    document.write(
        '<div class="navbar">\n' +
        '    <a href="index.html" class="active">Home</a>\n' +
        '    <a href="aboutme.html">About me</a>\n' +
        '    <a href="news.html">News</a>\n' +
        '    <a href="forex.html">ForEx</a>\n' +
        '    <a href="info.html">Info</a>\n' +
        '</div>'
    );
}

function footer() {
    document.write(
        '<div class="footer">\n' +
        '    Hand-crafted by Manuel Bieri, 2020 (GPL V3)\n' +
        '</div>'
    );
}

function meta() {
    document.write(
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '    <meta name="author" content="Manuel Bieri">\n' +
        '    <meta name="year" content="2020">'
    );
}