"use strict";
var Icontents = /** @class */ (function () {
    function Icontents() {
        this.nextId = 0;
        this.datas = [];
    }
    Icontents.prototype.createContent = function (type, title, info) {
        var tmp = {
            id: this.nextId,
            title: title,
            type: type,
            info: info,
        };
        this.datas.push(tmp);
        this.nextId++;
    };
    Icontents.prototype.renderContent = function () {
        var _this = this;
        var main = document.getElementById("main");
        main.innerHTML = "";
        this.datas.map(function (data) {
            var newContent = document.createElement("div");
            newContent.className = "content_box";
            var xbtn = document.createElement("button");
            xbtn.className = "close cnt";
            xbtn.innerText = "X";
            xbtn.addEventListener("click", function () {
                _this.deleteContent(data.id);
                _this.renderContent();
            });
            if (data.type === "img") {
                var img = document.createElement("img");
                img.setAttribute("src", "".concat(data.info));
                var title = document.createElement("h1");
                title.innerText = data.title;
                title.className = "cotent_title";
                title.style.color = "yellow";
                newContent.append(img, title, xbtn);
            }
            else if (data.type === "vid") {
                ///<iframe width="560" height="315" src="https://www.youtube.com/embed/iDjQSdN_ig8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                var vid = document.createElement("iframe");
                vid.setAttribute("width", "180px");
                vid.setAttribute("height", "120px");
                vid.setAttribute("src", "https://www.youtube.com/embed/".concat(data.info.split("/")[data.info.split("/").length - 1]));
                vid.setAttribute("frameborder", "0");
                vid.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
                var title = document.createElement("h1");
                title.innerText = data.title;
                title.className = "cotent_title";
                title.style.color = "yellow";
                newContent.append(vid, title, xbtn);
            }
            else if (data.type === "note") {
                var noteMain = document.createElement("div");
                var title = document.createElement("h1");
                title.innerText = data.title;
                title.className = "cotent_title";
                title.style.color = "yellow";
                var body = document.createElement("div");
                body.innerText = data.info;
                noteMain.append(title, body);
                newContent.className = newContent.className + " note";
                newContent.append(noteMain, xbtn);
            }
            else if (data.type === "task") {
                var noteMain = document.createElement("div");
                var title = document.createElement("h1");
                title.innerText = data.title;
                title.className = "cotent_title";
                title.style.color = "yellow";
                var body = document.createElement("div");
                body.style.display = "flex";
                var check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                var todo = document.createElement("div");
                todo.innerText = data.info;
                body.append(check, todo);
                noteMain.append(title, body);
                newContent.className = newContent.className + " note";
                newContent.append(noteMain, xbtn);
            }
            main.append(newContent);
        });
    };
    Icontents.prototype.deleteContent = function (id) {
        var newDatas = this.datas.filter(function (data) {
            return data.id !== id;
        });
        this.datas = newDatas;
    };
    return Icontents;
}());
var Contents = new Icontents();
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
var _loop_1 = function (i) {
    var targetType = menu[i].id;
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
        var form = document.querySelector("#".concat(targetType, "_modal > form"));
        var inputs = form.getElementsByTagName("input");
        var title = inputs[0].value;
        var info = inputs[1].value;
        Contents.createContent(targetType, title, info);
        inputs[0].value = "";
        inputs[1].value = "";
        makeAppBright();
        closeModal();
        Contents.renderContent();
    });
};
for (var i = 0; i < 4; i++) {
    _loop_1(i);
}
