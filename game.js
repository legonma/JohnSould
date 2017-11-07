var stage = [{
        // ===========================  FIRST LEVEL  ===============================     
        level: 0,
        scene: {
            width: 705,
            height: 200,
            id: 'background1'
        },
        elementsUnderCharacter: [{
                name: 'door1',
                positionX: 522,
                levelOut: 1,
                positionOut: 522,
                interact: true,
                lock: false,
                style: '62px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'door2',
                positionX: 606,
                interact: true,
                lock: true,
                observation: [
                    'Trap.. Chrick.. Click..',
                    'I think is lock'
                ]
            },
            {
                name: 'deskOfficer',
                positionX: 320,
                positionY: 0,
                interact: true,
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
                name: 'board',
                positionX: 10,
                positionY: 50,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 20,
                positionY: -3,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 140,
                positionY: -3,
                interact: false,
            }
        ],
        character: {
            top: 60
        },
        elementsOverCharacter: [{
            name: 'macetaAmarilla',
            positionX: -335,
            positionY: -0,
            interact: false,
        }]
    },
    // ===========================  SECOND LEVEL  =============================== 
    {
        level: 1,
        scene: {
            width: 704,
            height: 200,
            id: 'background2'
        },
        elementsUnderCharacter: [{
                name: 'door2',
                positionX: 522,
                levelOut: 0,
                positionOut: 522,
                interact: true,
                lock: false,
                style: '62px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'door3',
                positionX: 606,
                interact: true,
                lock: true,
                style: '124px',
                observation: [
                    'Trap.. Chrick.. Click..',
                    'I think is lock'
                ]
            },
            {
                name: 'atendedor',
                positionX: 325,
                positionY: -45,
                interact: true,
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
                name: 'greenSign',
                positionX: 529,
                positionY: 32,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 305,
                positionY: -3,
                interact: false,
            }
        ],

        character: {
            top: 60
        }
    }
]

// ============================== WINDOW ONLOAD =============================

var elementsInteract = [];
var stopMoveEvent = false;
var stopQuestionEvent = true;
var pickupGun = false;
var firstSteps;
var secondSteps;
var characterPosition = 0;
var allQuestions = [];
var qs;
window.onload = function() {
    createScene(stage, 0);
    characterController(stage);
}


// ==================  CREATING ELEMENETS TO SCENE  ==========================
function createScene(stage, level) {
    var stringStage = 'stage[' + level + '].';
    firstSteps = new Audio('Footstep01.wav');
    secondSteps = new Audio('Footstep02.wav');
    pistolShotSound = new Audio('pistolShot.mp3');
    clipFall = new Audio('clipFall.mp3');
    openThings = new Audio('openThings.wav');
    for (i in stage[level]) {
        switch (i) {
            case 'scene':
                createElementBackground(stage[level].scene);
                break;
            case 'elementsOverCharacter':
                for (var j = 0; j < stage[level][i].length; j++) {
                    createDomElement(stage[level][i][j]);
                }
                break;
            case 'character':
                character(stage[level].character);
                break;
            case 'elementsUnderCharacter':
                for (var j = 0; j < stage[level][i].length; j++) {
                    createDomElement(stage[level][i][j]);
                }
                break;
            default:
                break;
        }
    }
}


// ==========  CREATE SCENE BACKGROUND AND RESPECTIVE WALLS. =================
function createElementBackground(scene) {
    var canvas = document.getElementById('canvas');
    createBasicElementAndAppendIn('textArea', 'canvas');
    createBasicElementAndAppendIn('lightBackground', 'canvas');
    var background = document.createElement('div');
    background.id = scene.id;
    background.style = 'width: ' + scene.width + 'px; height: ' + scene.height + 'px;';
    var wall = document.createElement('div');
    wall.id = 'level';
    background.appendChild(wall);
    canvas.appendChild(background);
    createElementWall(wall, scene);
    centerElementIn(background, canvas);
}

function createBasicElementAndAppendIn(basicElement, appendIn) {
    var basic = document.createElement('div');
    basic.id = basicElement;
    appendContentIn(basic, appendIn);

}

function createElementWall(wall, scene) {
    var backgroundId = document.getElementById(scene.id);
    var backgroundStyle = window.getComputedStyle(backgroundId, null);
    var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
    var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
    wall.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle + 'px;';
}

function centerElementIn(obj, backObj) {
    var objStyle = window.getComputedStyle(document.getElementById(obj.id), null)
    var canvasStyle = window.getComputedStyle(backObj, null)
        //To center element we`ll calculate a new top and left.
    var newTop = (parseInt(canvasStyle.getPropertyValue('height')) - parseInt(objStyle.getPropertyValue('height'))) / 2
    var newLeft = (parseInt(canvasStyle.getPropertyValue('width')) - parseInt(objStyle.getPropertyValue('width'))) / 2
    obj.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
}

// ==================   FUNCTIONS CREATE ELEMENETS ON SCENE   ==========================
function createDomElement(element) {
    var div = document.createElement('div');
    div.id = element.name;
    div.style = 'left: ' + element.positionX + 'px; top: ' + element.positionY + 'px;';
    appendContentIn(div, 'level');
    if (element.interact) {
        elementsInteract.push(element);
    }
}

