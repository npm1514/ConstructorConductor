/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var tyler = new User("tyler", "tmac@gmail.com", "pw");

console.log('Tyler\'s information is ' + tyler);
//Console.log all of Tylers information

  //code here
var lenny = new User("lenny", "lenny@gmail.com", "password1");

console.log('Lenny\'s information is ' + lenny);
//Now console.log all of Lennys information

  //code here
var joe = new User("joe", "joe@gmail.com", "h8erade");

console.log('Joe\'s information is ' + joe);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
var nick = new User("nick", "npm@gmail.com", "tuneyards");

console.log('All my users names are ' + nick);
//Now loop through your users Array and console.log every users name. 

  //code here
users.push(tyler, lenny, joe, nick);