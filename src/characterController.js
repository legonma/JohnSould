
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
            characterHide = false;
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
                        playerSprite.style.animation = null;
                        playerSprite.style.transform = 'scaleX(' + lastLeyPressRight ? 1 : -1; + ')';
                        playerSprite.style.backgroundPosition = (-80 * pickUpFrame) + 'px -120px';

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
                        playerSprite.style.animation = null;
                        playerSprite.style.transform = 'scaleX(' + lastLeyPressRight ? 1 : -1; + ')';
                        playerSprite.style.backgroundPosition = (-80 * pickUpFrame) + 'px -120px';
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


function checkIfPlayerCanHide(player, playerSprite, direction) {
    playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[8] +' -240px');    
    var playerLocation = parseInt(player.style.left);
    for (var i = 0; i < objetsToHide.length; i++) {
        var element = objetsToHide[i];
        if (objectsAreInPosition(playerLocation, element)) {
            positionHide = lastLeyPressRight ? 10 : document.getElementById(element.name).offsetWidth - 10 ;
            player.setAttribute('style', 'left: '+ (element.left + positionHide) + 'px');
            if(element.hide === 'down') {
                playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[0] +' -360px');                
            } 
            if(element.hide === 'up') {
                playerSprite.setAttribute('style', 'transform: scaleX('+ direction +'); background-position: ' + arrayToSetInt[8] +' -360px');
            }   
        }
        characterHide = true;
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

function objectsAreInPosition(playerLocation, element) {
    var intervalStart = element.left;
    var intervalEnd = intervalStart + parseInt(document.getElementById(element.name).offsetWidth);
    return playerLocation >= intervalStart && playerLocation <= intervalEnd;
}
