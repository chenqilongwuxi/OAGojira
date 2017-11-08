var redis = require('redis'),
    db = redis.createClient();

db.on('ready',function(err){
    console.log('ready');
});
db.set("login:1:name","chenqilong");
db.set("login:1:count",1);
db.set("login:1:password",123456);
db.set("login:1:lasttime",'2017-10-01 07:00:25');

db.set("login:2:name","yuwen");
db.set("login:2:count",1);
db.set("login:2:password",654321);
db.set("login:2:lasttime",'2017-10-21 11:00:25');

db.get("login:1:name",function(err,reply){
    if(err) return fasle;
    console.log("添加"+reply);
});
db.get("login:1:count",function(err,reply){
    if(err) return fasle;
    console.log("添加"+reply);
});
db.get("login:1:password",function(err,reply){
    if(err) return fasle;
    console.log("添加"+reply);
});
db.get("login:1:lasttime",function(err,reply){
    if(err) return fasle;
    console.log("添加"+reply);
});
db.del("login:1:lasttime");
db.del("login:1:password");
db.del("login:1:name");
db.del("login:1:count");
db.get("login:1:lasttime",function(err,reply){
    if(err) return fasle;
    console.log("删除"+reply);
});
db.get("login:1:name",function(err,reply){
    if(err) return fasle;
    console.log("删除"+reply);
});
db.get("login:1:count",function(err,reply){
    if(err) return fasle;
    console.log("删除"+reply);
});
db.get("login:1:password",function(err,reply){
    if(err) return fasle;
    console.log("删除"+reply);
});