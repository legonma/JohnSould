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
                left: 104,
                levelOut: 5,
                positionOut: 130,
                interact: true,
                lock: false,
            },
            {
                name: 'door1',
                left: 522,
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
                left: 606,
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
                left: 320,
                top: 60,
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
                left: 60,
                top: 50,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 170,
                top: -3,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 380,
                top: -3,
                interact: false,
            }
        ],
        character: {
            top: 60
        },
        elementsOverCharacter: [{
            name: 'macetaAmarilla',
            left: 0,
            top: 110,
            interact: false,
        },
        {
            name: 'outDoor',
            left: 104,
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
                left: 522,
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
                left: 606,
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
                left: 325,
                top: 42,
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
                left: 529,
                top: 32,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 415,
                top: -3,
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
                left: 540,
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
                left: 10,
                interact: false,
            },
            {
                name: 'policeMan',
                left: 600,
                top: 178,  
                interact: false,
            },
            {
                name: 'computer',
                left: 105,
                top: 220,                
                interact: false,
            },
            {
                name: 'DeskChair',
                left: 40,
                interact: false,
            },
            {
                name: 'clock',
                left: 300,
                top: 140,
                interact: false,
            },
            {
                name: 'PosterCop',
                left: 50,
                top: 160,
                interact: false,
            },
            {
                name: 'fileCabinetBox3',
                left: 170,
                hide: 'down',
            },
            {
                name: 'fileCabinetBox4',
                left: 280,
                hide: 'down',
            },
            {
                name: 'fileCabinetBox5',
                left: 390,
                hide: 'up',
            },
            {
                name: 'ventilador',
                left: 160,
                top: 116,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 420,
                top: 116,
                interact: false,
            },
            {
                name: 'DeskComputer',
                left: 1000,
                interact: false,
            },
            {
                name: 'computer',
                left: 1095,
                top: 220,                
                interact: false,
            },
            {
                name: 'clock',
                left: 1150,
                top: 140,
                interact: false,
            },
            {
                name: 'DeskComputer',
                left: 1200,
                interact: false,
            },
            {
                name: 'computer',
                left: 1295,
                top: 220,                
                interact: false,
            },
            {
                name: 'PosterCop',
                left: 1000,
                top: 160,
                interact: false,
            },
            {
                name: 'posterBreaked',
                left: 1200,
                top: 190,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 1010,
                top: 116,
                interact: false,
            },
            {
                name: 'ventilador',
                left: 1220,
                top: 116,
                interact: false,
            },
            {
                name: 'door1',
                left: 1400,
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
            left: 682,
            top: 11,
            interact: false,
        },
        {
            name: 'DeskChair',
            left: 1030,
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
                left: 500,
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
        enemy: [{
            name: 'enemyMirror',
            life: 1,
            top: 60,
            left: 0
        }],
        character: {
            top: 60
        },
        elementsOverCharacter: [{
            name: 'shotTable',
            left: 343,
            top: -6,
            interact: true,
        },
        {
            name: 'paperboardShot',
            left: 0,
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
                left: 34,
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
                left: 130,
                top: 50,
                interact: false,
            },
            {
                name: 'macetaChica',
                left: 365,
                top: 45,
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
            left: 140,
            top: 448,
            interact: false,
        },
        {
            name: 'doorPoliceStation',
            left: 144,
            top: 241,
            levelOut: 0,
            positionOut: 104,
            interact: true,
            styleStart: '0px',
            style: '86px',
        },
        {
            name: 'trash',
            left: 511,
            top: 367,
            interact: false,
        },
        {
            name: 'policeCar',
            left: 576,
            top: 334,
            interact: false,
        },
    ],
        character: {
            top: 321
        },
        elementsOverCharacter: [
            {
                name: 'lightPost',
                left: 777,
                top: 251,
                interact: false,
            },
            {
                name: 'subwayStation',
                left: 1051,
                top: 289,
                interact: false,
            },
            {
                name: 'metalicWeb',
                left: 1256,
                top: 289,
                interact: false,
            },
            {
                name: 'diaryBlack',
                left: 0,
                top: 457,
                interact: false,
            },
            {
                name: 'signBlack',
                left: 380,
                top: 372,
                interact: false,
            },            
            {
                name: 'lightBlack',
                left: 890,
                top: 362,
                interact: false,
            }
        ]
    },    
]


