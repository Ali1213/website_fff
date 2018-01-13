const Koa = require('koa');
const server = require('koa-static');
const path = require('path');

const app =  new Koa();

app.use(server(path.join(__dirname,'..','web')));

app.listen(3000);