//============================ ENEMY CONTROLLER =========================

function enemeyController () {
    var stopMoveEvent = false;
    var gun = false;
    var pickUp = false;
    var background = document.getElementsByClassName('background')[0];
    var randomBehaivor = Math.floor((Math.random() * 2) + 1);
    var countSteps = 1;
    var steps = elementsInteractWithEnemy[Math.floor((Math.random() * elementsInteractWithEnemy.length))]; 
    var enemyDirection = 1;
    var behaivor = setInterval(function (){
    var enemy = document.getElementById('enemyMirror');
    var character = document.getElementById('characterBox');
    if(!enemy){
        clearInterval(behaivor)
        return;
    }
        //take a gun ---------------------------------------------------------------
        if(enemy.offsetLeft < character.offsetLeft && enemyDirection === 1 && (Math.abs(enemy.offsetLeft - character.offsetLeft) < 200) && !characterHide) {
            //console.log(characterHide)
            if(!gun) {
                stopMoveEvent = true;
                takeGun(enemy, gun, stopMoveEvent)
                gun = true; 
            } else {
                clearInterval(behaivor);
                modeCombat(enemyDirection);
            }
        }
        if(enemy.offsetLeft > character.offsetLeft && enemyDirection === -1 && (Math.abs(enemy.offsetLeft - character.offsetLeft) < 200) && !characterHide) {
            if(!gun) {
                stopMoveEvent = true;
                takeGun(enemy, gun, stopMoveEvent)
                gun = true; 
            } else {
                clearInterval(behaivor);
                modeCombat(enemyDirection);
            }
        }
        // -------------------------------------------------------------------------
        switch(1){
            //Walk to an object.
            case 1:
            //console.log(steps)
            if(!stopMoveEvent) {
                if(parseInt(enemy.style.left) < (steps.left)) {
                    enemy.setAttribute('style', 'transform: scaleX(1); top: ' + enemy.style.top + ';left: ' + (parseInt(enemy.style.left) + 10 ) + 'px; background-position: ' + (-80 + (-80 * countSteps)) + 'px -240px');
                    enemyDirection = 1;
                    } 
                if(parseInt(enemy.style.left) > (steps.left)) {
                    enemy.setAttribute('style', 'transform: scaleX(-1); top: '+ enemy.style.top + ';left: ' + (parseInt(enemy.style.left) - 10 ) + 'px; background-position: ' + (-80 + (-80 * countSteps)) + 'px -240px');
                    enemyDirection = -1;    
                }
            }
            break;
            default:
            break;
        }
        countSteps === 6 ? countSteps = 1 : countSteps++;
        if((parseInt(enemy.style.left) - steps.left) === 0 || Math.abs(parseInt(enemy.style.left) - steps.left) < 10) {
            clearInterval(behaivor);
            stayEnemy (enemyDirection, enemy);                    
            
        } 
    }, 200);

    function stayEnemy (enemyDirection, enemy) {
        var count = 1;
        var stay = setInterval(function() {
            var animation = 'animation: steyEnemyAnimation 2s steps(8) infinite;';
            var enemy = document.getElementById('enemyMirror');
            var character = document.getElementById('characterBox');
            enemy.setAttribute('style', 'transform: scaleX(' + enemyDirection + ');' + animation + 'top: '+ enemy.style.top + ';left: ' + parseInt(enemy.style.left) + 'px;');
            count ++;  
            if(count === 20 || (!characterHide && (enemy.offsetLeft < character.offsetLeft) && (enemyDirection === 1) || (!characterHide && (enemy.offsetLeft > character.offsetLeft) && enemyDirection === -1))) {
                enemy.style.animation = null;
                clearInterval(stay);
                count = 1;
                enemeyController()
            }
        }, 300)
    }
    
    function goToRandomElement (){
        return Math.floor((Math.random() * elementsInteractWithEnemy.length) + 1);
    }

    function takeGun(enemy, gun, stopMoveEvent) {
        var pickUpFrame = 0;
            var pickUpInterval = setInterval(() => {
                enemy.style.backgroundPosition = (-80 * pickUpFrame) + 'px -120px';
                if (pickUpFrame === 3) {
                    stopMoveEvent = false;
                    clearInterval(pickUpInterval);
                } else {
                    pickUpFrame++;
                }
            }, 150);
    }
   
    function hideGun(enemy, gun, stopMoveEvent) {
        var pickUpFrame = 3;
        var pickUpInterval = setInterval(() => {
            enemy.style.transform = 'scaleX(' + enemyDirection + ')';
            enemy.style.backgroundPosition = (-80 * pickUpFrame) + 'px -120px';
            if (!pickUpFrame) {
                gun = false;
                clearInterval(pickUpInterval);
                stopMoveEvent = false;
                enemeyController()                                
            } else {
                pickUpFrame--;
            }
            
        }, 150);
    }
    
    function fire(enemy, enemyDirection) {
        fireFrame = 0;
        var pickUpInterval = setInterval(() => {
            enemy.style.transform = 'scaleX(' + enemyDirection + ')';
            enemy.style.backgroundPosition = (-320 + (-80 * fireFrame)) + 'px -120px';
    
            if (fireFrame === 2) {
                pistolShotSound.play(); 
            }
            if (fireFrame === 5) {
                enemy.style.transform = 'scaleX(' + enemyDirection + ')';
                enemy.style.backgroundPosition = (-320) + 'px -120px';
                clipFall.play();
                clearInterval(pickUpInterval);
            } else {
                fireFrame++;
            }
        }, 300);
    }
    
    function enemyHide(enemyDirection) {
        var enemy = document.getElementById('enemyMirror');
        enemy.style.transform = 'scaleX('+ enemyDirection +')';
        enemy.style.backgroundPosition = '-640px -240px';    
    }
    
    function modeCombat(enemyDirection) {
        var countFire = Math.floor(Math.random()*2)+1;
        var combat = setInterval(() => {
            var enemy = document.getElementById('enemyMirror');
            var character = document.getElementById('characterBox');
            if(!enemy){
                clearInterval(combat)
                return;
            }
            if(enemy.offsetLeft < character.offsetLeft && enemyDirection === 1 && (Math.abs(enemy.offsetLeft - character.offsetLeft) < 200) || (enemy.offsetLeft > character.offsetLeft && enemyDirection === -1 && (Math.abs(enemy.offsetLeft - character.offsetLeft) < 200))) {
                if(!characterHide) {
                    if(countFire) {
                        fire(enemy, enemyDirection);
                        countFire--;        
                    }
                } else {
                    enemyHide(enemyDirection)
                    countFire = Math.floor(Math.random()*2)+1;
                }
            } else { 
                hideGun(enemy)
                clearInterval(combat)
            }
        }, 2000);
    }

}
