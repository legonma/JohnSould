var stage = [{
        // ===========================  POLICE STATION FIRST LEVEL  ===============================  
        // document.getElementById(element.name).getBoundingClientRect().left;   
        level: 0,
        scene: {
            width: 705,
            height: 200,
            id: 'background1'
        },
        elementsUnderCharacter: [
            {
                name: 'doorInvisible',
                positionX: 104,
                levelOut: 5,
                positionOut: 130,
                interact: true,
                lock: false,
            },
            {
                name: 'door1',
                positionX: 522,
                levelOut: 1,
                positionOut: 522,
                interact: true,
                lock: false,
                styleStart: '0px',
                style: '62px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'door4',
                positionX: 606,
                levelOut: 3,
                positionOut: 500,
                interact: true,
                lock: false,
                styleStart: '-62px',
                style: '124px',
                observation: [
                    'Trap.. Chrick.. Click..',
                    'I think is lock'
                ]
            },
            {
                name: 'deskOfficer',
                positionX: 320,
                positionY: 60,
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
                positionX: 60,
                positionY: 50,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 170,
                positionY: -3,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 380,
                positionY: -3,
                interact: false,
            }
        ],
        character: {
            top: 60
        },
        elementsOverCharacter: [{
            name: 'macetaAmarilla',
            positionX: 0,
            positionY: 110,
            interact: false,
        },
        {
            name: 'outDoor',
            positionX: 104,
            levelOut: 5,
            positionOut: 50,
            interact: true,
            lock: false,
        },
    ]
    },
    // ===========================  POLICE STATION SECOND LEVEL  =============================== 
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
                styleStart: '0px',
                style: '62px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'door3',
                positionX: 606,
                levelOut: 2,
                positionOut: 540,
                interact: true,                
                lock: false,
                styleStart: '0px',
                style: '124px',
                observation: [
                    'Trap.. Chrick.. Click..',
                    'I think is lock'
                ]
            },
            {
                name: 'atendedor',
                positionX: 325,
                positionY: 42,
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
                positionX: 415,
                positionY: -3,
                interact: false,
            }
        ],

        character: {
            top: 60
        }
    },
    // ===========================  POLICE STATION BIG HALL LEVEL  =============================== 
    {
        level: 2,
        scene: {
            width: 1571,
            height: 318,
            left: 200,
            id: 'bigHall'
        },
        elementsUnderCharacter: [{
                name: 'door2',
                positionX: 540,
                levelOut: 1,
                positionOut: 606,
                interact: true,
                lock: false,
                styleStart: '0px',
                style: '62px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'DeskComputer',
                positionX: 10,
                interact: false,
            },
            {
                name: 'computer',
                positionX: 105,
                positionY: 220,                
                interact: false,
            },
            {
                name: 'DeskChair',
                positionX: 40,
                interact: false,
            },
            {
                name: 'clock',
                positionX: 300,
                positionY: 140,
                interact: false,
            },
            {
                name: 'PosterCop',
                positionX: 50,
                positionY: 160,
                interact: false,
            },
            {
                name: 'fileCabinetBox3',
                positionX: 170,
                hide: 'down',
            },
            {
                name: 'fileCabinetBox4',
                positionX: 280,
                hide: 'down',
            },
            {
                name: 'fileCabinetBox5',
                positionX: 390,
                hide: 'up',
            },
            {
                name: 'ventilador',
                positionX: 160,
                positionY: 116,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 420,
                positionY: 116,
                interact: false,
            },
            {
                name: 'DeskComputer',
                positionX: 1000,
                interact: false,
            },
            {
                name: 'computer',
                positionX: 1095,
                positionY: 220,                
                interact: false,
            },
            {
                name: 'clock',
                positionX: 1150,
                positionY: 140,
                interact: false,
            },
            {
                name: 'DeskComputer',
                positionX: 1200,
                interact: false,
            },
            {
                name: 'computer',
                positionX: 1295,
                positionY: 220,                
                interact: false,
            },
            {
                name: 'PosterCop',
                positionX: 1000,
                positionY: 160,
                interact: false,
            },
            {
                name: 'posterBreaked',
                positionX: 1200,
                positionY: 190,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 1010,
                positionY: 116,
                interact: false,
            },
            {
                name: 'ventilador',
                positionX: 1220,
                positionY: 116,
                interact: false,
            },
            {
                name: 'door1',
                positionX: 1400,
                levelOut: 4,
                positionOut: 21,
                interact: true,
                lock: false,
                styleStart: '0px',
                style: '124px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
        ],
        character: {
        },
        elementsOverCharacter: [{
            name: 'balcon',
            positionX: 682,
            positionY: 11,
            interact: false,
        },
        {
            name: 'DeskChair',
            positionX: 1030,
            interact: false,
        }]
    },
    // ===========================  POLICE STATION FOUR LEVEL (SHOOT-ROOM)  =============================== 
    {
        level: 3,
        scene: {
            width: 761,
            height: 200,
            id: 'backgroundShotRoom'
        },
        elementsUnderCharacter: [{
                name: 'door4',
                positionX: 500,
                levelOut: 0,
                positionOut: 606,
                interact: true,
                lock: false,
                styleStart: '-62px',
                style: '124px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
        ],
        character: {
            top: 60
        },
        elementsOverCharacter: [{
            name: 'shotTable',
            positionX: 343,
            positionY: -6,
            interact: true,
        },
        {
            name: 'paperboardShot',
            positionX: 0,
            damage: 6,
            damageRest: 0,
            enemy: true
        }]
    },
    // ===========================  OFFICE JOHN  =============================== 
    {
        level: 4,
        scene: {
            width: 408,
            height: 200,
            id: 'officeJohn'
        },
        elementsUnderCharacter: [{
                name: 'door1',
                positionX: 34,
                levelOut: 2,
                positionOut: 1400,
                interact: true,
                lock: false,
                styleStart: '0px',
                style: '124px',
                observation: [
                    'Here sayd "ONLY PERSONAL"...',
                    'I take all cases to personal, so...'
                ]
            },
            {
                name: 'board2',
                positionX: 130,
                positionY: 50,
                interact: false,
            },
            {
                name: 'macetaChica',
                positionX: 365,
                positionY: 45,
                interact: false,
            },
        ],
        character: {
            top: 60
        },
        elementsOverCharacter: []
    },
    // ===========================  PoliceStation out  =============================== 
    {
        level: 5,
        scene: {
            width: 1462,
            height: 552,
            id: 'PoliceCityStation'
        },
        elementsUnderCharacter: [
        {
            name: 'alcantarilla',
            positionX: 140,
            positionY: 448,
            interact: false,
        },
        {
            name: 'doorPoliceStation',
            positionX: 144,
            positionY: 241,
            levelOut: 0,
            positionOut: 104,
            interact: true,
            styleStart: '0px',
            style: '86px',
        },
        {
            name: 'trash',
            positionX: 511,
            positionY: 367,
            interact: false,
        },
        {
            name: 'policeCar',
            positionX: 576,
            positionY: 334,
            interact: false,
        },
    ],
        character: {
            top: 321
        },
        elementsOverCharacter: [
            {
                name: 'lightPost',
                positionX: 777,
                positionY: 251,
                interact: false,
            },
            {
                name: 'subwayStation',
                positionX: 1051,
                positionY: 289,
                interact: false,
            },
            {
                name: 'metalicWeb',
                positionX: 1256,
                positionY: 289,
                interact: false,
            },
            {
                name: 'diaryBlack',
                positionX: 0,
                positionY: 457,
                interact: false,
            },
            {
                name: 'signBlack',
                positionX: 380,
                positionY: 372,
                interact: false,
            },            
            {
                name: 'lightBlack',
                positionX: 890,
                positionY: 362,
                interact: false,
            }
        ]
    },    
]


// ============================== WINDOW ONLOAD =============================

var enemysArePresent = [];
var elementsInteract = [];
var objetsToHide = [];
var stopMoveEvent = false;
var stopQuestionEvent = true;
var pickupGun = false;
var firstSteps;
var secondSteps;
var characterPosition = 0;
var allQuestions = [];
var qs;
var arrayToSetInt = ['0px','-80px','-160px','-240px','-320px','-400px','-480px','-560px','-640px','-720px'];
var lastLeyPressRight = false;
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
    background.className = 'background';
    canvas.appendChild(background);
    background.setAttribute('style','width: ' + scene.width + 'px; height: ' + scene.height + 'px; left:' + scene.left +'px');
    var wall = document.createElement('div');
    wall.id = 'level';
    background.appendChild(wall);
    canvas.appendChild(background);
    createElementWall(wall, scene);
    centerElementIn(background, canvas);
    document.getElementById('textArea').style.top = (parseInt(background.style.top) + 220) + 'px';
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

function centerElementIn(background, canvas) {
//    var backgroundStyle = window.getComputedStyle(document.getElementById(backgdound.id), null)
//    var canvasStyle = window.getComputedStyle(canvas, null)
    //To center element we`ll calculate a new top and left.
    var newLeft;
    if(background.offsetWidth > canvas.offsetWidth) {
        background.id === 'PoliceCityStation' ? newLeft = 0 : newLeft = 167;
    } else {
        newLeft = (parseInt(canvas.offsetWidth) - parseInt(background.offsetWidth)) / 2    
    }
    var newTop = (parseInt(canvas.offsetHeight) - parseInt(background.offsetHeight)) / 2
    background.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
}

// ==================   FUNCTIONS CREATE ELEMENETS ON SCENE   ==========================
function createDomElement(element) {
    var div = document.createElement('div');
    div.id = element.name;
    div.style = 'left: ' + element.positionX + 'px; top: ' + element.positionY + 'px;';
    appendContentIn(div, 'level');
    var elementTemp = JSON.parse(JSON.stringify(element))
    if (element.interact) {
        elementsInteract.push(elementTemp);
    }
    if(element.enemy) {
        enemysArePresent.push(elementTemp);
    }
    if(element.hide != undefined) {
        objetsToHide.push(elementTemp)
    }
}

function appendContentIn(content, id) {
    var level = document.getElementById(id);
    level.appendChild(content)
}


function checkIfPlayerCanHide(player, playerSprite, direction) {
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < objetsToHide.length; i++) {
        var element = objetsToHide[i];
        if (objectsAreInPosition(playerLocation, element)) {
            positionHide = lastLeyPressRight ? 10 : parseInt(document.getElementById(element.name).offsetWidth) - 10 ;
            player.setAttribute('style', 'left: '+ (element.positionX + positionHide) + 'px');
            if(element.hide === 'down') {
                playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[0] +' -360px');                
            } 
            if(element.hide === 'up') {
                playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[8] +' -360px');
            }   
        }
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
}

