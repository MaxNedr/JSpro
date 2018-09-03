"use strict";

/*2. Создать меню, соответствующее меню интернет-магазина (личный кабинет, каталог, промоакции и т.д.).
3. Создать функционал фотогалереи. Имеется статичный json-набор миниатюр, на основании которого строится сетка
изображений со ссылками на полноразмерные картинки.*/


function Container(id, className) {
    this.id = id;
    this.className = className;

}

Container.prototype.myRemove = function (id) {
    var elem = document.getElementById(id);
    return elem.parentElement.removeChild(elem);
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
    var div = document.createElement('div');

    div.className = this.className;
    div.id = this.id;

    this.items.forEach(function (item) {
        if (item instanceof Container) {
            div.appendChild(item.render());
        }
    });

    return div;
};

function MenuItem(href, label, id, subItems) {
    Container.call(this, '', 'menu-item');
    this.id = id;
    this.href = href;
    this.label = label;
    this.subItems = [subItems];
}

MenuItem.prototype = Object.create(Container.prototype);

MenuItem.prototype.render = function () {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');

    ul.className = this.className;
    ul.id = this.id;

    a.href = this.href;
    a.textContent = this.label;
    ul.appendChild(li);
    li.appendChild(a);
    li.className = this.className;


    this.subItems.forEach(function (subIt) {
        if (subIt instanceof Container) {
            li.appendChild(subIt.render());
        }
    });

    return ul;
};

function MenuSubItem(href, label, id) {
    Container.call(this, '', 'subMenu-item');
    this.id = id;
    this.href = href;
    this.label = label;

}

MenuSubItem.prototype = Object.create(Container.prototype);

MenuSubItem.prototype.render = function () {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.href = this.href;
    a.textContent = this.label;

    ul.className = this.className;
    ul.id = this.id;

    ul.appendChild(li);
    li.appendChild(a);
    li.className = this.className;
    if (this.id === undefined) {
        console.log('нет id');
        return document.createElement('br')
    }
    return ul;
};

function Button(id, className, type, value) {
    Container.call(this, id, className);
    this.type = type;
    this.value = value;
}

Button.prototype = Object.create(Container.prototype);

Button.prototype.render = function () {
    var input = document.createElement('input');

    input.className = this.className;
    input.id = this.id;
    input.type = this.type;
    input.value = this.value;


    return input;
};

