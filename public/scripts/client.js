/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweet = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// Test / driver code (temporary). Eventually will get this from the server.

//Function that ensures that a user cannot put javascript in their tweet to hack someone else's browser, for security reasons.

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//Uses monent to return date in relation to the time now, eg. a few seconds ago, or 2 minutes ago

function createdAt(time) {
  return moment(time).fromNow();
}


//Takes tweet JSON object and generates the DOM structure for a tweet, based on that object

const createTweetElement = function(tweet) {

  let markup = $(`
  <article class="tweets">
  <header>
    <span id="username">${escape(tweet.user.name)}</span>
    <span id="userhandle">${escape(tweet.user.handle)}</span>
  </header>
    <p class="tweet-text"> ${escape(tweet.content.text)}</p> 
  <footer>
    <p id="tweet-age">${createdAt(tweet.created_at)}</p>
  </footer>
</article>  
`)
let $markup = $(markup);
return $markup;
}



// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//Loops through the array of tweet objects and appends each one to the "tweets-container"

const renderTweets = function(tweets) {

  for
}


// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

const $tweet = createTweetElement(tweetData);
  console.log($tweet);
// Test / driver code (temporary)
 // to see what it looks like
$(document).ready(function() {
$('#tweets-container').append($tweet);
})
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.