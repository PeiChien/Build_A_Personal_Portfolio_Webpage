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