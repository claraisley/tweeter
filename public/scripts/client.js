/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//Function that ensures that a user cannot put javascript in their tweet to hack someone else's browser, for security reasons.

function escape(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//Uses monent to return date in relation to the time now, eg. a few seconds ago, or 2 minutes ago

function createdAt(time) {
  return moment(time).fromNow();
}

//Loops through the array of tweet objects and appends each one to the "tweets-container"

const renderTweets = function(tweets) {

  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
}

//Takes tweet JSON object and generates the DOM structure for a tweet, based on that object

const createTweetElement = function(tweet) {

  const markup = $(`
  <article class="tweets">
    <header>
      <img id="avatar"> ${tweet.user.avatar}</img>
      <span id="username">${escape(tweet.user.name)}</span>
      <span id="userhandle">${escape(tweet.user.handle)}</span>
    </header>
      <p class="tweet-text"> ${escape(tweet.content.text)}</p> 
    <footer>
     <p id="tweet-age">${createdAt(tweet.created_at)}</p>
      <div id="footer-icons">
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>      
      <i class="fas fa-flag"></i> 
      </div>
    </footer>
  </article>  
`)
  const $markup = $(markup);
  return $markup;
}


// AJAX POST request
const postRequest = function() {

$(".form-inline").submit(() => {
  event.preventDefault();

  const data = $(".form-inline").serialize();

  $.post("/tweets", data, () => {
    console.log("success");
  })
})
}

//AJAX GET request

const loadTweets = function() {
  const path = "/tweets";

  $.getJSON(path)
    .done(data => {
      renderTweets(data);
    })
}


//Renders tweets when the document is ready

$(document).ready(function() {
  postRequest();
  loadTweets();
});

