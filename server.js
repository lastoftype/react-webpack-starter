var express = require('express');
var app = express();

// Webpack dev server
if (process.env.ENVIRONMENT !== "production") {

    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config.dev');

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, 'localhost', function(err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at http://localhost:3000/');
    });
}

// Express
const port = process.env.PORT || 8080
app.use(express.static(__dirname + '/'));

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Essential React listening at http://%s:%s', host, port);
});
