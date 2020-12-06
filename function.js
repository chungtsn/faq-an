// Code By Webdevtrick ( https://webdevtrick.com )
$(".gift").click(function() {
  $(".gift").addClass("active");
  $(".gift > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("one");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".pay").click(function() {
  $(".pay").addClass("active");
  $(".pay > .icon").addClass("active");
  $(".gift").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".gift > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".wrap").click(function() {
  $(".wrap").addClass("active");
  $(".wrap > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".gift").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".gift > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("three");
  $("#line").removeClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("four");
})

$(".ship").click(function() {
  $(".ship").addClass("active");
  $(".ship > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".gift").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".gift > .icon").removeClass("active");
  $("#line").addClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".gift").click(function() {
  $("#first").addClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".pay").click(function() {
  $("#first").removeClass("active");
  $("#second").addClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".wrap").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").addClass("active");
  $("#fourth").removeClass("active");
})

$(".ship").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").addClass("active");
})
