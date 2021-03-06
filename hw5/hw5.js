// Course: CS290 - Web Development
// Student Name: Dave Huston
// Assignment: HW5: GET and POST checker
// Description:

var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6946);

app.get('/',function(req,res){
    var qParams = [];
    for (var key in req.query){
        qParams.push({'qName': key, 'qValue': req.query[key]});
    }
    var context = {};
    context.item = qParams;
    res.render('get.handlebars', context);
});

app.post('/',function(req,res){
    var qParams = [];
    var bParams = [];
    for (var key in req.query){
        qParams.push({'qName': key, 'qValue': req.query[key]});
    }
    for (var key in req.body){
        bParams.push({'bName': key, 'bValue': req.body[key]});
    }
    var context = {};
    context.item1= qParams;
    context.item2 = bParams;
    res.render('post.handlebars', context);
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});