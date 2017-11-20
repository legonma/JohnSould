var enemysArePresent = [];
var enemysInStage = [];
var elementsInteract = [];
var objetsToHide = [];
var elementsInteractWithEnemy = [];
var stopMoveEvent = false;
var stopQuestionEvent = true;
var characterHide = false;
var pickupGun = false;
var firstSteps;
var secondSteps;
var characterPosition = 0;
var allQuestions = [];
var qs;
var arrayToSetInt = ['0px','-80px','-160px','-240px','-320px','-400px','-480px','-560px','-640px','-720px'];
var lastLeyPressRight = false;

window.onload = function() {
    sceneConstructorController(stage, 0);
    characterController(stage);
}