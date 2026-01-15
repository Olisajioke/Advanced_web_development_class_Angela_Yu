



$("h1").css("color", "blue");
$("a").attr("href", "https://www.yahoo.com");
$("button").css("background-color", "grey");

$("button").click(function() {
    $("h1").css("color", "red");
    });



$(document).keydown(function(event) {
    $("h1").text(event.key);
    console.log(event.key);
});


$("button").click(function() {
    $("h1").fadeToggle();
})


//setTimeout(function() {
    $("h1").removeAttr("style");
//}, 3000);