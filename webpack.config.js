const path = require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:'./src/js/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: false, //删除属性双引号
                collapseWhitespace: false //变成一行
            },
            hash:false,
            favicon:'./src/img/favicon.ico'//打包icon图标
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ]
};
