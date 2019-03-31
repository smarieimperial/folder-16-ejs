// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.get('/my-pet', function(req, res){
	res.render('pages/my_pet', {
		name: 'bobbi',
		type: 'cat',
		age: 6,
		breed: 'tabby'
	});
});

app.get('/cat-names', function(req, res){
	res.render('pages/cat_names', {
		cats: [
			"Oscar", "Max", "Tiger", "Sam", "Misty", "Simba", "Coco", "Chloe", "Lucy", "Missy", "Molly", "Tigger", "Smokey", "Milo", "Cleo"
		]
	});
});

app.get('/people', function(req, res){
	res.render('pages/people', {
		data: [
			{
				name: 'lawrence', 
				fact: 'likes interstellar'},
			{
				name: 'austin', 
				fact: 'friends call him texas'
			},
			{
				name: 'will', 
				fact: 'comes up with jokes on the bart'
			}
		]
	});
});

app.get('/people', function(req, res){
	res.render('pages/people', {
		data: [
			{
				name: 'lawrence', 
				fact: 'likes interstellar'},
			{
				name: 'austin', 
				fact: 'friends call him texas'
			},
			{
				name: 'will', 
				fact: 'comes up with jokes on the bart'
			}
		]
	});
});

app.get('/rabbit', function(req, res){
	res.render('pages/rabbit', {
		likesCarrots: true,
		name: 'bugs',
		strength: 'infinite' 
	});
});

app.listen(3000);
