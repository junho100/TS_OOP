"use strict";
var makeAppDark = function () {
    var app = document.getElementById("app");
    app.style.filter = "brightness(30%)";
};
var makeAppBright = function () {
    var app = document.getElementById("app");
    app.style.filter = "none";
};
var renderModal = function (id) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < 4; i++) {
        if (modals[i].id === "".concat(id, "_modal")) {
            var target = document.getElementById("".concat(id, "_modal"));
            target.style.display = "block";
        }
        else {
            var target = document.getElementById(modals[i].id);
            target.style.display = "none";
        }
    }
};
var closeModal = function () {
    var modals = document.getElementsByClassName("modal");
    for (var j = 0; j < 4; j++) {
        modals[j].style.display = "none";
    }
};
var menu = document.getElementsByClassName("menu_btn");
var cls = document.getElementsByClassName("close");
var add = document.getElementsByClassName("add");
for (var i = 0; i < 4; i++) {
    menu[i].addEventListener("click", function (e) {
        makeAppDark();
        var id = e.target.id;
        renderModal(id);
    });
    cls[i].addEventListener("click", function (e) {
        e.preventDefault();
        makeAppBright();
        closeModal();
    });
    add[i].addEventListener("click", function (e) {
        e.preventDefault();
    });
}
