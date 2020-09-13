const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public' );
const port = process.env.PORT || 3000;

console.log('__dirname =', __dirname);
console.log('publicPath =', publicPath);

app.use(express.static(publicPath));

app.get('*', (req, res) =>{
    res.sendfile(path.join(publicPath, 'index.html'));
});
app.listen(port, ()=>{
    console.log('express server is up');
});