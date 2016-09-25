//Delays code from executing until all DOM assets have been loaded
$(document).ready(function(){

	//make sure js is working
	console.log("jQuery is up and running");

	//hide instructions and examples upon loading
		$(".instructions").hide();
		$(".examples").hide();

	//#1 Prevent form submission 
	event.preventDefault()

	//#2 Detect when "instructions" or "examples" is clicked 
	$(".instructions-button").click(revealInstructions);
	$(".examples-button").click(revealExamples);
	//of example button clicked and instructions are open, close instructions and vice versa

	//# Toggle instructions or examples when button is clicked
	function revealInstructions(){
		 console.log("reveal text");
		 $(".instructions").slideToggle();
	}

	function revealExamples(){
		$(".examples").slideToggle();
	}

})

//psuedo code the deck (6 cards to start), looping through and creating each card object on the DOM
//push card properties onto the card div 
//use jQuery to display image on the cards
//display card properties in the console
//create a hand var currentHand=[];
//$("div").click(function(){
	//if (currentHand.length <3){
		//$(this).hide();
		//var id = $(this).attr("class");
		//currentHand.push(cards[id]);
		//console.log(currentHand);
	//})
	//else {
		//var handArray =[];
		//currentHand.forEach(function(obj){
			//Object.keys(obj).map(function(key))
			//handArray.push(obj[key]);

		//})
	//});
	//console.log(handArray);
	//var red = handArray.match(red);
	//console.log("red", red)
//}
//});
//conditional logic for checking if it is a set 