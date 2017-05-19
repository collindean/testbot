var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var botAction = 0;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\hi bot$/;
      botHelp = /^\help$/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    botAction = 1;
    postMessage();
    this.res.end();
  } else if {
    this.res.writeHead(200); 
    botAction = 2;
    postMessage();
    this.res.end();    
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, helpResponse, brokeResponse, options, body, botReq;

  botResponse = "hi";
  helpResponse = "well i CAN help";
  brokeResponse = "congrats, you broke me";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : "hi"
  };
if (botAction = 1) {
  console.log('sending ' + botResponse + ' to ' + botID);
 } else if (botAction = 2) {
  console.log('sending ' + helpResponse + ' to ' + botID);
 ) else {
  console.log('sending ' + brokeResponse + ' to ' + botID);
}

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
