import Game from '@/贪吃蛇/游戏对象';
window.onload = function () {
    document.getElementById("easy").onclick = function () {
        document.getElementById("easy").disabled = true;
        document.getElementById("common").disabled = true;
        document.getElementById("hard").disabled = true;
        //初始化游戏对象
        var gm = new Game(document.getElementById("Contact"), 150);

        //开始游戏
        gm.init();
    };

    document.getElementById("common").onclick = function () {
        document.getElementById("easy").disabled = true;
        document.getElementById("common").disabled = true;
        document.getElementById("hard").disabled = true;
        //初始化游戏对象
        var gm = new Game(document.getElementById("Contact"), 100);

        //开始游戏
        gm.init();
    };

    document.getElementById("hard").onclick = function () {
        document.getElementById("easy").disabled = true;
        document.getElementById("common").disabled = true;
        document.getElementById("hard").disabled = true;
        //初始化游戏对象
        var gm = new Game(document.getElementById("Contact"), 15);

        //开始游戏
        gm.init();
    };
};