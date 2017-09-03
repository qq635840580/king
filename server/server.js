let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //将数据转换成对象放到req.body上
let session = require('express-session');
let mongoStore = require('connect-mongo')(session);
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'zfpx',
  store: new mongoStore({
    url: 'mongodb://127.0.0.1/project'
  })
}));
app.listen(3000);

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //允许8080端口访问
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); //允许接收的头
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
  res.header('Access-Control-Allow-Credentials', 'true');
  // 允许跨域设置cookie
  //如果发的是options的请求 响应ok 即可
  if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});

//获取轮播图数据，访问.slider数据返回
let sliders = require('./mock/sliders');
app.get('/slider', function (req, res) {
  res.json(sliders)
});

let imgList = require('./mock/shoppingList');
app.get('/imglist/:offset/:limit', function (req, res) {
  res.json(imgList)
});


//李欣伟请求的接口
let lessonList = require('./mock/list');

app.get('/list', function (req, res) {
  res.json(lessonList);
});


//贺雅楠的接口
let cars = require('./mock/car');
app.get('/car', function (req, res) {
  res.json(cars);
});

let crypto = require('crypto');
let md5 = (val) => {
  return crypto.createHash('md5').update(val).digest('hex')
};
let User = require('./model');
app.post('/Register', function (req, res) {
  //加密密码
  req.body.password = md5(req.body.password);
  User.findOne({username: req.body.username}).then(doc => {
    if (doc) {
      res.json({err: '用户存在了'})
    } else {
      User.create(req.body).then(doc => {
        req.session.user = doc;//将当前用户存入到session中
        res.json(req.session.user);
      });
    }
  });
});


//验证用户是否登录
app.get('/auth', function (req, res) {
  if (req.session.user) {
    res.json(req.session.user)
  } else {
    res.json({});
  }
});


//登录
app.post('/Login', function (req, res) {
  req.body.password = md5(req.body.password);
  User.findOne(req.body).then(data => {
    if (data) {
      req.session.user = data;
      res.json(req.session.user)
    }else{
      res.json({err:'用户名或者密码不正确，请检查你的用户名账号或密码'})

    }
  })
});
app.get('/signout',function (req,res) {
  req.session.user = null;
  res.redirect('/user')
});
