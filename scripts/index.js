//navbar is added to the main page
var nav = new XMLHttpRequest();
nav.open('POST', "navbar.html" );
nav.onload = function(){
    document.getElementById("navbar").innerHTML = this.response;
};
nav.send();

//footer is added to the main page
var footer = new XMLHttpRequest();
footer.open('POST', "footer.html");
footer.onload = function () {
    document.getElementById("footer").innerHTML = this.response;
};
footer.send();

//home page is added to the main page
var homePg = new XMLHttpRequest();
homePg.open('POST', "home.html");
homePg.onload = function () {
    document.getElementById("home").innerHTML = this.response;
};
homePg.send();

//menu is added to the main page
var mainPg = new XMLHttpRequest();
mainPg.open('POST', "menu.html");
mainPg.onload = function () {
    // document.getElementById("menu").innerHTML = this.response;
};
mainPg.send();

