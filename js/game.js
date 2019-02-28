// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You land in the Fortnite batte royale",
            choices: [
                {
                    text: "Grab guns and ammo",
                    nextLevel: "cave",
                },

                {
                    text: "don't grab loot or anything",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You discovered and grabbed the infinity sword!",
            choices: [ 
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "you die and go back to the lobby",
            choices: [ 
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
