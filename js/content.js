//written by Manuel Bieri, 2020

function meta() {
    document.write(
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '    <meta name="author" content="Manuel Bieri">\n' +
        '    <meta name="year" content="2020">'
    );
}

function navbar() {
    document.write(
        '<div class="navbar">\n' +
        '    <a href="index.html" class="active"><img src="icon/home.png" alt="" class="nimg"> Home</a>\n' +
        '    <a href="me.html"><img src="icon/about.png" alt="" class="nimg"> Me</a>\n' +
        '    <a href="news.html"><img src="icon/blog.png" alt="" class="nimg"> Blog</a>\n' +
        '    <a href="forex.html"><img src="icon/forex.png" alt="" class="nimg"> ForEx</a>\n' +
        '    <a href="info.html"><img src="icon/info.png" alt="" class="nimg"> Info</a>\n' +
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
