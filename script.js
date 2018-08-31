"use strict";

/*1. Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет контейнер.
2. Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными пунктами, т.е с подменю.
Подсказка: главный секрет – в обходе объекта пунктов меню и проверке типов.*/

function Container(id, className) {
    this.id = id;
    this.className = className;

}

Container.prototype.myRemove = function (id) {
    var elem = document.getElementById(id)
    return elem.remove();
};

Container.prototype.render = function () {
    var div = document.createElement('div');

    div.className = this.className;
    div.id = this.id;

    return div;
};

function Menu(id, className, items) {
    Container.call(this, id, className);

    this.items = items;
}

Menu.prototype = Object.create(Container.prototype);

Menu.prototype.render = function () {
    var ul = document.createElement('ul');

    ul.className = this.className;
    ul.id = this.id;

    this.items.forEach(function (item) {
        if (item instanceof Container) {
            ul.appendChild(item.render());
        }
    });

    return ul;
};

function MenuItem(href, label, id) {
    Container.call(this, '', 'menu-item');
    this.id = id;
    this.href = href;
    this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);

MenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.href = this.href;
    a.textContent = this.label;

    li.appendChild(a);
    li.className = this.className;
    li.id = this.id;
    return li;
};

function Button(id, className, type, value) {
    Container.call(this, id, className);
    this.type = type;
    this.value = value;
};

Button.prototype = Object.create(Container.prototype);

Button.prototype.render = function () {
    var input = document.createElement('input');

    input.className = this.className;
    input.id = this.id;
    input.type = this.type;
    input.value = this.value;


    return input;
};

