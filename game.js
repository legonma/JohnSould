var macetaTemplate = {
    name: 'macetaAmarilla',
    positionX: -290,
    positionY: -0
}

var stage = [{
    level: 1,
    scene: {
        width: 705,
        height: 200
    },
    elementsOverCharacter: [Object.assign({}, macetaTemplate)],
    character: {
        top: 60,
        left: 0
    },
    elementsUnderCharacter: [{
            name: 'deskOfficer',
            positionX: 320,
            positionY: 0,
            observation: [
                'This is a policeman...',
                'He have a picture of the emploier of month...',
                'like mcdonals but with a gun...',
                'maeby, he know how where is my new office.'
            ],
            dialogs: [
                'hi, im new here, my name is john where is my office',
                'you are the same guy in the picture',
                'where is the bathroom'
            ]
        },
        {
            name: 'door',
            index: 1,
            positionX: 522,
            out: 606,
            observation: [
                'Here sayd "ONLY PERSONAL"...',
                'I take all cases to personal, so...'
            ]
        },
        {
            name: 'door',
            index: 2,
            positionX: 606,
            out: 522,
            observation: [
                'Trap.. Chrick.. Click..',
                'I think is lock'
            ]
        },
        {
            name: 'board',
            positionX: 70,
            positionY: -80
        },
        {
            name: 'ventilador',
            positionX: 60,
            positionY: -3
        },
        {
            name: 'ventilador',
            positionX: 180,
            positionY: -3
        }
    ]
}]


// ==========  CREATE SCENE BACKGROUND AND RESPECTIVE WALLS. =================
function createElementBackground(scene) {
    var canvas = document.getElementById('canvas');
    var background = document.createElement('div');
    background.id = 'background1';
    background.style = 'width: ' + scene.width + 'px; height: ' + scene.height + 'px;';
    var wall = document.createElement('div');
    wall.id = 'level';
    background.appendChild(wall);
    canvas.appendChild(background);
    createElementWall(wall);
    centerElementIn(background, canvas);
}

function createElementWall(obj) {
    var backgroundId = document.getElementById('background1');
    var backgroundStyle = window.getComputedStyle(backgroundId, null);
    var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
    var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
    obj.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle + 'px;';
}

function centerElementIn(obj, backObj) {
    var objStyle = window.getComputedStyle(document.getElementById(obj.id), null)
    var canvasStyle = window.getComputedStyle(backObj, null)
        //To center element we`ll calculate a new top and left.
    var newTop = (parseInt(canvasStyle.getPropertyValue('height')) - parseInt(objStyle.getPropertyValue('height'))) / 2
    var newLeft = (parseInt(canvasStyle.getPropertyValue('width')) - parseInt(objStyle.getPropertyValue('width'))) / 2
    obj.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
}


// ==================  CREATE ELEMENETS ON SCHENE  ==========================
function getElementsObj(element) {
    switch (element.name) {
        case 'macetaAmarilla':
            createElementToLevel(element.name, '', 46, 70, 'maceta.pngs', element.positionX, element.positionY, 'flex-end', false);
            break;
        case 'deskOfficer':
            createElementToLevel(element.name, '', 50, 120, '', element.positionX, element.positionY, 'flex-end', true)
            break;
        case 'board':
            createElementToLevel(element.name, '', 120, 48, 'board.pngs', element.positionX, element.positionY, 'flex-end', false)
            break;
        case 'ventilador':
            createElementToLevel(element.name, '', 82, 56, 'ventilador.pngs', element.positionX, element.positionY, 'flex-start', false)
            break;
        case 'door':
            createElementToLevel(element.name, element.index, 62, 125, 'doors.pngs', element.positionX, element.positionY, 'flex-end', true)
            break;

    }

}

// ==================   FUNCTIONS CREATE ELEMENETS ON SCENE   ==========================
function placeContent(content) {
    var level = document.getElementById('level');
    level.appendChild(content)
}