function openDoors(player) {
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < elementsInteract.length; i++) {
        var element = elementsInteract[i];
        if (objectsAreInPosition(playerLocation, element)) {
            if (element.name === 'door1' || element.name === 'door2' || element.name === 'door3' || element.name === 'door4' || element.name === 'doorPoliceStation' &&  !element.lock) {
                //openThings.play();
                document.getElementById(element.name).style.backgroundPosition = element.style;
            }
        } else {
            document.getElementById(element.name).style.backgroundPosition = element.styleStart;
        }
    }
}

function objectsAreInPosition(playerLocation, element) {
    var intervalStart = element.positionX;
    var intervalEnd = intervalStart + parseInt(document.getElementById(element.name).offsetWidth);
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
    var stayWhenPress = 8;
    document.addEventListener('keyup', function listenerUp(j) {
        var player = document.getElementById('characterBox')
        var playerSprite = document.getElementById('spriteBox')
        var getCssPlayer = window.getComputedStyle(player, null).getPropertyValue('width')
        var roomLimits = (parseInt(document.getElementById('level').style.width) - parseInt(getCssPlayer))
        if (j.key === 'ArrowRight' || j.key === 'ArrowLeft' || j.key === 'ArrowUp' && !stopMoveEvent) {
            var transform = player.style.transform;
            timmer = setTimeout(function() {
                var direction = lastLeyPressRight ? '1' : '-1';
                var animation = withGun ? 'background-position-y: -480px; animation: steyWithGunAnimation 2s steps(5) infinite;' : 'animation: steyCharacterAnimation 2s steps(8) infinite;';
                playerSprite.setAttribute('style', 'transform: scaleX(' + direction + ');' + animation);
                player.style.transform = transform;
            }, 200)
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
                var canvas = document.getElementById('canvas');
                var background = document.getElementsByClassName('background')[0];
                // para pantallas grandes, limito el margen a 167 de cada lado. el doble es para contrarestar el anterior.
                var limitLeftBackground = ((canvas.offsetWidth - 167) - ((parseInt(background.offsetWidth))));
                if(background.offsetWidth > canvas.offsetWidth && parseInt(background.style.left) > limitLeftBackground) {
                    background.style.left = (parseInt(background.style.left) - 10) + 'px'; 
                }
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
                var canvas = document.getElementById('canvas');
                var background = document.getElementsByClassName('background')[0];
                // para pantallas grandes, limito el margen a 167 de cada lado. el doble es para contrarestar el anterior.
                var limitLeftBackground = 167;
                if(background.offsetWidth > canvas.offsetWidth && parseInt(background.style.left) < limitLeftBackground) {
                    background.style.left = (parseInt(background.style.left) + 10) + 'px'; 
                }                
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
                    }, 150);
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
                    }, 150);
                }
                //hacer la animacion del pickup Gun
                pickupGun = !pickupGun;
            }
        
            if (e.key === 'ArrowUp') {
                if(!stopMoveEvent) {
                    var direction = lastLeyPressRight ? '1':'-1';
                    if(withGun){
                        playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[8] +' -240px');            
                        checkIfPlayerCanHide(player, playerSprite, direction);
                    } else {
                        playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: -80px -240px')    
                        checkIfElementIsPresent(player, 'ArrowUp');
                    }
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
                }
            }

    })
}

