#canvas {
	width: 1024px;
	height: 768px;
	position: absolute;
	background-color: black;
}

#background1 {
	width: 705px;
	height: 200px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(155, 235, 59, 1);	
/*
	background-image: url(background1.png)
*/
}

#level {
	position: relative;
	background-color: rgba(255, 235, 59, 1);
	display: flex;
}

#character {
/*	
	background-image: url(characterSprite.png);
*/
	background-repeat: no-repeat;
	background-position: 0px 0px;
	background-color: rgba(0, 0, 0, 1);
	width: 80px;
	height: 120px;
	position: absolute;
	display: flex;
	align-self: flex-end;
}


#door1, #door2 {
/*	
	background-image: url(doors.png);
*/
	background-repeat: no-repeat;
}

#door1 {
	background-color: brown;
	background-position: 0px 0px;
	position: absolute;
	display: flex;
	align-self: flex-end;
}

#door2 {
	position: absolute;
	background-color: brown;
	display: flex;
	align-self: flex-end;
}

#ventilador {
	  animation: ventiladorAnimation 1s steps(10) infinite;
}

@keyframes ventiladorAnimation {
    100% { background-position: -824px;}
}

@keyframes steyCharacterAnimation {
    100% { background-position-x: -640px}
}

@keyframes walkCharacterAnimation {
	100% { 
		background-position-x: -656px;
	 }
}

}