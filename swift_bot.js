/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


I removed all this boring header but it basically says the people that made BotKit are nice */


if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

//this is dumb. I wanted to make it read from a file but it's too hard. So here's a massive hard coded array of Taylor Swift facts.
var strings =
['Taylor Swift is so successful that she has won 11 American Music Awards, 7 Grammy Awards, and 6 Country Music Association Awards.',
'Taylor is the first country singer to win an MTV Video Music Award. Her video "You Belong with Me" won the Best Female Video award in 2009.',
'Taylor was born on December 13 1989 in Reading, Pennsylvania.',
'The exact time she was born is 5.17 a.m.',
'Adding the figures on the time of her birth, 5 + 1 + 7 = 13. 13 is Taylor\'s favorite number.',
'Taylor was born with the name "Taylor Alison Swift".',
'She was named after James Taylor.',
'Her parents are Scott and Andrea Swift.',
'Taylor is the youngest songwriter to be hired by Sony/ATV Music publishing house.',
'Taylor spent her childhood on an 11 acre Christmas tree farm.',
'Taylor Swift\'s height is 5\' 10\" or 1.77 m.',
'Taylor Swift\'s weight is 54 kg or 119 pounds.',
'Her hair color is blond, her eyes are blue in color and her measurements are 34-25-35 inches or 75-62-77 cm.',
'Taylor\'s bra size is 34 B.',
'Taylor\'s shoe size is 8.5 (US)',
'She attended school at West Reading Elementary Center and Wyomissing Area Junior/Senior High School.',
'Taylor Swift\'s favorite food is cheesecake.',
'The six things that are always in her refrigerator are eggs, thinly sliced ham and chicken, orange juice, diet coke, Parmigiano-Reggiano cheese and binge food like cookie dough or a tube of cinnamon rolls.',
'During show days she kicks off with a breakfast of eggs, sausage, biscuits and "anything else I can get my hands on".',
'At the age of 11, she won a local talent competition by singing a rendition of LeAnn Rimes\'s "Big Deal".',
'She has won a national poetry contest with her poem titled "Monster in My Closet".',
'The first song that she ever wrote was "Lucky You"',
'Her first hobby was English horse riding and she competed in horse shows.',
'She is terrified of snakes and spiders.',
'Her favorite holiday is Christmas.',
'Her favorite seasons are winter and summer.',
'Her favorite book is The Hunger Games and To Kill a Mockingbird',
'Her favorite color is Tiffany Blue.',
'Taylor is obsessed with Disney movies and everything about Disney.',
'She lend her voice in the animated film The Lorax a 2012 film playing the role of Audrey.',
'If Taylor likes a boy, she won\'t tell him face to face. Instead she will write a song about him.',
'Taylor Swift has only put one guy\'s name in the songs she\'s written about boys. The lucky guy is Lars.',
'Taylor likes to stick to tradition. She rarely branches out of what she prefers to be in.',
'Taylor is afraid of death. She is afraid of not having happy endings.',
'She has appeared in the film Valentine\'s Day (2010) and also in one episode of CSI in 2000.',
'She had a cameo in Hannah Montana: The Movie (2009)',
'Taylor loves mystery books. Her favorites are "Murder on the Orient Express" and "And Then There Were None" by Agatha Christie.',
'Taylor love quotes.',
'Her favorite quote at the moment is "just as things grow in fast movies, I had the familiar conviction that life was beginning over again with the summer." The quote is from the Great Gatsby.',
'She loves the subject of history and knows American history like the back of her hand.',
'Taylor can be very moody at times.',
'Taylor is the youngest artist in history to win a Grammy Award for Album of the year in 2010. She was only 20 years old at that time.',
'She contributed two songs to the movie The Hunger Games (2012). The songs are "Safe & Sound" and "Eyes Open".',
'Taylor\'s brother Austin Swift is a freelance photographer. He help photograph her Fearless Tour.',
'Her album "Fearless" is the most awarded album in the history of country music. The album is certified six times platinum.',
'Taylor is the top selling digital artist in history.',
'Taylor became the youngest sole writer and singer of a no.1 country song through her single "Our Song".',
'Her lead single "Love Story" released in 2008 became the 2nd best selling country single of all time.',
'She wrote all the songs in her third studio album "Speak Now".',
'She wrote 9 of the 16 songs in her fourth studio album "Red". The other 7 songs in the album she co-wrote it with Max Martin, Ed Sheeran, Gary Lightbody, Dan Wilson and Liz Rose.',
'Her single "We Are Never Ever Getting Back Together" released in August 2012 became Swift\'s first no.1 on the US Billboard Hot 100 chart.',
'The person she wrote about in her song "Tim McGraw" is named Johnny.',
'She was in a relationship with Joe Jonas from June 2008 to October 2008.',
'Taylor is fascinated with The Great Gatsby.',
'Taylor is best friends with Selena Gomez and Emma Stone. She is good friends with Kellie Pickler, Hayley Williams and Emma Watson.',
'Taylor loves "The Great Gatsby" as it fascinates her, with all the mystery and symbolism behind this story.',
'Her cousin Kristen is the subject of he song "Never Too Far Away".',
'Taylor admits that she is an extremely clumsy person and jokes that her parents always make fun of her because she spills everything.',
'Taylor likes to watch Brain Games aired on National Geographic. She also love Pretty Little Liars and Twisted and also Whodunnit.',
'Taylor is proud to be an introvert.',
'Although she admits being an introvert she is NOT shy.',
'Taylor believes that one can be a shy extrovert.',
'Since she\'s an introvert, being alone is sometimes regarded as recharging her batteries for her.',
'As an introvert, Taylor says she observes people in a conversation and thinks before she adds her own ideas to it.',
'Almost every night, Taylor and her best friend who lives down the street go biking around the block.',
'Her song "This is Us" is about her best friend.',
'Taylor connect songs, scents, and movies to specific times and places.',
'Taylor Swift loves YouTube videos.',
'Her favorite YouTubers are catrific, missglamorazzi, macbarbie07, meghanrosette, Kingsley, Jack and Finn, Smosh, and TheFineBros.',
'She loves to watch movies. While watching movies, she likes to observe everything in the movie from the acting to the soundtrack.',
'Taylor doesn\'t have a favorite movie but she LOVES every single Disney movie.',
'Taylor is one of those singers who love to write her own songs. To date she has written more than 40 songs and the number is growing every year.',
'The songs that she write is a reflection of her life, her daydreams and nothing else.',
'Her songs are extremely catchy and capture the heart of teenagers and young adults. Being able to connect to the high and lows of this generation - no wonder she\'s so popular)',
'Which one do you think Taylor loves more? Silver Jewelry or Gold? Answer : Silver Jewelry.',
'Cleaning her room while listening to "Taylor" is one of her favorite things in life.',
'She is always fascinated with psychology and personality types and how her brain works.',
'She considers herself an optimist. But her optimism also depends on the situation.',
'Taylor is not a realist. She pretty much likes to be a dreamer.',
'She is obsessed with iPhone cases especially the vintage, handmade ones that can be found on Etsy.',
'She act in plays and has found lots of friends in the plays.',
'Taylor\'s favorite place is the ocean. She loves Long Beach Island and plans to buy a house there when she\'s old.',
'She is afraid of beetles.',
'Taylor admits that she has trouble accepting changes.',
'Taylor is an introvert and rarely tells others what is in her mind.',
'She spends a lot of time thinking of herself and life and theories and metaphors.',
'She likes to DIY. Taylor buys things for herself and like to finish them herself.',
'Summer to her is like the 1940s style. She imagines herself spending time with friends and family in a lake house.',
'She hates medical school. ',
'Her ultimate dream is to be a singer and songwriter. Our Taylor is definitely living her dream right now.',
'If she was not a singer she would probably be an interior designer, detective, neurologist or psychologist.',
'She loves to travel long distance in a car, enjoying long rides of more than 4 hours plus.',
'She has an attachment to places that have a profound effect in her life. School would be one of them.',
'She is more like her dad. Both of them like to make decisions rationally based on the mind and not the heart.',
'Taylor and her dad both love English and they read the same books. Father and daughter are like best friends.',
'Her favorite series is The Divergent Trilogy by Veronica Roth.',
'She likes to put on sunscreen.',
'Taylor is obsessed with everything regarding Disney.',
'Taylor\'s mum\'s side family reunion has more than 50 people.',
'One of her dreams is to be on the Ellen show.',
'Kanye West once robbed Taylor\'s mic during the VMA award show.;']

