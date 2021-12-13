
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js') /* 스크립트들을 app.js 로 묶음 */
    },
    module: { /** */
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader',
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
                ]
            }
        ]
    },
    plugins: [ /* 후처리 */
        new VueLoaderPlugin(),
    ],
    output: { /* app.js라는 이름으로 path에 내보내기 */
        filename: 'app.js',
        path: path.join(__dirname, 'dir'),
    },
};