function appendContentIn(content, id) {
    var level = document.getElementById(id);
    level.appendChild(content)
}


function checkIfElementIsPresent(player) {
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < elementsInteract.length; i++) {
        var element = elementsInteract[i];
        if (objectsAreInPosition(playerLocation, element)) {
            dialogWhenPressUp(player, element);
        }
    }
}

function openDoors(player) {
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < elementsInteract.length; i++) {
        var element = elementsInteract[i];
        if (objectsAreInPosition(playerLocation, element)) {
            if (element.name === 'door1' || element.name === 'door2' || element.name === 'door3' && !element.lock) {
                //openThings.play();
                document.getElementById(element.name).style.backgroundPosition = element.style;
            }
        } else {
            document.getElementById(element.name).style.backgroundPosition = '0px';
        }
    }
}

function objectsAreInPosition(playerLocation, element) {
    var intervalStart = element.positionX;
    var id = element.name;
    var intervalEnd = intervalStart + parseInt(document.getElementById(id).offsetWidth);
    return playerLocation >= intervalStart && playerLocation <= intervalEnd;
}

function dialogWhenPressUp(player, element) {
    setTime(element.observation);
}



// =======================  CHARACTER  ===========================
function character(characterObject) {
    var character = document.createElement('div');
    character.id = 'characterBox';
    character.style = 'top: ' + characterObject.top + 'px; left: ' + characterPosition + 'px;'
    var spriteBox = document.createElement('div');
    spriteBox.id = 'spriteBox';
    //		spriteBox.style = 'background-position: 0px 0px; animation: steyCharacterAnimation 3s steps(8) infinite;';
    character.appendChild(spriteBox);
    appendContentIn(character, 'level')
}


function characterController(stage) {
    var walk = -80;
    var countSteps = 1;
    var pickUpFrame = 0;
    var timmer;
    var withGun = false;
    var lastLeyPressRight = false;
    document.addEventListener('keyup', function listenerUp(j) {
        var player = document.getElementById('characterBox')
        var playerSprite = document.getElementById('spriteBox')
        var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
        var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))
        if (j.key === 'ArrowRight' || j.key === 'ArrowLeft' && !stopMoveEvent) {
            var transform = player.style.transform;
            timmer = setTimeout(function() {
                var direction = j.key === 'ArrowRight' ? '1' : '-1';
                var animation = withGun ? 'background-position-y: -480px; animation: steyWithGunAnimation 3s steps(5) infinite;' : 'animation: steyCharacterAnimation 3s steps(8) infinite;';
                playerSprite.setAttribute('style', 'transform: scaleX(' + direction + ');' + animation);
                player.style.transform = transform;
            }, 1000)
        }
    })
    document.addEventListener('keydown', function listener(e) {
        var player = document.getElementById('characterBox')
        var playerSprite = document.getElementById('spriteBox')
        var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
        var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))

            if (!player.style.left && !stopMoveEvent) {
                player.style.left = '0px'
            }

            var left = parseInt(player.style.left);
            var transform = player.style.transform;
            if (e.key === 'ArrowRight' && left < roomLimits && !stopMoveEvent) {
                lastLeyPressRight = true;
                if (timmer) {
                    clearTimeout(timmer)
                    timmer = null;
                }
                if (pickupGun) {
                    playerSprite.setAttribute('style', 'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -360px');

                } else {
                    //para contar los steps del sprite console.log(countSteps)
                    playerSprite.setAttribute('style', 'transform: scaleX(1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                }
                countSteps === 6 ? countSteps = 1 : countSteps++;
                player.style.left = (left + 10) + 'px';
                !(countSteps % 2) ? firstSteps.play(): secondSteps.play();
                openDoors(player)
            }

            if (e.key === 'ArrowLeft' && left > 0 && !stopMoveEvent) {
                lastLeyPressRight = false;
                if (timmer) {
                    clearTimeout(timmer)
                    timmer = null;
                }
                if (pickupGun) {
                    playerSprite.setAttribute('style', 'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -360px');

                } else {
                    playerSprite.setAttribute('style', 'transform: scaleX(-1); background-position: ' + (walk + (-80 * countSteps)) + 'px -240px');
                }
                countSteps === 6 ? countSteps = 1 : countSteps++;
                player.style.left = (left - 10) + 'px';
                !(countSteps % 2) ? firstSteps.play(): secondSteps.play();
                openDoors(player)
            }

            //Actions
            
            if (e.keyCode === 32 && !stopMoveEvent) {
                if (!withGun) {
                    defineActionWhenPressSpaceKey(player, stage);
                } else {
                    fireGun(player, playerSprite, lastLeyPressRight);
                }
                
            }
            
            if (e.key === 'r' && !stopMoveEvent) {
                stopMoveEvent = true;
                if (!withGun) {
                    var pickUpInterval = setInterval(() => {
                        playerSprite.setAttribute('style', 'transform: scaleX(1); background-position: ' + (-80 * pickUpFrame) + 'px -120px');
                        if (pickUpFrame === 3) {
                            stopMoveEvent = false;
                            withGun = true;
                            clearInterval(pickUpInterval);
                        } else {
                            pickUpFrame++;
                        }
                    }, 300);
                } else {
                    pickUpFrame = 3;
                    var pickUpInterval = setInterval(() => {
                        playerSprite.setAttribute('style', 'transform: scaleX(1); background-position: ' + (-80 * pickUpFrame) + 'px -120px');
                        if (!pickUpFrame) {
                            stopMoveEvent = false;
                            withGun = false;
                            clearInterval(pickUpInterval);
                        } else {
                            pickUpFrame--;
                        }
                    }, 300);
                }
                //hacer la animacion del pickup Gun
                pickupGun = !pickupGun;
            }
        
            if (e.key === 'ArrowUp') {
                if(!stopMoveEvent) {
                    //playerSprite.setAttribute('style', 'background-position: -240px -480px')
                    checkIfElementIsPresent(player, 'ArrowUp');
                }
                if (!stopQuestionEvent && qs > 0) {
                    allQuestions[qs].style.backgroundColor = '';
                    qs--;
                    allQuestions[qs].style.backgroundColor = '#b7302f';
                }

            }

            if (e.key === 'ArrowDown') {
                if (!stopQuestionEvent && qs < (allQuestions.length - 1)) {
                    allQuestions[qs].style.backgroundColor = '';
                    qs++;
                    allQuestions[qs].style.backgroundColor = '#b7302f';
                }
            }

            if (e.key === 'Enter') {
                if(!stopQuestionEvent) {
                    var dialog = allQuestions[qs].innerText;
                    removeElements('textArea')
                    setTime([dialog])
                    stopQuestionEvent = true;
                    stopMoveEvent = false;
                }
            }

    })
}


