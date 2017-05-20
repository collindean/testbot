var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var botAction;
var usrInput;
var mocktext;
var quoteNum;

function mock() {
/* ar request = JSON.parse(this.req.chunks[0]);
var willidoit = Math.floor((Math.random() * 100 + 1));
if (willidoit = 100){
	Random rnd = new Random();
	StringBuilder sb = new StringBuilder(request.length());
	
	for (char c : request.toCharArray())
		sb.append(rnd.nextBoolean()
			? Character.toLowerCase(c)
			: Character.toUpperCase(c));
	mocktext = request;
	mockMessage();
} 
*/
 
}

function quoteMessage() {
troyQuote = "";
ianQuote = "";
terrenceQuote = "";
bethQuote = ""; 
jeremyQuote = "";
jesseQuote = "";


}

function mockMessage() {
var botResponse, options, body, botReq;

  botResponse = mocktext;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

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

function respond() {
	mock();
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\!hi bot$/,
      botHelp = /^\!help$/,
      botWeapon = "!whatis",
      botD12 = "!roll";
      botTime = "!countdown";
      
      usrInput = request.text.toString();

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    botAction = 1;
    postMessage();
    this.res.end();
  } else if(request.text && botHelp.test(request.text)) {
    this.res.writeHead(200); 
    botAction = 2;
    helpMessage();
    this.res.end();    
  } else if (request.text.slice(0,7) == botWeapon) {
    this.res.writeHead(200);
    botAction = 3;
    whatisMessage();
    this.res.end();
    } else if (request.text == botD12) {
    this.res.writeHead(200);
    botAction = 4; 
    rollD12();
    this.res.end();
   } else if (request.text == botTime)  {
   this.res.writeHead(200);
   botAction = 5;
   countdownMessage();
   this.res.end();
   } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function countdownMessage() {
     var d = new Date();
     var w = d.getUTCMilliseconds() - 21600000;
     d.setTime(w);
     var n = d.getDay();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();

     var secondsLeft = 60 - s;
     var minutesLeft = 60 - m;
     var hoursLeft = 23 - h;
     var daysLeft = 6 - n;

    if (secondsLeft > 0) { 
       minutesLeft -= 1;
     }

     if (minutesLeft > 0) {
       hoursLeft -= 1;
     }

     if (hoursLeft > 0)  {
       daysLeft -= 1;
     }  

     var botResponse, options, body, botReq;

 /*    botReponse = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, and " + secondsLeft + " seconds left until next session.";
*/
	botResponse = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, and " + secondsLeft + " seconds reminaing until next session";
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

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

function rollD12() {
var botResponse, options, body, botReq;
var rollAttempt = Math.floor((Math.random()*12)+1);
var rollTotal = rollAttempt;
var rolled12 = false;

if (rollAttempt >= 12) {
	rolled12 = true;
}

while (rolled12 = true) {
rollAttempt = Math.floor((Math.random()*12)+1);
rollTotal += rollAttempt;
if (rollAttempt > 12) {
rolled12 = false
}
}


var rollTurnout;

if (rollAttempt >= 50) {
	rollTurnout = "Tier 6, you won life.";
} else if (rollAttempt >= 40) {
	rollTurnout = "Tier 5, that's godlike!!!";
} else if (rollAttempt >= 30) {
	rollTurnout = "Tier 4, that's amazing!!";
} else if (rollAttempt >= 20) { 
	rollTurnout = "Tier 3, that's good!";
} else if (rollAttempt >= 10) { 
	rollTurnout = "Tier 2, you made it, just barely";
} else if (rollAttempt >= 2) { 
	rollTurnout = "Tier 1, you might be ok?";
} else if (rollAttempt = 1) { 
	rollTurnout = "lol you fucking suck";
} else { rollTurnout = "i'm not sure what happened here";
}

botResponse = "You rolled a " + rollTotal + ". " + rollTurnout;

options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

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
	

function whatisMessage() {
var botResponse, options, body, botReq;
var slicedText = usrInput.slice(8);
var botResponse = slicedText;
var troy = "gay";

if (slicedText == "troy") {
     botResponse = "gay";
} else if (slicedText == "vis") {
     botResponse = "Vis is a currency in this universe, which can be farmed/mined from many resources. It can be found in water, vains, and many other options that I don't know.";
} else if (slicedText == "light armor") {
     botResponse = "Soak class: 2, -1 evade, -5 movement speed, -5 climbing and swimming speed";
} else if (slicedText == "medium armor") {
     botResponse = "Soak class: 3, -5 movement speed, -10 climbing and swimming speed";
} else if (slicedText == "heavy armor") {
     botResponse = "Soak class: 4, -3 evade, -10 movement speed, -15 climbing and swimming speed";
} else if (slicedText == "light melee") {
     botResponse = "DC: 4, Equip AP: 1, Attack AP: 2, easily concealable and usable in one hand";
} else if (slicedText == "medium melee") {
    botResponse = "DC: 6, Equip AP: 1, Attack AP: 2, not concealable, and useable in one hand";
} else if (slicedText == "heavy melee") { 
     botResponse = "DC: 8, Equip AP: 2, Attack: 2, not concealable, and requires two hands to wield effectively. One handing a heavy weapon results in a -4 to strike and accuracy rolls";
} else {
     botReponse = "i don't quite follow, try being coherent"; 
}

options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

body = {
   "bot_id" : botID,
   "text" : botResponse
};

console.log('sending ' + botResponse + ' to ' + botID);

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

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = "can i help you?";
  var hiResponse = "hi";
  var helpResponse = "well i CAN help";
  var brokeResponse = "congrats, you broke me";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

if (botAction = 1) {
  botResponse = hiResponse;
 } else if (botAction = 2) {
  botResponse = helpResponse;
 } else {
  botResponse = brokeResponse;
}

body = {
   "bot_id" : botID,
   "text" : botResponse
};

console.log('sending ' + botResponse + ' to ' + botID);

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

function helpMessage() {
  var botResponse, options, body, botReq;

  botResponse = "can i help you?";
  var hiResponse = "hi";
  var helpResponse = "hello, my name is helpo robo, i am just a figment of all of your imagination to help you through this scary adventure. you can issue me commands. for example, if you say 'roll', i will roll a single d12 for you (i'm not advanced enough to accumulate rolls yet). if you say whatis light armor, i will tell you the specifics of whatever you're asking about. beep boop thank youp for supporting your nearby buddy, helpo robo.";
  var brokeResponse = "congrats, you broke me";

  botResponse = helpResponse;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : helpResponse
  };

console.log('sending ' + helpResponse + ' to ' + botID);

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
