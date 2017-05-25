var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var botAction;
var usrInput;
var mocktext;
var botResponse;
var quoteChosen;
var picUrl;

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

function respond() {
	mock();
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\!hi bot$/,
      botHelp = /^\!help$/,
      botWeapon = "!whatis",
      botD12 = "!roll";
      botTime = "!countdown";
      botDrive = "!drive";
      botHands = "hands";
      botCatch = "catch";
      botFight = "fight";
      usrInput = request.text.toString();

  if (usrInput.includes(botFight || botHands || botCatch)) {
    this.res.writeHead(200);
    fightMessage();
    this.res.end();
  } else if(request.text && botRegex.test(request.text)) {
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
   } else if (request.text == botDrive) {
    this.res.writeHead(200);
    driveMessage();
    this.res.end();
   }else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function fightMessage () {
	var randNum = Math.floor((Math.random()*3)+1);
	if (randNum == 1) {
		botResponse = "do you wanna fucking go kid? i'll destroy you";
	}
	else if (randNum == 2) {
		botResponse = "oh look at this, a lil bitch is yelling at an inanimate object";
	}
	else {
		botResponse = "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.";
	}

	sendMessage();
}

function driveMessage() {
     var dl = "https://drive.google.com/drive/u/0/folders/0B2A5VZKUJWLaTnFBQ3QwbXNTSTg";
     botResponse = dl;
     sendMessage();
}

function quoteMessage() {
var collinPic = "https://m.popkey.co/a72599/K0rX8_f-thumbnail-100-0_s-600x0.jpg";
picUrl = collinPic;
sendPicture();
}

function sendPicture() {
/*	var options, body, botReq;
options = {
	hostname: 'api.groupme.com',
	path: '/v3/bots/post',
	method: 'POST';
};

body = {
	"bot_id" : botID;
*/
}

function milkfedBoys() {

}


function sendMessage() {
var options, body, botReq;

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

 /*    botReponse = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, and " + secondsLeft + " seconds left until next session.";
*/
	botResponse = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, and " + secondsLeft + " seconds reminaing until next session";
 sendMessage();
}

function rollD12() {
var rollAttempt = 0;
rollAttempt += Math.floor((Math.random()*12)+1);
var rollTotal = rollAttempt;
var rolled12 = false;
if (rollAttempt <= 12) {
	rolled12 = true;
}

do {
    rollAttempt += Math.floor((Math.random()*12)+1);
}
while (rolled12 = false); 

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

botResponse = "You rolled a " + rollAttempt + ". " + rollTurnout;
sendMessage();
}
	

function whatisMessage() {
var slicedText = usrInput.slice(8);
botResponse = slicedText;
var troy = "gay";

if (slicedText == "troy") {
     botResponse = "gay";
} else if (slicedText == "vis") {
     botResponse = "Vis is a currency in this universe, which can be farmed/mined from many resources. It can be found in water, vains, and many other options that I don't know.";
} else if (slicedText == "light armor") {
     botResponse = "Soak class: 2, -1 evade, -5 movement speed, -5 climbing and swimming speed";
} else if(slicedText == "medium armor") {
     botResponse = "Soak class: 3, -5 movement speed, -10 climbing and swimming speed";
} else if (slicedText == "jesse") {
     botResponse = "double gay";
} else if (slicedText == "ian")  {
     botResponse = "elfler, murderhobo, megalomaniac";
} else if (slicedText == "beth") {
     botResponse = "beth";
     sendMessage();
     botResponse = "just beth";
} else if (slicedText == "terrence") {
     botResponse = "a nice guy";
} else if (slicedText == "collin") {
     botResponse = "milkfed gay \u03A9";
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
sendMessage();
}


function helpMessage() {
  var helpResponse = "hello, my name is helpo robo, i am just a figment of all of your imagination to help you through this scary adventure. you can issue me commands. for example, if you say 'roll', i will roll a single d12 for you (i'm not advanced enough to accumulate rolls yet). if you say whatis light armor, i will tell you the specifics of whatever you're asking about. beep boop thank youp for supporting your nearby buddy, helpo robo.";
   botResponse = helpResponse;
   sendMessage();
}


exports.respond = respond;
