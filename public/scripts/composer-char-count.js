

//Counts the characters in the tweet

const charCounter = function() {

  const maxLength = 140;

  // Uses keydown to count each time a key is pressed, and subract one from the character count on the creat tweet form each time

  $("#send-tweet-input").on("input",function() {

    let tweetLength = $(this).val().length;
    tweetLength = maxLength - tweetLength;
    let $counter = $(this).siblings("span");
    $counter.text(tweetLength);

    if (tweetLength < 0) {
      $counter.addClass("error");
    } else {
      $counter.removeClass("error");
    }
  });
};


//Waits until the document is loaded to execute the code

$(document).ready(function() {
  charCounter();
});
