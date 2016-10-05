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
	//if example button clicked and instructions are open, close instructions and vice versa

	// Hide alerts when page loads
	$(".alert").hide();

	//Detect when user selects a card, changes background color, and capture card values in hand
	$(".card").click(addToHand);

	//Reload page when reset button clicked
	$(".reset").click(refreshPage);

	//Change counter to 4 when Submit button is clicked
	//$(".submit").click(counterFour);

	//# Toggle instructions or examples when button is clicked
	function revealInstructions(){
		 console.log("reveal text");
		 $(".instructions").slideToggle();
	}

	function revealExamples(){
		$(".examples").slideToggle();
	} 

	function refreshPage(){
		window.location.reload();
	}

	var counter = 0;

	var options = ["red", "green", "purple", "diamond", "oval", "squiggle", "blank", "full", "stripe", "one", "two", "three"];

	var handOfCards = [];

	function addToHand(){

		counter++

		if (counter > 3){
			//Loops through all card options to find a match. 
			for(var i = 0; i < options.length; i++){
			var re = new RegExp(options[i], "g")
			var duplicates = handOfCards.match(re);
			//If there is a match of only two, log shows "invalid match"
			if (duplicates){
				if (duplicates.length == 2) {
					console.log("invalid match");
					$(".alert-error").show();
					break;
				}
				//If all three or one is present, it's a match
				else {
					if (i == options.length-1){
						console.log("match!");
						$(".alert-success").show();
						//create modal for match
						counter = 0;
					}
				}
			//completes first if statement in case last option is null
			} else {
				if (i == options.length-1){
					console.log("match");
					$(".alert-success").show();
					//create modal for match
					counter = 0;
				}
			}
			console.log(duplicates);
			}
		}
		else {
			//changes background color of selected card and concats all options into one string
			var activeCard = $(this);
			$(this).addClass("card-selected")
			
			var propertySet = $(this).find(".shape-container div:first-child").attr("class");//This selector finds the values of card properties by pinpointing the div
			var res = propertySet.split(" ");
			handOfCards = handOfCards.concat(res);
			console.log(handOfCards);

			//Let's create a string version of user's hand 
			handOfCards = JSON.stringify(handOfCards);
			console.log(handOfCards);
		}
	}

//create a submit button
//create a second level
//create a form 

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
});