// ============================== WINDOW ONLOAD =============================

var enemysArePresent = [];
var enemysInStage = [];
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
    createScene(stage, 3);
    characterController(stage);
    enemeyController()
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
            case 'enemy':
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
    var getBoundingBackground = background.getBoundingClientRect();
    document.getElementById('textArea').style.top = getBoundingBackground.top + getBoundingBackground.height + 20 + 'px';
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
    div.style = 'left: ' + element.left + 'px; top: ' + element.top + 'px;';
    appendContentIn(div, 'level');
    var elementTemp = JSON.parse(JSON.stringify(element))
    if (element.interact) {
        elementsInteract.push(elementTemp);
    }
    if(element.enemy) {
        enemysArePresent.push(elementTemp);
    }
    if(element === 'enemy'){
        enemysInStage.push(elementTemp);
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
            player.setAttribute('style', 'left: '+ (element.left + positionHide) + 'px');
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
    var intervalStart = element.left;
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
                var limitLeftBackground = background.id === 'PoliceCityStation' ? ((canvas.offsetWidth) - ((parseInt(background.offsetWidth))))+10 : ((canvas.offsetWidth - 167) - ((parseInt(background.offsetWidth)))); 
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
                var limitLeftBackground = background.id === 'PoliceCityStation' ? 0: 167; 
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
        var aim = element.left > player.left ? true : false;
        if(lastLeyPressRight === aim){
            if (element.name === 'paperboardShot') {
                element.damageRest === element.damage ? element.damageRest = 0 : element.damageRest ++;
                papaeBoard = document.getElementById(element.name);
                papaeBoard.setAttribute('style', 'background-position: -' + (40 * element.damageRest) +'px 0px;');
            }
        }
    }
}

//============================ ENEMY CONTROLLER =========================

function enemeyController () {
    var background = document.getElementsByClassName('background')[0];
    var enemy = document.getElementById('enemyMirror');
    var randomBehaivor = Math.floor((Math.random() * 2) + 1);
    var countSteps = 1;

    switch(randomBehaivor){
        case 1:
            var behaivor = setInterval(function (){
                enemy.setAttribute('style', 'transform: scaleX(1); top: '+ enemy.style.top + ';left: ' + (parseInt(enemy.style.left) + 10 ) + 'px; background-position: ' + (-80 + (-80 * countSteps)) + 'px -240px');
                countSteps === 6 ? countSteps = 1 : countSteps++;
                if(parseInt(enemy.style.left) > random(8, 150)){
                    clearInterval(behaivor);
                    stayEnemy (1, enemy);                    
                } 
            }, 200);
        break;
        case 2:
            var behaivor = setInterval(function (){
                enemy.setAttribute('style', 'transform: scaleX(-1); top: '+ enemy.style.top + ';left: ' + (parseInt(enemy.style.left) - 10 ) + 'px; background-position: ' + (-80 + (-80 * countSteps)) + 'px -240px');
                countSteps === 6 ? countSteps = 1 : countSteps++;
                if(parseInt(enemy.style.left) < random(8, 150)){
                    clearInterval(behaivor);
                    stayEnemy (-1, enemy);
                } 
            }, 200);
        break;
        default:
        break;
    }
}

function stayEnemy (direction, enemy) {
    var count = 1;
    var time = setInterval(function() {
        var animation = 'animation: steyCharacterAnimation 2s steps(8) infinite;';
        enemy.setAttribute('style', 'transform: scaleX(' + direction + ');' + animation + 'top: '+ enemy.style.top + ';left: ' + parseInt(enemy.style.left) + 'px;');
        count ++;  
        if(count === 20) {
            enemeyController();
            clearInterval(time); 
        }
    }, 300)
}

function random (num1, num){
    return Math.floor((Math.random() * num1) + 1) * num;
}