//存放小蛇每个身体部分
let elements = [];

export default class Snake {
    constructor(width, heigth, direction) {
        this.width = width || 20;
        this.height = heigth || 20;
        this.body = [{
                x: 3,
                y: 2,
                color: "red"
            },
            {
                x: 2,
                y: 2,
                color: "orange"
            },
            {
                x: 1,
                y: 2,
                color: "orange"
            }
        ];
        this.direction = direction || "right";
    }

    init(map) {
        remove();
        for (let i = 0; i < this.body.length; i++) {
            let div = document.createElement("div");
            map.appendChild(div);
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = this.body[i].x * this.width + "px";
            div.style.top = this.body[i].y * this.height + "px";
            div.style.backgroundColor = this.body[i].color;
            elements.push(div);
        }
    }

    move(food, map) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.width;
        if (headX == food.x && headY == food.y) {
            let last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            food.init(map);
        }
    }
}

function remove() {
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.removeChild(elements[i]);
        elements.splice(i, 1);
    }
}