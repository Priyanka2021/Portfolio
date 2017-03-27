$("#start").click(function(){
 $("#q1").show();
});
// $("#start").click(function(){
  $("#q1").hide();
// });


var gryffindor = 0;
$("#submit1").click(function() {
    gryffindor += 1;
});
var ravenclaw = 0;
$("#submit2").click(function() {
    ravenclaw += 1;
});
var slytherin = 0;
$("#submit3").click(function() {
    slytherin += 1;
});
var hufflepuff = 0;
$("#submit4").click(function() {
    hufflepuff += 1;
});



$("#submit5").click(function() {
    gryffindor += 1;
});

$("#submit6").click(function() {
    ravenclaw += 1;
});

$("#submit7").click(function() {
    slytherin += 1;
});

$("#submit8").click(function() {
    hufflepuff += 1;
});




$("#submit9").click(function() {
    gryffindor += 1;
});

$("#submit10").click(function() {
    ravenclaw += 1;
});

$("#submit11").click(function() {
    slytherin += 1;
});

$("#submit12").click(function() {
    hufflepuff += 1;
});



$("#submit13").click(function() {
    gryffindor += 1;
});

$("#submit14").click(function() {
    ravenclaw += 1;
});

$("#submit15").click(function() {
    slytherin += 1;
});

$("#submit16").click(function() {
    hufflepuff += 1;
});



$("#submit17").click(function() {
    gryffindor += 1;
});

$("#submit18").click(function() {
    ravenclaw += 1;
});

$("#submit19").click(function() {
    slytherin += 1;
});

$("#submit20").click(function() {
    hufflepuff += 1;
});



$("#submit").click(function() {
     var response = $("#start").val();
     var scores = [gryffindor, ravenclaw, slytherin, hufflepuff];
     var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
     
     var max = 0;
     var house = "";
     for (var i = 0; i < 4; i++) {
         if (scores[i] > max) {
             max = scores[i];
             house = houses[i];
         }
     } 
     $("#q1").html("You are in " + house);
     
     /*
    if (gryffindor > 2) {
        $("p").html("Congratulations, you are in Gryffindor");
}
    if (ravenclaw > 2) {
        $("p").html("Congratulations, you are in Ravenclaw");
}
    if (slytherin > 2) {
        $("p").html("Congratulations, you are in Slytherin");
}
    if (hufflepuff > 2) {
        $("p").html("Congratulations, you are in Hufflepuff");
    }*/
});