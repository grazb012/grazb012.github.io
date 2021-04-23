$(document).ready(function() {

$(".oven").click(function() {
		 $(".degrees").text("375");
	});

$(".flour").click(function() {
		 $(".flour.inside").show("active");
	});

$(".salt").click(function() {
		 $(".salt.inside").show("active");
	});

$(".baking-soda").click(function() {
		 $(".baking-soda.inside").show("active");
	});

$(".baking-powder").click(function() {
		 $(".baking-powder.inside").show("active");
	});

$(".sugar").click(function() {
		 $(".sugar.inside").show("active");
	});

$(".brown-sugar").click(function() {
		 $(".brown-sugar.inside").show("active");
	});

$(".butter").click(function() {
		 $(".butter.inside").show("active");
	});

$(".eggs").click(function() {
		 $(".cracked-egg").show("active");
	});

$(".vanilla").click(function() {
		 $(".vanilla.inside").show("active");
	});

$(".mix.1").click(function() {
		 $(".dry.inside").show("active");
	});

$(".mix.2").click(function() {
		 $(".wet.inside").show("active");
	});

$(".mix.3").click(function() {
		 document.querySelector(".wet.inside4").style.backgroundColor = 'lightblue';
		 $(".cracked-egg").hide("active");
		 $(".vanilla.inside").hide("active");
	});

$(".mix.4").click(function() {
		 document.querySelector(".wet-mixed2").style.backgroundColor = 'tan';
	});

$(".chips-bag").click(function() {
		 $(".chips").show("active");
	});

$(".tray").click(function() {
		 $(".cookies.inside").show("active");
	});

$(".oven.end").click(function() {
		 document.querySelector(".time").style.color = 'white';
	});

});