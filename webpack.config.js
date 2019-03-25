const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: "production",//production development
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            }
        },
        {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']},//modules启用模块化
        {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},//打包处理字体文件
        {test:/\.less$/,use:[MiniCssExtractPlugin.loader,'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]','less-loader']}
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: false, //删除属性双引号
                collapseWhitespace: false //变成一行
            },
            hash: false,
            favicon:'./src/img/favicon.ico'//打包icon图标
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //表示这几个文件的后缀名可以不写
        alias: {
            '@': path.join(__dirname, './src/js') //这样，@就表示项目根目录中src这一层路径
        }
    },
    watch: false
};
