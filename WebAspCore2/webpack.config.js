const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    
    const clientBundleOutputDir = './dist';
    const sharedConfig = {
        //watch: isDevBuild,
        //watchOptions: {
        //    aggregateTimeout: 300,
        //},
        devtool: isDevBuild ? 'cheap-source-map' : null,

        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: ['.js', '.ts', '.scss'] },

        entry: {
            //mainUserCss: './Content/scss/main-user.scss',

            user: './ClientApp/ng-main'
            //user: './ClientApp/app.module.user'//,
            //main: './ClientApp/app.module.shared'
        },
        output: {
            filename: '[name].js',
            publicPath: 'dist/',
            library: '[name]',
            libraryTarget: 'var',
            path: path.join(__dirname, clientBundleOutputDir)
        },


        module: {
            rules: [
                { test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] },
                { test: /\.scss$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize', 'resolve-url-loader','sass-loader?sourceMap'] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]//'style-loader //'to-string-loader'
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: "commonUser", minChunks: 2, chunks: ["user"] }),
            //new webpack.optimize.CommonsChunkPlugin({
            //    name: "commonMain", minChunks: 2, chunks: ["user", "main"]
            //}),
            new webpack.IgnorePlugin(/\.\/pathnameplugin/)
        ],

    };

    //const userBundleConfig = merge(sharedConfig, {
    //    output: {
    //    },
    //});
    //const mainBundleConfig = merge(sharedConfig, {
    //    output: {
    //    },
    //});
    return [sharedConfig];
};
