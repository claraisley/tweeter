/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//Function that ensures that a user cannot put javascript in their tweet to hack someone else's browser, for security reasons.

const escape = function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Uses monent to return date in relation to the time now, eg. a few seconds ago, or 2 minutes ago

const createdAt = function(time) {
  return moment(time).fromNow();
};

//Loops through the array of tweet objects and appends each one to the "tweets-container"

const renderTweets = function(tweets) {

  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

//Takes tweet JSON object and generates the DOM structure for a tweet, based on that object

const createTweetElement = function(tweet) {

  const markup = $(`
  <article class="tweets">
    <header>
      <img id="avatar" src=${tweet.user.avatars}> 
      <div class="user-details">
      <span id="username">${escape(tweet.user.name)}</span>
      <span id="userhandle">${escape(tweet.user.handle)}</span>      
      </div>
    </header>
      <p class="tweet-text"> ${escape(tweet.content.text)}</p> 
    <footer>
     <p id="tweet-age">${createdAt(tweet.created_at)}</p>
      <div class="icons">
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>      
      <i class="fas fa-flag"></i> 
      </div>
    </footer>
  </article>  
`);
  const $markup = $(markup);
  return $markup;
};


// AJAX POST request

const postRequest = function() {

  $(".form-inline").submit(() => {
    event.preventDefault();

    const tweetLength = $("#send-tweet-input").val().length;

    if (tweetLength <= 0) {
      $(".alert-no-data").slideDown();
      $('.alert-no-data').delay(5000).fadeOut('slow');
      return;
    } else if (tweetLength > 140) {
      $(".alert-too-many-chars").slideDown(function() {
        $('.alert-too-many-chars').delay(5000).fadeOut('slow');
      });
      return;
    } else {
      const data = $(".form-inline").serialize();

      $.post("/tweets", data, () => {
        console.log("success");
      })
        .done(function() {
          loadTweets();
          $(".form-inline")[0].reset();
          $("#counter").text(140);
        });
    }
  });
};

//AJAX GET request

const loadTweets = function() {
  const path = "/tweets";

  $.getJSON(path)
    .done(data => {
      $("#tweets-container").empty();
      renderTweets(data);
    });
};




//When document is ready, the post request is made and the tweets are loaded to the main page

$(document).ready(function() {
  postRequest();
  loadTweets();
  $(".compose").click(function() {
    $("#toggle-class").toggleClass("new-tweet");
  });
});