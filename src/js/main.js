import React from 'react';
import ReactDOM from 'react-dom';

//导入第三方样式表
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';

//导入各部分模块
import NavBar from '@/components/NavBar';
import MainParts from '@/components/MainParts';
import MyInfo from '@/components/MyInfo';
import Footer from '@/components/Footer';

//导入js动画文件
import '@/页面跳转/点击跳转.js';
import '@/贪吃蛇/难度选择';

ReactDOM.render(
<div>
<NavBar></NavBar>
<MainParts></MainParts>
<MyInfo></MyInfo>
<Footer></Footer>
</div>,document.getElementById('app'))


