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

	//Detect when user selects a card, changes background color, and capture card values in hand
	$(".card").click(addToHand);

	//# Toggle instructions or examples when button is clicked
	function revealInstructions(){
		 console.log("reveal text");
		 $(".instructions").slideToggle();
	}

	function revealExamples(){
		$(".examples").slideToggle();
	} 

	var counter = 0;

	var options = ["red", "green", "purple", "diamond", "oval", "squiggle", "blank", "full", "stripe", "one", "two", "three"];

	var handOfCards = [];
	
	function addToHand(){

		counter++

		if (counter > 3){
			// $(this).removeAttr(activeCard);
			// alert('You can select up to 3 cards');
			for(var i = 0; i < options.length; i++){
			var re = new RegExp(options[i], "g")
			var duplicates = handOfCards.match(re);
			if (duplicates){
				if (duplicates.length == 2) {
					console.log("invalid match");
					break;
				}
				else {
					if (i == options.length-1){
						console.log("match!");
						alert("you win!");
						counter = 0;
					}
				}
			} else {
				if (i == options.length-1){
					console.log("match");
					alert("you win!")
					counter = 0;
				}
			}
			console.log(duplicates);
			}
		}
		else {
			var activeCard = $(this);
			$(this).addClass("card-selected")
			
			var propertySet = $(this).find(".shape-container div:first-child").attr("class");//This selector finds the values of card properties by pinpointing the div
			var res = propertySet.split(" ");
			handOfCards = handOfCards.concat(res);
			console.log(handOfCards);

			//Let's create a string version of user's hand 
			handOfCards = JSON.stringify(handOfCards);
			console.log(handOfCards);

			//returns an array of occurences that match the the position in the array 
			// var occurencesOfRed = handOfCards.match(/red/g).length;
			// console.log(occurencesOfRed);
		}
	}

	//create function if only two of any value is true, then not a set

	//if not, it's a set! 

	var cards = [];

	var card0 = {
		color:"red", 
		shape:"oval", 
		shade:"blank", 
		number:"two"
	};
	var card1 = {
		color:"green", 
		shape:"diamond", 
		shade:"blank", 
		number:"two"
	};
	var card2 = {
		color:"purple", 
		shape:"diamond", 
		shade:"blank", 
		number:"two"
	};
	var card3 = {
		color:"purple", 
		shape:"squiggle", 
		shade:"full", 
		number:"three"
	};
	var card4 = {
		color:"green", 
		shape:"squiggle", 
		shade:"full", 
		number:"three"
	};
	var card5 = {
		color:"green", 
		shape:"oval", 
		shade:"blank", 
		number:"three"
	};
	var card6 = {
		color:"purple", 
		shape:"diamond", 
		shade:"stripe", 
		number:"two"
	};
	var card7 = {
		color:"green", 
		shape:"diamond", 
		shade:"stripe", 
		number:"one"
	};
	var card8 = {
		color:"red", 
		shape:"squiggle", 
		shade:"full", 
		number:"one"
	};
	var card9 = {
		color:"purple", 
		shape:"oval", 
		shade:"stripe", 
		number:"two"
	};
	var card10 = {
		color:"red", 
		shape:"diamond", 
		shade:"full", 
		number:"three"
	};
	var card11 = {
		color:"red", 
		shape:"diamond", 
		shade:"blank", 
		number:"two"
	};

	cards.push(card0);
	cards.push(card1);
	cards.push(card2);
	cards.push(card3);
	cards.push(card4);
	cards.push(card5);
	cards.push(card6);
	cards.push(card7);
	cards.push(card8);
	cards.push(card9);
	cards.push(card10);
	cards.push(card11);

	console.log(cards);

cards.forEach(function(element,index){
	}) 
  
  //for each card, add a set of <div>s equal to the current card's number property
  //provide each of those new DIV's with an appropriate class based off the other propeties

});

//Here are the values in the user's hand
// function valuesInHand{
// 	return addToHand <= 3;
// }

// function myFunction() {
// 		document.getElementByID("test").innerHTML = options.filter(valuesInHand);
// }

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