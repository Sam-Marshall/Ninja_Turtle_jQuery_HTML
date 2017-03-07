	window.onload = function(){

	var fighterPicked = false;
	var fighter = "";
	var defender = "";
	var fighterLife = 1;
	var fighterStrength = 0;
	var defenderStrength = 0;
	var defenderLife = 1;
	var opponentsDefeated = 0;
	var fighterDefeated = false;

	var characterList = {

		"Raphael" : {
			"Name" : "Raphael",
			"Life" : 45,
			"Strength": 10 },
		
		"Donatello" : {
			"Name" : "Donatello",
			"Life" : 55,
			"Strength" : 10 },
		
		"Leonardo" : {
			"Name" : "Leonardo",
			"Life" : 60,
			"Strength" : 15 },
		
		"Michelangelo" : {
			"Name" : "Michelangelo",
			"Life" : 50,
			"Strength" : 15 }

	};	

	var $RaphaelLife = $(".RaphaelLife");
	var $DonatelloLife = $(".DonatelloLife");
	var $LeonardoLife = $(".LeonardoLife");
	var $MichelangeloLife = $(".MichelangeloLife");
	var $fighterChoice = $("#fighterChoice");
	var $defenderChoice = $("#defenderChoice");
	var $enemiesAvailable = $("#enemiesAvailable");
	var $fightStats = $("#fightStats");
	var $Raphael = $("#Raphael");
	var $Donatello = $("#Donatello");
	var $Leonardo = $("#Leonardo");
	var $Michelangelo = $("#Michelangelo");
	var $fighterOptions = $("#fighterOptions");
	var $deleteOne = $(".deleteOne");
	

	function fighterStatsChange(x, y){
		if (x === characterList.Raphael.Name){
			$RaphaelLife.html(fighterLife);
		}
		else if (x === characterList.Donatello.Name){
			$DonatelloLife.html(fighterLife);			
		}
		else if (x === characterList.Leonardo.Name){
			$LeonardoLife.html(fighterLife);			
		}
		else if (x === characterList.Michelangelo.Name){
			$MichelangeloLife.html(fighterLife);			
		}
		
		if (y === characterList.Raphael.Name){
			$RaphaelLife.html(defenderLife);
		}
		else if (y === characterList.Donatello.Name){
			$DonatelloLife.html(defenderLife);			
		}
		else if (y === characterList.Leonardo.Name){
			$LeonardoLife.html(defenderLife);			
		}
		else if (y === characterList.Michelangelo.Name){
			$MichelangeloLife.html(defenderLife);
		}
	}
	
	function checkIfDead(x, y, a, b){
		if (x <= 0 && a === characterList.Raphael.Name){
			$Raphael.css('display', 'none');
			$fighterOptions.append($Raphael);
			$fighterChoice.append(fighter.toUpperCase() + " has died. You lose! Press reset to play again!");
			fighter = "";
			fighterDefeated = true;
		}
		else if (x <= 0 && a === characterList.Donatello.Name){
			$Donatello.css('display', 'none');
			$fighterOptions.append($Donatello);
			$fighterChoice.append(fighter.toUpperCase() + " has died. You lose! Press reset to play again!");
			fighter = "";
			fighterDefeated = true;			
		}
		else if (x <= 0 && a === characterList.Leonardo.Name){
			$Leonardo.css('display', 'none');
			$fighterOptions.append($Leonardo);			
			$fighterChoice.append(fighter.toUpperCase() + " has died. You lose! Press reset to play again!");
			fighter = "";
			fighterDefeated = true;			
		}
		else if (x <= 0 && a === characterList.Michelangelo.Name){
			$Michelangelo.css('display', 'none');			
			$fighterOptions.append($Michelangelo);			
			$fighterChoice.append(fighter.toUpperCase() + " has died. You lose! Press reset to play again!");
			fighter = "";
			fighterDefeated = true;			
		}		

		if (y<=0 && b === characterList.Raphael.Name){
			$Raphael.css('display', 'none');
			$fighterOptions.append($Raphael);
			$defenderChoice.append(defender.toUpperCase() + " has been defeated. You win! Please choose another opponent!");
			defender = "";	
			opponentsDefeated += 1;	
			console.log(opponentsDefeated);	
		}
		else if (y<=0 && b === characterList.Donatello.Name){
			$Donatello.css('display', 'none');
			$fighterOptions.append($Donatello);
			$defenderChoice.append(defender.toUpperCase() + " has been defeated. You win! Please choose another opponent!");
			defender = "";	
			opponentsDefeated += 1;	
			console.log(opponentsDefeated);						
		}
		else if (y<=0 && b === characterList.Leonardo.Name){
			$Leonardo.css('display', 'none');
			$fighterOptions.append($Leonardo);
			$defenderChoice.append(defender.toUpperCase() + " has been defeated. You win! Please choose another opponent!");
			defender = "";	
			opponentsDefeated += 1;	
			console.log(opponentsDefeated);						
		}
		else if (y<=0 && b === characterList.Michelangelo.Name){
			$Michelangelo.css('display', 'none');
			$fighterOptions.append($Michelangelo);
			$defenderChoice.append(defender.toUpperCase() + " has been defeated. You win! Please choose another opponent!");
			defender = "";	
			opponentsDefeated += 1;	
			console.log(opponentsDefeated);						
		}		
	}

	function resetGame(){
			
			if (fighterPicked === true){

				$deleteOne.html($("<h3>Choose Your Turtle</h3>"));
				$(".players").append($Raphael);
				$(".players").append($Donatello);
				$(".players").append($Leonardo);
				$(".players").append($Michelangelo);			
				$Raphael.css('display', 'inline-block');
				$Donatello.css('display', 'inline-block');
				$Leonardo.css('display', 'inline-block');
				$Michelangelo.css('display', 'inline-block');
				$RaphaelLife.html(characterList.Raphael.Life);
				$DonatelloLife.html(characterList.Donatello.Life);
				$LeonardoLife.html(characterList.Leonardo.Life);
				$MichelangeloLife.html(characterList.Michelangelo.Life);
				$fighterChoice.html("");
				$enemiesAvailable.html("");
				$defenderChoice.html("");
				$fightStats.html("");
				fighterPicked = false;
				fighter = "";
				defender = "";
				fighterLife = 1;
				fighterStrength = 0;
				defenderStrength = 0;
				defenderLife = 1;	
				opponentsDefeated = 0;
				fighterDefeated = false;					

	}
}

		$Raphael.on('click', function(){
			if (fighterPicked === false){
				
				$fighterChoice.append($Raphael);
				$enemiesAvailable.append($Donatello);
				$enemiesAvailable.append($Leonardo);	
				$enemiesAvailable.append($Michelangelo);
				$deleteOne.empty();				
				$deleteOne.html("Choose Your Opponent");
				fighterPicked = true;	
				fighter = characterList.Raphael.Name;
				fighterLife = characterList.Raphael.Life;
				fighterStrength = characterList.Raphael.Strength;
				// console.log(fighterPicked);	
				// console.log(fighter);

		}
			else if (fighterPicked === true && fighter != characterList.Raphael.Name && defender === ""){

				$defenderChoice.html($Raphael);
				$fightStats.empty();				
				defender = characterList.Raphael.Name;
				defenderStrength = characterList.Raphael.Strength;
				defenderLife = characterList.Raphael.Life;
				$deleteOne.html("FIGHT!");				

			}
		});	

		$Donatello.on('click', function(){
			if (fighterPicked === false){

				$fighterChoice.append($Donatello);
				$enemiesAvailable.append($Raphael);
				$enemiesAvailable.append($Leonardo);
				$enemiesAvailable.append($Michelangelo);
				$deleteOne.empty();
				$deleteOne.html("Choose Your Opponent");				
				fighterPicked = true;	
				fighter = characterList.Donatello.Name;
				fighterLife = characterList.Donatello.Life;
				fighterStrength = characterList.Donatello.Strength;				
				// console.log(fighterPicked);	
				// console.log(fighter);
		}
			else if (fighterPicked === true && fighter != characterList.Donatello.Name && defender === ""){

				$defenderChoice.html($Donatello);
				$fightStats.empty();			
				defender = characterList.Donatello.Name;				
				defenderStrength = characterList.Donatello.Strength;
				defenderLife = characterList.Donatello.Life;
				$deleteOne.html("FIGHT!");					

			}
			
		});	

		$Leonardo.on('click', function(){
			if (fighterPicked === false){	

				$fighterChoice.append($Leonardo);
				$enemiesAvailable.append($Raphael);
				$enemiesAvailable.append($Donatello);
				$enemiesAvailable.append($Michelangelo);
				$deleteOne.empty();			
				$deleteOne.html("Choose Your Opponent");
				fighterPicked = true;
				fighter = characterList.Leonardo.Name;
				fighterLife = characterList.Leonardo.Life;
				fighterStrength = characterList.Leonardo.Strength;			
				// console.log(fighterPicked);	
				// console.log(fighter);
		}	
			else if (fighterPicked === true && fighter != characterList.Leonardo.Name && defender === ""){

				$defenderChoice.html($Leonardo);
				$fightStats.empty();			
				defender = characterList.Leonardo.Name;				
				defenderStrength = characterList.Leonardo.Strength;
				defenderLife = characterList.Leonardo.Life;	
				$deleteOne.html("FIGHT!");								

			}

		});	

		$Michelangelo.on('click', function(){
			if (fighterPicked === false){	

				$fighterChoice.append($Michelangelo);
				$enemiesAvailable.append($Raphael);
				$enemiesAvailable.append($Donatello);
				$enemiesAvailable.append($Leonardo);
				$deleteOne.empty();			
				$deleteOne.html("Choose Your Opponent");
				fighterPicked = true;
				fighter = characterList.Michelangelo.Name;
				fighterLife = characterList.Michelangelo.Life;
				fighterStrength = characterList.Michelangelo.Strength;				
				// console.log(fighterPicked);	
				// console.log(fighter);
		}	
			else if (fighterPicked === true && fighter != characterList.Michelangelo.Name && defender === ""){

				$defenderChoice.html($Michelangelo);
				$fightStats.empty();				
				defender = characterList.Michelangelo.Name;				
				defenderStrength = characterList.Michelangelo.Strength;
				defenderLife = characterList.Michelangelo.Life;
				$deleteOne.html("FIGHT!");									

			}

		});				
		
		$("#attackButton").on('click', function(){

			if (defenderLife > 0 && fighterLife > 0 && fighter != "" && defender != "") {
			
				defenderLife = defenderLife - fighterStrength;

				if (defenderLife <= 0){

					$fightStats.empty();
					
					$fightStats.append("\n" + defender.toUpperCase() + " suffered " + fighterStrength + " damage.");					
					
					checkIfDead(fighterLife, defenderLife, fighter, defender);
					
					if (opponentsDefeated === 3){
						alert("You have defeated all those placed before you! Splinter would be proud");
						resetGame();
					}

				}

				else{

				fighterLife = fighterLife - defenderStrength;

					$fightStats.html(fighter.toUpperCase() + " suffered " + defenderStrength + " damage.\n");
					$fightStats.append("\n" + defender.toUpperCase() + " suffered " + fighterStrength + " damage.");
					fighterStrength = fighterStrength + 10;	
					checkIfDead(fighterLife, defenderLife, fighter, defender);
						if (fighterDefeated === true){
							console.log(fighter);
							alert("Oh no! You have been defeated by " + defender.toUpperCase() + "!");
							resetGame();
						}
					fighterStatsChange(fighter, defender);
			}

			}		


		});
		
		$("#resetButton").on('click', function(){

			resetGame()				
			
		});

	};	
