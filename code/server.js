//1.引入express
const { response } = require('express');
const { request } = require('express');
const express = require('express');
const { json } = require('express/lib/response');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装，response是对响应报文的封装
app.all('/server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    //设置响应体
    const data = {
        name:"xurun"
    }
    let str = JSON.stringify(data);
    response.send(str);

    

});

app.get('/ie', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    //设置响应体
    response.send('Hello IE-4');

    

});

app.get('/timeout', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    //设置响应体
    setTimeout(() => {
        response.send('Timeout');
    },3000)


    

});

app.all('/jquery-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name:'jqurey'}
    response.send(JSON.stringify(data));

    

});

app.all('/axios-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name:'axios'}
    response.send(JSON.stringify(data));

    

});

app.all('/fetch-server', (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name:'fetch'}
    response.send(JSON.stringify(data));

    

});

app.all('/jsonp-server', (request, response) => {

    //response.send("console.log('hello jsonp')");
    const data = {
        name:'jsonp-server'
    }
    
    let str = JSON.stringify(data);
    
    response.end(`handle(${str})`);

});

app.all('/check-username', (request, response) => {

    //response.send("console.log('hello jsonp')");
    const data = {
        exist: 1,
        msg:'用户已存在'
    }
    
    let str = JSON.stringify(data);
    
    response.end(`handle(${str})`);

});

app.all('/jquery-jsonp-server', (request, response) => {

    //response.send("console.log('hello jsonp')");
    const data = {
        name: 'jquery-jsonp-server',
        city:['北京','南京']
    }
    
    let str = JSON.stringify(data);
    
    //接收callback参数
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);

});

app.all('/cors-server', (request, response) => {
    response.setHeader('Access-Control-Allow-origin','*');
    response.send("Hello CORS");

});

//4.监听端口启动服务
app.listen(8000, () => { 
    console.log("服务已启动，8000端口执行中...");
})