function questionMode() {
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
        enemysArePresent = [];
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
    console.log(player)
    var direction = lastLeyPressRight ? '1' : '-1';
    var pickUpInterval = setInterval(() => {
        playerSprite.setAttribute('style', 'transform: scaleX(' + direction + '); background-position: ' + (-320 + (-80 * fireFrame)) + 'px -120px');

        if (fireFrame === 2) {
            pistolShotSound.play(); 
            shotingElements(player, lastLeyPressRight);
        }
        if (fireFrame === 5) {
            playerSprite.setAttribute('style', 'transform: scaleX(' + direction + '); background-position: ' + (-320) + 'px -120px');
            clipFall.play();
            stopMoveEvent = false;
            withGun = true;
            clearInterval(pickUpInterval);
        } else {
            fireFrame++;
        }
    }, 150);
}

function shotingElements(player, lastLeyPressRight) {
    for (var i = 0; i < enemysArePresent.length; i++) {
        var element = enemysArePresent[i];
        var aim = element.positionX > player.left ? true : false;
        if(lastLeyPressRight === aim){
            if (element.name === 'paperboardShot') {
                element.damageRest === element.damage ? element.damageRest = 0 : element.damageRest ++;
                papaeBoard = document.getElementById(element.name);
                papaeBoard.setAttribute('style', 'background-position: -' + (40 * element.damageRest) +'px 0px;');
            }
        }
    }
}