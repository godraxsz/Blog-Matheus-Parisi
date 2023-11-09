const path = require('path');

module.exports = {

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [

            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },

        ],
    },
};
