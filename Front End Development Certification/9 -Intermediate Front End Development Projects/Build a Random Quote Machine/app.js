$(document).ready(function() {
    genQuote();
    $('#generateQuote').on('click', genQuote);
});


function genQuote() {
    $("#quote_here").fadeOut();
    $("#wordowner").fadeOut();
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        cache: false,
        success: function (result) {
            console.log(result);
            $('#quote_here').html(result[0].content);
            $('#wordowner').html("~ " + result[0].title);
            var tweet= $('#quote_here').text();
            if(tweet.length >140){
                tweet = tweet.substring(0,140);
            }
            $('#tweet').attr('href', 'https://www.twitter.com/intent/tweet?text=' + tweet);
        }
    });

    $("#quote_here").fadeIn();
    $("#wordowner").fadeIn();
}