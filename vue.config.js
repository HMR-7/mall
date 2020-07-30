module.exports = {

    devServer: {
        // proxy: "http://test.nbyunlong.cn/api",
        proxy: "https://travel.backend.huangmaorui.cn",
        port: 8081, //本地端口
        hot: true,
        open: true, //输入npm run server自动打开网页
    }

}