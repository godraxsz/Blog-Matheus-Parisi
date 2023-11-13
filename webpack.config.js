export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const module = {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg|ico)$/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name][ext]',
            },
        },
    ],
};
