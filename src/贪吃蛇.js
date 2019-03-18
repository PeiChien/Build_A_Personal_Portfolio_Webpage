var map = document.getElementById("Contact");
        //自调用函数---食物
        (function () {
            var elements = []; //用来保存每个小方块食物的
            function Food(x, y, width, height, color) {
                //坐标
                this.x = x || 0;
                this.y = y || 0;
                //宽高
                this.width = width || 20;
                this.height = height || 20;
                //背景颜色
                this.color = color || "green";
            }
            //为原型添加初始化方法（在页面显示食物）
            Food.prototype.init = function (map) {
                //先删除这个小食物
                //外部无法访问的函数
                remove();
                //创建div
                var div = document.createElement("div");
                //把div加到map中
                map.appendChild(div);
                //设置div的样式
                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                div.style.backgroundColor = this.color;
                //先脱离文档流
                div.style.position = "absolute";
                //随机坐标
                this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width;
                this.y = Math.floor(Math.random() * map.offsetHeight / this.height) * this.height;
                div.style.left = this.x + "px";
                div.style.top = this.y + "px";
                //把div加入到数组elements中
                elements.push(div);

            };

            //私有的函数--删除食物的
            function remove() {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                    elements.splice(i, 1);
                }
            }

            //把Food暴露给window
            window.Food = Food;
        }());

        //自调用函数---小蛇
        (function () {

            //存放小蛇每个身体部分
            var elements = [];

            //小蛇的构造函数
            function Snake(width, heigth, direction) {
                //小蛇的每个部分的尺寸
                this.width = width || 20;
                this.height = heigth || 20;
                //小蛇的身体
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
                //方向
                this.direction = direction || "right";
            }

            //为原型添加方法--小蛇初始化
            Snake.prototype.init = function (map) {
                //先删除之前的小蛇
                remove();
                for (var i = 0; i < this.body.length; i++) {
                    var div = document.createElement("div");
                    map.appendChild(div);
                    //设置div样式
                    div.style.position = "absolute";
                    div.style.width = this.width + "px";
                    div.style.height = this.height + "px";
                    //坐标
                    div.style.left = this.body[i].x * this.width + "px";
                    div.style.top = this.body[i].y * this.height + "px";
                    //背景颜色
                    div.style.backgroundColor = this.body[i].color;
                    //把div加入到elements数组中---目的是为了删除
                    elements.push(div);
                }

            };

            //为原型添加方法--小蛇动起来
            Snake.prototype.move = function (food, map) {

                //改变小蛇身体坐标位置
                for (var i = this.body.length - 1; i > 0; i--) {
                    this.body[i].x = this.body[i - 1].x;
                    this.body[i].y = this.body[i - 1].y;
                }

                //判断方向--改变小蛇头坐标位置
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

                //判断有没有吃到食物
                //小蛇头部坐标和食物一致
                var headX = this.body[0].x * this.width;
                var headY = this.body[0].y * this.width;

                //判断是否撞到
                if (headX == food.x && headY == food.y) {
                    
                    //获取小蛇的最后的尾巴
                    var last = this.body[this.body.length - 1];

                    //把最后蛇尾复制一个，加入body
                    this.body.push({
                        x: last.x,
                        y: last.y,
                        color: last.color
                    });
                    
                    //把食物删除，重新初始化
                    food.init(map);
                }
            };

            //删除小蛇的私有函数
            function remove() {
                //获取数组
                for (var i = elements.length - 1; i >= 0; i--) {
                    elements[i].parentNode.removeChild(elements[i]);
                    elements.splice(i, 1);
                }
            }

            //把Snake暴露给window
            window.Snake = Snake;
        }());

        //自调用函数---游戏对象
        (function () {
            var thst = null;
            //游戏的构造函数
            function Game(map) {
                this.food = new Food();
                this.snake = new Snake();
                this.map = map;
                that = this;
            }
            Game.prototype.init = function () {
                this.food.init(this.map);
                this.snake.init(this.map);
                //调用自动移动小蛇方法
                this.runSnake(this.food, this.map);
                //调用按键的方法
                this.bindkey();
            };

            //添加原型方法---设置小蛇可以自动跑起来
            Game.prototype.runSnake = function (food, map) {

                //自动的移动
                var timeId = setInterval(function () {
                    this.snake.move(food, map);
                    this.snake.init(map);
                    //横坐标最大值
                    var maxX = map.offsetWidth / this.snake.width;
                    //纵坐标最大值
                    var maxY = map.offsetHeight / this.snake.height;
                    //小蛇头部坐标
                    var headX = this.snake.body[0].x;
                    var headY = this.snake.body[0].y;
                    if (headX < 0 || headX >= maxX) {
                        clearInterval(timeId);
                        alert("游戏结束");
                    }
                    if (headY < 0 || headY >= maxX) {
                        clearInterval(timeId);
                        alert("游戏结束");
                    }
                }.bind(that), 150);
            }

            //添加原型方法---设置用户按键，改变小蛇移动方向
            Game.prototype.bindkey = function () {
                //获取用户案件，改变方向
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
            };

            //把Game暴露给window
            window.Game = Game;
        }());

        //初始化游戏对象
        var gm = new Game(map);

        //开始游戏
        gm.init();