//a date in the past, so that a fact gets posted when the bot is started
var datelastfactposted=new Date("October 13, 2014 11:13:00");

//I think this is also a bit poor - checks every 'tick' if it's ok to post a fact, even though it will only be OK once a day.
controller.on('tick',function(bot,message){
  if(checkifitsOKtopostafactnow()){
    postdailyfact();
  }
});

//if i hear the word 'fact', that's when I post a fact
controller.hears(['fact'],'direct_mention,mention',function(bot,message){
      postafact(message);
});

controller.on('')
//this was useful for testing, leaving it there incase
/*controller.hears(['fact'],'direct_mention,mention',function(bot,message){

    if(checkifitsOKtopostafactnow()){
    for(i=0;i<10;i++){
      postafact();
    }
  }
});*/

//checks if it is OK to post a fact based on criteria. We only want one a day.
function checkifitsOKtopostafactnow(){
  //only want to post a fact if it's after noon
  //and if there hasn't already been one posted today
  //there's probably a less awful way to do this but /shrug
  var currenthour=new Date().getHours();
  if(currenthour>11&&datelastfactposted.getDate()!=new Date().getDate()){
    return true;
  }
  else {
    return false;
  }
}

//post a fact of the day
function postdailyfact(){
  var randomnumber=Math.floor(Math.random()*strings.length);
  var fact=strings[randomnumber];
  bot.say(
    {
      text: "*Taylor Swift Fact of the Day:*\n"+fact,
      channel: 'C1HM69NBE'
    }
  );
  datelastfactposted=new Date();
}

//post a fact on demand
function postafact(message){
  var randomnumber=Math.floor(Math.random()*strings.length);
  var fact=strings[randomnumber];
  bot.say(
    {
      text: "*Here's a fun fact about Taylor Swift:*\n"+fact,
      channel: message.channel
    }
  );
}

//I want to know when the bot shuts down. I thought it would stay up forever.
controller.on('rtm_close', function(bot,message){
  bot.say(
    {
      text: "Bye",
      channel: message.channel
    }
  )
})

//below is other stuff the sample bot came with that might be useful.

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });


    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, "I've got a blank space, ' + user.name + ', and I'll write your name!!");
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});


controller.hears(['shutdown'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.startConversation(message, function(err, convo) {

        convo.ask('Are you sure you want me to shutdown?', [
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say("Now we've got bad blood...");
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    }, 3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});


controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'],
    'direct_message,direct_mention,mention', function(bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':robot_face: I am a bot named <@' + bot.identity.name +
             '>. I have been running for ' + uptime + ' on ' + hostname + '.');

    });

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
