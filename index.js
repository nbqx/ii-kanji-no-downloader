var ii = require('ii-kanji-no-progress-bar');

function myRound(v,n){
  var p = Math.pow(10,n);
  return Math.round(v*p)/p
};

module.exports = function(client){
  var _len = 0,
      done = 0;
  var pgb = ii(100);

  if(client._events['end']===undefined){
    return client.on('response',function(res){
      _len = res.headers['content-length'];
    }).on('data',function(data){
      var prg = done/_len*100;
      done = done + data.length;
      console.log(pgb.tick(myRound(prg,2)));
    }).on('end',function(){
      console.log(pgb.tick(101));
    });
  }

  // http.request => call end() manually
  // http.get => call end() automatically
  else{
    _len = client.headers['content-length'];
    client.on('data',function(data){
      var prg = done/_len*100;
      done = done + data.length;
      console.log(pgb.tick(myRound(prg,2)));
    }).on('end',function(){
      console.log(pgb.tick(101));
    });
    return client
  }
  
};
