//用来保存每个小方块食物的
let elements = [];

export default class Food {
    constructor(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    }
    init(map) {
        remove();
        let div = document.createElement("div");
        map.appendChild(div);
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = Math.floor(Math.random() * map.offsetHeight / this.height) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        elements.push(div);
    }

}

function remove() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
        elements.splice(i, 1);
    }
}