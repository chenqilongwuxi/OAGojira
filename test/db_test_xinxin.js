'use strict';

var redis = require('redis'),
    //端口号
    RDS_PORT = 6379,
    //服务器IP
    RDS_HOST = '127.0.1.1',
    //设置项
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

function test_connect () {
    console.log('ready');
    console.log('connetion is successful');
}
//连接
client.on('ready', test_connect);
//添加'
client.on('connect', test_set);
//查看
client.on('connect', test_select);
//删除
client.on('connect', test_del);
function test_set () {
    // Set a value
    client.set('user:4:password', '4567895', function (err, reply) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(reply.toString());
    });
    client.set('user:4:count', '4', function (err, reply) {
    });
    client.set('user:4:name', 'nilixin', function (err, reply) {
    });
    client.set('user:4:id', '4', function (err, reply) {
    });
    client.set('user:4:login_time', '20171106', function (err, reply) {
    });
}

function test_select () {
    client.get('user:4:password', function (err, reply) {
        if (err) {
            console.log(err)
            return;
        }
        console.log('password:' + reply.toString());
    });
    client.get('user:4:count', function (err, reply) {
        console.log('count:' + reply.toString());
    });
    client.get('user:4:name', function (err, reply) {
        console.log('name:' + reply.toString());
    });
    client.get('user:4:id', function (err, reply) {
        console.log('id:' + reply.toString());
    });
    client.get('user:4:login_time', function (err, reply) {
        console.log('login_time:' + reply.toString());
    });

}

function test_del () {
    client.del('user:4:password', function (err, reply) {
        if (err) {
            console.log(err)
            return;
        }
        console.log('删除成功' + reply.toString());
    });

    client.del('user:4:count', function (err, reply) {
    });
    client.del('user:4:name', function (err, reply) {
    });
    client.del('user:4:id', function (err, reply) {
    });
    client.del('user:4:login_time', function (err, reply) {
    });

    //退出
    client.quit();
}
