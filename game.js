window.onload = function() {
    var canvas = document.getElementById('canvas');
    var text = document.getElementById('text')
    var elementsInteract = [];
    
	function buildBackground(level) {
		var background = document.createElement('div');
		background.id = 'background1';
		var wall = document.createElement('div');
		wall.id = 'level';
		background.appendChild(wall);
		canvas.appendChild(background);
		buildWalls(wall);
		centerLevel(background, canvas);
    }

	function buildWalls(obj) {
		var backgroundId = document.getElementById('background1');
		var backgroundStyle = window.getComputedStyle(backgroundId, null);
		var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
		var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
		obj.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle  + 'px;';
	}

	function centerLevel(obj, backObj) {
		var objStyle = window.getComputedStyle(document.getElementById(obj.id),null)
		var canvasStyle = window.getComputedStyle(backObj, null)
		//To center element we`ll calculate a new top and left.
		var newTop = (parseInt(canvasStyle.getPropertyValue('height')) - parseInt(objStyle.getPropertyValue('height')))/2
		var newLeft = (parseInt(canvasStyle.getPropertyValue('width')) - parseInt(objStyle.getPropertyValue('width')))/2
		obj.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
	}

	function doorsConstructor(index, positionX, doorOut) {
		var door = document.createElement('div');
		door.id = 'door' + index;
		door.setAttribute('style', 'left: ' + positionX + 'px; width: 62px; height: 125px;')
        placeContent(door);
        var doorObj = {
            id: door.id,
            position: door.style.left,
            width: door.style.width,
            doorOut: doorOut
        }
        elementsInteract.push(doorObj)
	}

    function placeContent(content) {
		var level = document.getElementById('level');
		level.appendChild(content)		
    }
    
    buildBackground();
	doorsConstructor(1, 522, 606)
	doorsConstructor(2, 606, 522)
	contentAppearDown();
	character()
	contentAppearUp();
    characterController();

	function contentAppearUp() {
		createElementToLevel('maceta', 46, 70, 'maceta.pngs', -290, -0, 'flex-end', false)
	}

	function contentAppearDown() {
        createElementToLevel('deskOfficer', 50, 120, '', 320, 0, 'flex-end', true)
		createElementToLevel('board', 120, 48, 'board.pngs', 70, -80, 'flex-end', false)
		createElementToLevel('ventilador', 82, 56, 'ventilador.pngs', 60, -3, 'flex-start', false)
		createElementToLevel('ventilador', 82, 56, 'ventilador.pngs', 180, -3, 'flex-start', false)
	}

	function createElementToLevel(element, width, height, img, positionX, positionY, flex, pushInObject) {
		var obj = document.createElement('div');
		obj.id = element;
		//background-color: red;
		obj.style = 'width: ' + width + 'px; height: ' + height + 'px; left: ' + positionX + 'px; top: ' + positionY + 'px; display: flex; align-self: ' + flex  + '; background-image: url(' + img + '); position:relative; '
        placeContent(obj);
        
        if(pushInObject) {
            var element = {
                id: obj.id,
                position: obj.style.left,
                width: obj.style.width
            }
            elementsInteract.push(element);
        }
	}

	function getActionInterval(playerPosition, element) {
        var intervalStart = parseInt(document.getElementById(element.id).style.left);
		var intervalEnd = intervalStart + parseInt(document.getElementById(element.id).style.width);
        return playerPosition >= intervalStart && playerPosition <= intervalEnd;
	}

	function getAction(player) {
        var playerPosition = parseInt(player.style.left);
        for(i = 0; i < elementsInteract.length; i++) {
            var element = elementsInteract[i];
            console.log(elementsInteract[i].id)
            if(getActionInterval(playerPosition, element)) {
                if(/door[\s\S]/.test(element.id)) {   
                    var doorOut = element.doorOut;
                    player.setAttribute('style', 'left:' + doorOut + 'px');
                }
                if(/deskOfficer/.test(element.id)) {
                    textFactory(element);
                }
            }
        }
    }
    
    function setTime(array) {
        for(var i = 0; i <= array.length; i++) {
            setTimeout(texts(array[i]), 2000);
        }
        function texts(arraytext) {
            console.log(arraytext)
            text.innerText = arraytext;            
        }
    }

    function textFactory(element) {
        if(/deskOfficer/.test(element.id)) {
            var array = [
                'This is a policeman....',
                'He have a picture of the emploier of month...',
                'like mcdonals but with a gun.'
            ];
            setTime(array)
        }
    }

	function pressUpLevel(player) {
		getAction(player);
    }

	function character() {
		var character = document.createElement('div');
		character.id = 'characterBox'; 
		character.style = 'top: 60px; left: 0px;'
		var spriteBox = document.createElement('div');
		spriteBox.id = 'spriteBox';
//		spriteBox.style = 'background-position: 0px 0px; animation: steyCharacterAnimation 3s steps(8) infinite;';
		character.appendChild(spriteBox);
		placeContent(character)
	}

    //Character Controller
	function characterController() {
		var player = document.getElementById('characterBox')
		var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
		var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))
		console.log(roomLimits)
		var walk = -80;
		var countSteps = 1;
		document.addEventListener('keydown', (e) => {
			console.log(e)
			if(!player.style.left) {
				player.style.left = '0px'
			}

			var left = parseInt(player.style.left);
			console.log(left)
			var transform = player.style.transform;

			if(e.key === 'ArrowRight' && left < roomLimits) {
				console.log(countSteps)
				player.setAttribute('style', 'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
				countSteps === 6 ? countSteps = 1 : countSteps ++; 
                player.style.left = (left + 10) + 'px'
			}

			if(e.key === 'ArrowLeft' && left > 0) {
				player.setAttribute('style', 'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
				countSteps === 6 ? countSteps = 1 : countSteps ++; 
				player.style.left = (left - 10) + 'px'
			}

			//Actions
			if(e.key === 'ArrowUp') {
				pressUpLevel(player);
			}

			if(e.key === 'ArrowDown') {
				player.style = 'animation: steyCharacterAnimation 3s steps(8) infinite;'
				player.style.left = left + 'px'
				player.style.transform = transform;
			}

		})
	}

}