var fs = require('fs');
var iikanji = require('./');

var http = require('http');

// use http.request
http.request({
  hostname:'distilleryvesper2-6.ak.instagram.com',
  path:'/f6e17f74283a11e3b6f822000a1f8cdf_101.mp4'},function(res){
    iikanji(res).pipe(fs.createWriteStream([__dirname,'test.mp4'].join('/')));
  }).end();

// use http.get
http.get('http://distilleryvesper2-6.ak.instagram.com/f6e17f74283a11e3b6f822000a1f8cdf_101.mp4',function(res){
  iikanji(res).pipe(fs.createWriteStream([__dirname,'test.mp4'].join('/')));
});

// use https://www.npmjs.org/package/request
var request = require('request');      
var client = request("http://distilleryvesper2-6.ak.instagram.com/f6e17f74283a11e3b6f822000a1f8cdf_101.mp4");
iikanji(client).pipe(fs.createWriteStream([__dirname,'test.mp4'].join('/')));
