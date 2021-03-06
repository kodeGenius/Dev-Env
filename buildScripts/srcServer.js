var express = require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack';

//port declaration
var port = 3000;
var app = express();
const compiler=webpack(config);


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
