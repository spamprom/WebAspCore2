const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { AotPlugin } = require('@ngtools/webpack');
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
            user: './ClientApp/auth/ng-main',
            main: './ClientApp/ng-main'
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
                //{ test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true', 'angular2-load-children-loader', 'angular2-template-loader'] },
                { test: /\.ts$/, include: /ClientApp/, use: ['@ngtools/webpack'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] },
                { test: /\.scss$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize', 'resolve-url-loader','sass-loader?sourceMap'] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]//'style-loader //'to-string-loader'
        },
        plugins: [
            new CheckerPlugin(),
            new AotPlugin({
                //entryModule: "./ClientApp/ng-main.ts",
                "mainPath": "./ClientApp/ng-main.ts",
                "replaceExport": false,
                "exclude": [],
                "tsConfigPath": "tsconfig.json",
                "skipCodeGeneration": true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "commonUser", minChunks: 2, chunks: ["user", "main"] }),
            //new webpack.optimize.CommonsChunkPlugin({
            //    name: "commonMain", minChunks: 2, chunks: ["subModule22", "subModule33"]
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
