var path = require('path');

module.exports = {
    mode: 'development',
    entry: "./app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        open: true
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                exclude: /(node_modules)/,
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                  limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            }
        ]
    }
}