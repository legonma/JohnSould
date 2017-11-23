function friendController () {
    var stopMoveEvent = false;
    var countSteps = 1;
    var steps = elementsInteractWithEnemy[Math.floor((Math.random() * elementsInteractWithEnemy.length))]; 
    var enemyDirection = 1;
    var behaivor = setInterval(function (){
    var friend = document.getElementById('friendMirror');
    var character = document.getElementById('characterBox');
    if(!friend){
        clearInterval(behaivor)
        return;
    }
        //take a gun ---------------------------------------------------------------
        if(friend.offsetLeft < character.offsetLeft && enemyDirection === 1 && (Math.abs(friend.offsetLeft - character.offsetLeft) < 200) && !characterHide) {
            //console.log(characterHide)
            clearInterval(behaivor);            
            stopMoveEvent= true;
            stayEnemy (enemyDirection, friend);                                
        }
        if(friend.offsetLeft > character.offsetLeft && enemyDirection === -1 && (Math.abs(friend.offsetLeft - character.offsetLeft) < 200) && !characterHide) {
            clearInterval(behaivor);           
            stopMoveEvent= true;            
            stayEnemy (enemyDirection, friend);                    
        }
        // -------------------------------------------------------------------------
        switch(1){
            //Walk to an object.
            case 1:
            //console.log(steps)
            if(!stopMoveEvent) {
                if(friend.offsetLeft < steps.left) {
                    friend.style.transform = 'scaleX(1)';
                    friend.style.left = (friend.offsetLeft + 10) + 'px';
                    friend.style.backgroundPosition = (-80 + (-80 * countSteps)) + 'px -240px';
                    enemyDirection = 1;
                    } 
                if(friend.offsetLeft > steps.left) {
                    friend.style.transform = 'scaleX(-1)';
                    friend.style.left = (friend.offsetLeft - 10) + 'px';
                    friend.style.backgroundPosition = (-80 + (-80 * countSteps)) + 'px -240px';
                    enemyDirection = -1;    
                }
            }
            break;
            default:
            break;
        }
        countSteps === 6 ? countSteps = 1 : countSteps++;
        if((parseInt(friend.style.left) - steps.left) === 0 || Math.abs(parseInt(friend.style.left) - steps.left) < 10) {
            clearInterval(behaivor);
            stayEnemy (enemyDirection, friend);                    
            
        } 
        function stayEnemy (enemyDirection, friend) {
            var count = 1;
            var stay = setInterval(function() {
                var animation = 'animation: steyEnemyAnimation 2s steps(8) infinite;';
                var friend = document.getElementById('friendMirror');
                var character = document.getElementById('characterBox');
                friend.setAttribute('style', 'transform: scaleX(' + enemyDirection + ');' + animation + 'top: '+ friend.style.top + ';left: ' + parseInt(friend.style.left) + 'px;');
                count ++;  
                if(count === 20 || (!characterHide && (friend.offsetLeft < character.offsetLeft) && (enemyDirection === 1) || (!characterHide && (friend.offsetLeft > character.offsetLeft) && enemyDirection === -1))) {
                    friend.style.animation = null;
                    clearInterval(stay);
                    count = 1;
                    friendController()
                }
            }, 300)
        }
        
        function goToRandomElement (){
            return Math.floor((Math.random() * elementsInteractWithEnemy.length) + 1);
        }
    }, 200);


}
