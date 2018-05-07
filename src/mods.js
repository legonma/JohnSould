
function questionMode() {
    stopMoveEvent = true;
    stopQuestionEvent = false;
    allQuestions = document.getElementById('textArea').childNodes
    qs = 0;
}

function defineActionWhenPressSpaceKey(player, stage) {
    var playerPosition = player.offsetLeft;
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
        elementsInteractWithEnemy = [];
        removeElements('canvas');
        sceneConstructorController(stage, element.levelOut);
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



function dialogWhenPressUp(player, element) {
    setTime(element.observation);
}