function questionMode() {
    debugger;
    stopMoveEvent = true;
    stopQuestionEvent = false;
    allQuestions = document.getElementById('textArea').childNodes
    qs = 0;
}

// ============== MODS ===============================

function defineActionWhenPressSpaceKey(player, stage) {
    var playerPosition = parseInt(player.style.left);
    for (i = 0; i < elementsInteract.length; i++) {
        var element = elementsInteract[i];
        if (objectsAreInPosition(playerPosition, element)) {
            var doorName = (/door[\s\S]/.test(element.name)) ? element.name : '';
            switch (element.name) {
                case doorName:
                    doorAction(element, stage);
                    break;
                default:
                    var dialogElement = element.dialogs.slice();
                    printQuestionInTextArea(element.dialogs)
                    questionMode()
                    break;
            }
        }
    }
}

function doorAction(element, stage) {
    if (element.levelOut !== undefined) {
        characterPosition = element.positionOut;
        elementsInteract = [];
        removeElements('canvas');
        createScene(stage, element.levelOut);
    }
}

function removeElements(containerElement) {
    var container = document.getElementById(containerElement);
    while (container.firstChild)
        container.removeChild(container.firstChild)
}

function setTime(dialogElement) {
    array = dialogElement.slice()
    var dialogs = array.reverse()
    var text = document.createElement('p');
    text.id = 'text';
    document.getElementById('textArea').appendChild(text);
    stopMoveEvent = true;
    var finish = setInterval(() => {
        if (dialogs.length === 0) {
            clearInterval(finish);
            removeElements('textArea');
            stopMoveEvent = false;
        } else {
            printInDialogBox(dialogs.pop())
        }
    }, 2000)
}

function createElementP(index, dialog) {
    var question = document.createElement('p');
    question.id = 'question' + index;
    if (!index) {
        question.style.backgroundColor = '#b7302f';
    }
    document.getElementById('textArea').appendChild(question);
    var ponerTexto = document.getElementById(question.id);
    ponerTexto.innerText = dialog;
}

function printQuestionInTextArea(dialogElement) {
    var array = dialogElement.slice();
    var dialogs = array.reverse();
    var index = 0;
    var question = setInterval(() => {
        if (dialogs.length) {
            createElementP(index++, dialogs.pop())
        } else {
            clearInterval(question);
        }
    })
}
//poner en pausa cuando entra el dialogo
function printInDialogBox(line) {
    var text = document.getElementById('text');
    text.innerText = line;
}

//============================ FIRE MODE =========================

function fireGun(player, playerSprite, lastLeyPressRight) {
    stopMoveEvent = true;
    fireFrame = 0;
    var direction = lastLeyPressRight ? '1' : '-1';
    var pickUpInterval = setInterval(() => {
        playerSprite.setAttribute('style', 'transform: scaleX(' + direction + '); background-position: ' + (-320 + (-80 * fireFrame)) + 'px -120px');
        if (fireFrame === 2) {
            pistolShotSound.play();
            createBullet();
        }
        if (fireFrame === 4) {
            playerSprite.setAttribute('style', 'transform: scaleX(' + direction + '); background-position: ' + (-320) + 'px -120px');
            clipFall.play();
            stopMoveEvent = false;
            withGun = true;
            clearInterval(pickUpInterval);
        } else {
            fireFrame++;
        }
    }, 300);
}

function createBullet() {

}