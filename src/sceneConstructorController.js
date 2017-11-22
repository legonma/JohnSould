function sceneConstructorController(stage, level) {
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
                    enemeyController()    
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

function appendContentIn(content, id) {
    var level = document.getElementById(id);
    level.appendChild(content)
}

function createElementWall(wall, scene) {
    var backgroundId = document.getElementById(scene.id);
    var backgroundStyle = window.getComputedStyle(backgroundId, null);
    var widthStyle = parseInt(backgroundStyle.getPropertyValue('width')) - 20;
    var heightStyle = parseInt(backgroundStyle.getPropertyValue('height')) - 20;
    wall.style = 'width: ' + widthStyle + 'px; height: ' + heightStyle + 'px;';
}

function centerElementIn(background, canvas) {
    var newLeft;
    if(background.offsetWidth > canvas.offsetWidth) {
        background.id === 'PoliceCityStation' ? newLeft = 0 : newLeft = 167;
    } else {
        newLeft = (canvas.offsetWidth - background.offsetWidth) / 2    
    }
    var newTop = (canvas.offsetHeight - background.offsetHeight) / 2
    background.style = 'top: ' + newTop + 'px; left: ' + newLeft + 'px';
}

// ==================  ELEMENETS ON SCENE   ==========================
function createDomElement(element) {
    var div = document.createElement('div');
    div.id = element.name;
    div.style = 'left: ' + element.left + 'px; top: ' + element.top + 'px;';
    appendContentIn(div, 'level');
    var elementTemp = JSON.parse(JSON.stringify(element))
    if (element.interact) {
        elementsInteract.push(elementTemp);
        elementsInteractWithEnemy.push(elementTemp);
    }
    if(element.paper) {
        enemysArePresent.push(elementTemp);
    }
    if(element === 'enemy'){
        enemysInStage.push(elementTemp);
    }
    if(element.hide != undefined) {
        objetsToHide.push(elementTemp)
        elementsInteractWithEnemy.push(elementTemp);
    }
}

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