import Food from '@/贪吃蛇/食物';
import Snake from '@/贪吃蛇/小蛇';
let that = null;

export default class Game {
    constructor(map, speed) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this.speed = speed;
        that = this;
    }

    init() {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food, this.map);
        this.bindkey();
    }

    runSnake(food, map) {
        let timeId = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                clearInterval(timeId);
                alert("游戏结束");
                location.reload();
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("游戏结束");
                location.reload();
            }
        }.bind(that), this.speed);
    }

    bindkey() {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 65:
                    this.snake.direction = "left";
                    break;
                case 87:
                    this.snake.direction = "top";
                    break;
                case 68:
                    this.snake.direction = "right";
                    break;
                case 83:
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    }
}