function createElementToLevel(name, index, width, height, img, positionX, positionY, flex, pushInObject) {
    var obj = document.createElement('div');
    obj.id = name + index;
    obj.style = 'width: ' + width + 'px; height: ' + height + 'px; left: ' + positionX + 'px; top: ' + positionY + 'px; display: flex; align-self: ' + flex + '; background-image: url(' + img + '); position:relative; '
    placeContent(obj);
    if (pushInObject) {
        var element = {
            id: obj.id,
            position: obj.style.left,
            width: obj.style.width
        }
        elementsInteract.push(element);
    }
}

function checkIfElementIsPresent(player) {
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < elementsInteract.length; i++) {
        var element = elementsInteract[i];
        if (objectsAreInPosition(playerLocation, element)) {
            dialogWhenPressUp(player, element);
        }
    }

    function objectsAreInPosition(playerLocation, element) {
        var intervalStart = parseInt(document.getElementById(element.id).style.left);
        var intervalEnd = intervalStart + parseInt(document.getElementById(element.id).style.width);
        return playerLocation >= intervalStart && playerLocation <= intervalEnd;
    }

    function dialogWhenPressUp(player, element) {
        switch (element.id) {
            case 'door1':
                var dialog = [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ];
                setTime(dialog);
                break;
            case 'door2':
                var dialog = [
                    'Trap.. Chrick.. Click..',
                    'I think is lock'
                ];
                setTime(dialog);
                break;
            case 'deskOfficer':
                var dialog = [
                    'This is a policeman....',
                    'He have a picture of the emploier of month...',
                    'like mcdonals but with a gun...',
                    'maeby, he know how where is my new office.'
                ];
                setTime(dialog);
                break;
            default:
                var dialog = ['I do not anything to sayd']
                setTime(dialog);
                break;
        }
    }



    // =======================  CHARACTER  ===========================
    function character() {
        var character = document.createElement('div');
        character.id = 'characterBox';
        character.style = 'top: ' + character.top + 'px; left: ' + character.left + 'px;'
        var spriteBox = document.createElement('div');
        spriteBox.id = 'spriteBox';
        //		spriteBox.style = 'background-position: 0px 0px; animation: steyCharacterAnimation 3s steps(8) infinite;';
        character.appendChild(spriteBox);
        placeContent(character)
    }


    function characterController() {
        var player = document.getElementById('characterBox')
        var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
        var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))
        console.log('roomLimits: ' + roomLimits)
        var walk = -80;
        var countSteps = 1;
        document.addEventListener('keydown', function listener(e) {
            if (!stopMoveEvent) {
                if (!player.style.left) {
                    player.style.left = '0px'
                }

                var left = parseInt(player.style.left);
                var transform = player.style.transform;

                if (e.key === 'ArrowRight' && left < roomLimits) {
                    console.log(countSteps)
                    player.setAttribute('style', 'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                    countSteps === 6 ? countSteps = 1 : countSteps++;
                    player.style.left = (left + 10) + 'px'
                }

                if (e.key === 'ArrowLeft' && left > 0) {
                    player.setAttribute('style', 'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                    countSteps === 6 ? countSteps = 1 : countSteps++;
                    player.style.left = (left - 10) + 'px'
                }

                //Actions
                if (e.key === 'ArrowUp') {
                    checkIfElementIsPresent(player, 'ArrowUp');
                }

                if (e.key === 'ArrowDown') {
                    player.style = 'animation: steyCharacterAnimation 3s steps(8) infinite;'
                    player.style.left = left + 'px'
                    player.style.transform = transform;
                }

                if (e.keyCode === 32) {
                    defineActionWhenPressKey(player, 'Space');
                }
            }
        })
    }








    window.onload = function() {
        var elementsInteract = [];
        var stopMoveEvent = false;
        var stopQuestionEvent = false;

        function createElementBackground(scene) {
            var canvas = document.getElementById('canvas');
            var background = document.createElement('div');
            background.id = 'background1';
            background.style = 'width: ' + scene.width + 'px; height: ' + scene.height + 'px;';
            var wall = document.createElement('div');
            wall.id = 'level';
            background.appendChild(wall);
            canvas.appendChild(background);
            createElementWall(wall);
            centerElementIn(background, canvas);
        }

        function createElementWall(obj) {
            var backgroundId = document.getElementById('background1');
            var backgroundStyle = window.getComputedStyle(backgroundId, null);
            var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
            var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
            obj.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle + 'px;';
        }

        function centerElementIn(obj, backObj) {
            var objStyle = window.getComputedStyle(document.getElementById(obj.id), null)
            var canvasStyle = window.getComputedStyle(backObj, null)
                //To center element we`ll calculate a new top and left.
            var newTop = (parseInt(canvasStyle.getPropertyValue('height')) - parseInt(objStyle.getPropertyValue('height'))) / 2
            var newLeft = (parseInt(canvasStyle.getPropertyValue('width')) - parseInt(objStyle.getPropertyValue('width'))) / 2
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
                doorOut: door
            }
            elementsInteract.push(doorObj)
        }

        function placeContent(content) {
            var level = document.getElementById('level');
            level.appendChild(content)
        }

        createElementBackground();
        doorsConstructor(1, 522, 606)
        doorsConstructor(2, 606, 522)
        contentAppearDown();
        character()
        contentAppearUp();
        characterController();

        function contentAppearUp() {
            createElementToLevel('macetaAmarilla', 46, 70, 'maceta.pngs', -290, -0, 'flex-end', false)
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
            obj.style = 'width: ' + width + 'px; height: ' + height + 'px; left: ' + positionX + 'px; top: ' + positionY + 'px; display: flex; align-self: ' + flex + '; background-image: url(' + img + '); position:relative; '
            placeContent(obj);

            if (pushInObject) {
                var element = {
                    id: obj.id,
                    position: obj.style.left,
                    width: obj.style.width
                }
                elementsInteract.push(element);
            }
        }

        function objectsAreInPosition(playerPosition, element) {
            console.log('el elemento es' + element.id)
            var intervalStart = parseInt(document.getElementById(element.id).style.left);
            var intervalEnd = intervalStart + parseInt(document.getElementById(element.id).style.width);
            return playerPosition >= intervalStart && playerPosition <= intervalEnd;
        }

        function defineActionWhenPressKey(player, event) {
            var playerPosition = parseInt(player.style.left);
            for (i = 0; i < elementsInteract.length; i++) {
                var element = elementsInteract[i];
                if (objectsAreInPosition(playerPosition, element)) {
                    if (/door[\s\S]/.test(element.id)) {
                        var doorOut = element.doorOut;
                        player.setAttribute('style', 'left:' + doorOut + 'px');
                    }
                    if (/deskOfficer/.test(element.id)) {
                        showDialog(element, event);
                    }
                }
            }
        }

        function dialogWhenPressUp(player, element) {
            switch (element.id) {
                case 'door1':
                    var dialog = [
                        'Here sayd "ONLY PERSONAL"...',
                        'I take all cases to personal, so...'
                    ];
                    setTime(dialog);
                    break;
                case 'door2':
                    var dialog = [
                        'Trap.. Chrick.. Click..',
                        'I think is lock'
                    ];
                    setTime(dialog);
                    break;
                case 'deskOfficer':
                    var dialog = [
                        'This is a policeman....',
                        'He have a picture of the emploier of month...',
                        'like mcdonals but with a gun...',
                        'maeby, he know how where is my new office.'
                    ];
                    setTime(dialog);
                    break;
                default:
                    var dialog = ['I do not anything to sayd']
                    setTime(dialog);
                    break;
            }
        }

        function checkIfElementIsPresent(player, event) {
            var playerLocation = parseInt(player.style.left);
            for (var i = 0; i < elementsInteract.length; i++) {
                var element = elementsInteract[i];
                if (objectsAreInPosition(playerLocation, element)) {
                    dialogWhenPressUp(player, element);
                } else {
                    console.log('no deberia pasar por aca')
                }
            }
        }

        function removeElements(containerElement) {
            var container = document.getElementById(containerElement);
            while (container.firstChild)
                container.removeChild(container.firstChild)
        }

        function setTime(array) {
            var dialogs = array.reverse()
            var text = document.createElement('p');
            text.id = 'text';
            document.getElementById('textArea').appendChild(text);
            var finish = setInterval(() => {
                if (dialogs.length === 0) {
                    clearInterval(finish);
                    removeElements('textArea');
                } else {
                    printInDialogBox(dialogs.pop())
                }
            }, 2000)
        }

        function createElementP(index, dialog) {
            var question = document.createElement('p');
            question.id = 'question' + index;
            if (!index) {
                question.style.backgroundColor = 'red';
            }
            document.getElementById('textArea').appendChild(question);
            var ponerTexto = document.getElementById(question.id);
            ponerTexto.innerText = dialog;
        }

        function printQuestionInTextArea(array) {
            var dialogs = array.reverse()
            var index = 0;
            var question = setInterval(() => {
                if (dialogs.length) {
                    createElementP(index++, dialogs.pop())
                } else {
                    clearInterval(question);
                }
            })
        }

        function printInDialogBox(line) {
            var text = document.getElementById('text');
            text.innerText = line;
        }

        function showDialog(element, event) {
            if (/deskOfficer/.test(element.id)) {
                var array = [
                    'hi, im new here, my name is john where is my office',
                    'you are the same guy in the picture',
                    'where is the bathroom'
                ];
                if (event === 'Space') {
                    printQuestionInTextArea(array);
                    questionMode()
                }
            }
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
            document.addEventListener('keydown', function listener(e) {
                if (!stopMoveEvent) {
                    console.log(e)
                    if (!player.style.left) {
                        player.style.left = '0px'
                    }

                    var left = parseInt(player.style.left);
                    console.log(left)
                    var transform = player.style.transform;

                    if (e.key === 'ArrowRight' && left < roomLimits) {
                        console.log(countSteps)
                        player.setAttribute('style', 'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                        countSteps === 6 ? countSteps = 1 : countSteps++;
                        player.style.left = (left + 10) + 'px'
                    }

                    if (e.key === 'ArrowLeft' && left > 0) {
                        player.setAttribute('style', 'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                        countSteps === 6 ? countSteps = 1 : countSteps++;
                        player.style.left = (left - 10) + 'px'
                    }

                    //Actions
                    if (e.key === 'ArrowUp') {
                        checkIfElementIsPresent(player, 'ArrowUp');
                    }

                    if (e.key === 'ArrowDown') {
                        player.style = 'animation: steyCharacterAnimation 3s steps(8) infinite;'
                        player.style.left = left + 'px'
                        player.style.transform = transform;
                    }

                    if (e.keyCode === 32) {
                        defineActionWhenPressKey(player, 'Space');
                    }
                }
            })
        }

        function questionMode() {
            stopMoveEvent = true;
            stopQuestionEvent = false;
            var i = 0;
            document.addEventListener('keydown', function questions(e) {
                var allQuestions = document.getElementById('textArea').childNodes
                console.log(e)
                if (!stopQuestionEvent) {
                    if (e.key === 'ArrowUp' && i > 0) {
                        allQuestions[i].style.backgroundColor = '';
                        i--;
                        allQuestions[i].style.backgroundColor = 'red';
                    }
                    if (e.key === 'ArrowDown' && i < (allQuestions.length - 1)) {
                        allQuestions[i].style.backgroundColor = '';
                        i++;
                        allQuestions[i].style.backgroundColor = 'red';
                    }

                    if (e.key === 'Enter') {
                        var dialog = allQuestions[i].innerText;
                        removeElements('textArea')
                        setTime([dialog])
                        stopQuestionEvent = true;
                        stopMoveEvent = false;
                    }
                }
            })
        }
    }

    /*
    var stage = [
        {
            level: 1,
            doors: [{
                id:1,
                positionX: 522,
                doorOut: 606
            },
            {
                id:1,
                positionX: 606,
                doorOut: 522
            }],
            macestas: [
                getMacetaConfig(position)
            ]
            elementOverScene: [{
                name:
                positionX:
            },
            {

            }]
        }
    ]

    stage.elementoOverScene

    function createScene(level) {

        for (var i in level) {
            switch (i) {
                case 'puertas':
                createElement(level[i])
            }
        }
    }

    function getMacetaConfig(position) {
        return {
            ....
            position: position
        }
    }
    */