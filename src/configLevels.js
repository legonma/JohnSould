var stage = [{
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
    friend: [{
        name: 'friendMirror',
        interact: true,
        interactCanMove: true,  
        dialogs: [
            'hi, im new here, my name is john where is my office',
            'you are the same guy in the picture',
            'where is the bathroom'
        ],
        life: 1,
        top: 60,
        left: 0
    }],
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
    enemy: [{
        name: 'enemyMirror',
        enemy: false,
        life: 1,
        top: 179,
        left: 0
    }],
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
        paper: true
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
{
    level: 6,
    scene: {
        width: 1852,
        height: 593,
        id: 'doctorHouse'
    },

    character: {
        top: 261
    }
},
{
    level: 7,
    scene: {
        width: 780,
        height: 641,
        id: 'teslaDoc'
    },

    character: {
        top: 261
    }
},     
]
