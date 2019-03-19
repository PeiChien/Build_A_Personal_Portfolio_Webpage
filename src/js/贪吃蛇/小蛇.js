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