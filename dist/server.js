import express from 'express';
import config from '../webpack.config';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(config);

const app = express();

app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true
}));

app.get('/api/', (req, res) => {
    res.json(
        { message: "Hello, World!" }
    );
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});