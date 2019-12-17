$(document).ready(function() {

  const maxLength = 140;

  $("#send-tweet-input").keydown(function() {
    // console.log(this); //html elemen
    // console.log($(this)); //jquerified element 
   
    let tweetLength = $(this).val().length;
    tweetLength = maxLength - tweetLength;
    let $counter = $(this).siblings("span");
    $counter.text(tweetLength);

    if (tweetLength < 0) {
      $counter.addClass("red-text")
    }
  })

});