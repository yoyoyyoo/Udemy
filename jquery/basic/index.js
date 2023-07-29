// $(document).ready(function(){
//     $("h1").css("color","red");
// })
//normally this code appear when jqury cdn is in the header section

 $("h1").css("color","red"); //this code not recommend, should keep js to only about behavior
//.css method, 1 element will show the css attribute, 2 elements can make a change to first attribute
console.log($("h1").css("color"))

//$("button").addClass("big-title"); //this is recomended, define a css class in css and add it to the element

//.removeClass can use to remove class

$("button").addClass("big-title  margin-50");

$("button").text("don't click"); //will change the text of all buttons

$("button").html("<em>Hey</em>");
console.log($("a").attr("href"));
$("a").attr("href","http://www.yahoo.com");

//add event listener
$("h1").click(function(){
    $("h1").css("color","blue");
})

$("button").click(function(){
    $("h1").text("change it");
    $("button").css("color","purple");
})

$("input").keypress(function(){
    $("h1").css("color", "brown");
})

$("body").keypress(function(e){ //SAME AS    $(document)
    console.log(e.key);
})

$(document).keypress(function(e){
    $("h1").text(e.key);
})

$("h1").on("mouseover",function(){ //on can be used to attach various event handler
    $("h1").css("color", "black");
})

//add new element
$("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

//remove element
//$("button").remove(); //remove all


$("button").on("click", function(){
    //$("h1").hide();
    //$("h1").toggle();//fadein, fadeout, slideDown,SlideToggle,
    //$("h1").animate({opacity:0.5});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})