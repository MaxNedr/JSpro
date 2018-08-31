"use strict";

/*1. Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет контейнер.
2. Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными пунктами, т.е с подменю.
Подсказка: главный секрет – в обходе объекта пунктов меню и проверке типов.*/

function Container(id, className) {
    this.id = id;
    this.className = className;

}

Container.prototype.remove = function (id) {
    return document.getElementById('id').remove();
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

function MenuItem(href, label) {
    Container.call(this, '', 'menu-item');

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

    return li;
};
