        //自调用函数---游戏对象
        (function () {
            var thst = null;
            //游戏的构造函数
            function Game(map, speed) {
                this.food = new Food();
                this.snake = new Snake();
                this.map = map;
                this.speed = speed;
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

                        //刷新页面
                        location.reload();
                    }
                    if (headY < 0 || headY >= maxY) {
                        clearInterval(timeId);
                        alert("游戏结束");

                        //刷新页面
                        location.reload();
                    }
                }.bind(that), this.speed);
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