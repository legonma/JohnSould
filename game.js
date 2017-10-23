window.onload = function() {
	var canvas = document.getElementById('canvas');

	function buildBackground(level) {
		var background = document.createElement('div');
		background.id = 'background1';
		var wall = document.createElement('div');
		wall.id = 'level';
		background.appendChild(wall);
		canvas.appendChild(background);
		alingWalls(wall);
		positionCalculator(background, canvas);
	}

	function alingWalls(obj) {
		var backgroundId = document.getElementById('background1');
		var backgroundStyle = window.getComputedStyle(backgroundId, null);
		var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
		var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
		obj.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle  + 'px;';
	}

	function positionCalculator(obj, backObj) {
		var objStyle = window.getComputedStyle(document.getElementById(obj.id),null)
		var canvasStyle = window.getComputedStyle(backObj, null)
		//To center element we`ll calculate a new top and left.
		var newTop = (parseInt(canvasStyle.getPropertyValue('height')) - parseInt(objStyle.getPropertyValue('height')))/2
		var newLeft = (parseInt(canvasStyle.getPropertyValue('width')) - parseInt(objStyle.getPropertyValue('width')))/2
		obj.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
	}

	function doors(index, positionX) {
		var door = document.createElement('div');
		door.id = 'door' + index;
		door.style = 'left: ' + positionX + 'px; width: 62px; height: 125px;'
		placeContent(door);
	}

	buildBackground();
	doors(1, 522)
	doors(2, 606)
	levelContent();
	character()
	levelContentDown();
	characterController();

	function levelContentDown() {
		createElementToLevel('maceta', 46, 70, 'maceta.pngs', -290, -0, 'flex-end')

	}

	function levelContent() {
		createElementToLevel('board', 120, 48, 'board.pngs', 70, -80, 'flex-end')
		createElementToLevel('ventilador', 82, 56, 'ventilador.pngs', 60, -3, 'flex-start')
		createElementToLevel('ventilador', 82, 56, 'ventilador.pngs', 180, -3, 'flex-start')
	}

	function createElementToLevel(element, width, height, img, positionX, positionY, flex) {
		var obj = document.createElement('div');
		obj.id = element;
		//background-color: red;
		obj.style = 'width: ' + width + 'px; height: ' + height + 'px; left: ' + positionX + 'px; top: ' + positionY + 'px; display: flex; align-self: ' + flex  + '; background-image: url(' + img + '); position:relative; '
		placeContent(obj);
	}

	function placeContent(content) {
		var wall = document.getElementById('level');
		wall.appendChild(content)		
	}

	function getDoorPosition(playerPosition, doorId) {
		var doorStart = parseInt(document.getElementById(doorId).style.left);
		var doorEnd = doorStart + parseInt(document.getElementById(doorId).style.width);
		return playerPosition >= doorStart && playerPosition <= doorEnd;
	}


	function getDoorAction(player, doorIn, doorOut) {
		var beginAction = parseInt(document.getElementById(doorIn).style.left);
		var endAction = beginAction + parseInt(document.getElementById(doorIn).style.width);
		
		var appear = document.getElementById(doorOut).style.left;
		var playerPosition = parseInt(player.style.left);

		if(playerPosition >= beginAction && playerPosition <= endAction) {
			player.style.left = appear; 
		}
	}



	//add level like param
	function pressUpLevel(player, door1, door2) {
/*
		var left = parseInt(player.style.left);
		console.log(left)
		if(getDoorPosition(left, door1)) {
			player.style.left = '620px'
		}
		if(getDoorPosition(left, door2)) {
			player.style.left = '530px'
		}
*/

		// View the action (the var appears stay with the last value)
		getDoorAction(player, door2, door1);
		getDoorAction(player, door1, door2);
	}

	function character() {
		var character = document.createElement('div');
		character.id = 'character'; 
		character.style = 'top: 60px; left: 0px; transform: scaleX(1); background-position: 0px 0px; animation: steyCharacterAnimation 3s steps(8) infinite; transform: scaleX(1)'
		var actionSize = document.createElement('div');
		actionSize.id = 'actionSize'
		actionSize.style = 'width: 46px; height: 120px; position: relative; display: flex; align-self: center; left: 17px; background-color: red';
		character.appendChild(actionSize);
		placeContent(character)
	}

	function characterController() {
		var player = document.getElementById('character')
		var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
		var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))
		console.log(roomLimits)
		var walk = -80;
		var countSteps = 1;
		var actionSize = document.getElementById('actionSize')
		document.addEventListener('keydown', (e) => {
			console.log(e)
			if(!player.style.left) {
				player.style.left = '0px'
			}

			var left = parseInt(player.style.left);
			console.log(left)
			var transform = player.style.transform;

			//view with juan how make this works
//			if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowUp') {
//				player.style = 'animation: steyCharacterAnimation 3s steps(8) infinite;'
//			}

			if(e.key === 'ArrowRight' && left < roomLimits) {
				console.log(countSteps)
				player.style =  'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px';
				countSteps === 6 ? countSteps = 1 : countSteps ++; 
				player.style.left = (left + 10) + 'px'
			}

			if(e.key === 'ArrowLeft' && left > 0) {
				console.log(countSteps)
				console.log(actionSize.style.left)
				player.style =  'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px';
				countSteps === 6 ? countSteps = 1 : countSteps ++; 
				player.style.left = (left - 10) + 'px'
			}

			//Actions
			if(e.key === 'ArrowUp') {
				pressUpLevel(player, 'door1', 'door2');
			}

			if(e.key === 'ArrowDown') {
				player.style = 'animation: steyCharacterAnimation 3s steps(8) infinite;'
				player.style.left = left + 'px'
				player.style.transform = transform;
			}

		})
	}

}