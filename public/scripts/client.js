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


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createdAt(time) {

return moment(time).fromNow();

}




const createTweetElement = function(tweetData) {

  let markup = $(`
  <article class="tweets">
  <header>
    <span id="username">${escape(tweetData.user.name)}</span>
    <span id="userhandle">${escape(tweetData.user.handle)}</span>
  </header>
    <p class="tweet-text"> ${escape(tweetData.content.text)}</p> 
  <footer>
    <p id="tweet-age">${createdAt(tweetData.created_at)}</p>
  </footer>
</article>  
`)
let $markup = $(markup);
return $markup;
}








const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);
  console.log($tweet);
// Test / driver code (temporary)
 // to see what it looks like
$(document).ready(function() {
$('#tweets-container').append($tweet);
})
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.