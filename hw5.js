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
app.set('port', 6945);

app.get('/',function(req,res){
    var getTitle = '<h1>GET Request Received</h1>';
    getTitle += '<table><tbody><tr>';
    getTitle += '<td>url: ' + req.url + '</td>';
    getTitle += '<td>body: ' + req.body + '</td>';
    getTitle += '</tr></tbody></table>';
    res.send(getTitle);
});

app.post('/',function(req,res){
    var postTitle = '<h1>POST Request Received</h1>';
    postTitle += '<table><tbody><tr>';
    postTitle += '<td>url: ' + req.url + '</td>';
    postTitle += '<td>body: ' + req.body + '</td>';
    postTitle += '</tr></tbody></table>';
    res.send(postTitle);
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