const questions =
    [
        {
            questionNumber: 1,
            cQuestions: "Have a seat! You're kind of handsome yourself.",
            answers: [{
                pAnswers: "Hello Gorgeous !!",
                point: 1,
                cReaction: "Thank you honey!"
            },
            {
                pAnswers: "Do I know you from somewhere?",
                point: 0,
                cReaction: "Oh, so creative."
            },
            {
                pAnswers: "Nice legs you got there",
                point: -1,
                cReaction: "What a pervert."
            }
            ]
        },

        {
            questionNumber: 2,
            cQuestions: "Is this your first time here?",
            answers: [{
                pAnswers: "I come here all the time",
                point: -1,
                cReaction: "I wonder why you're alone..."
            },
            {
                pAnswers: "First time actually",
                point: 0,
                cReaction: "Me too, never been here before"
            },
            {
                pAnswers: "Not sure, I usually drink a lot and don`t recall",
                point: 1,
                cReaction: "Hahahaha, you're funny"
            }
            ]
        },

        {
            questionNumber: 3,
            cQuestions: "What do you do for a living?",
            answers: [{
                pAnswers: "Unemployed at the moment",
                point: -1,
                cReaction: "A penniless guy... great."
            },
            {
                pAnswers: "I work mostly with finances",
                point: 0,
                cReaction: "WallStreet guy!"
            },
            {
                pAnswers: "I build houses from scratch",
                point: 1,
                cReaction: "WOW! A true male"
            }
            ]
        },

        {
            questionNumber: 4,
            cQuestions: "Do you enjoy any kind of sports",
            answers: [{
                pAnswers: "I'm a huge soccer fan!!",
                point: -1,
                cReaction: "If you were realy a fan, you`d never say soccer."
            },
            {
                pAnswers: "Snowboarding is my thing",
                point: 1,
                cReaction: "Would you teach me? I would love that."
            },
            {
                pAnswers: "Mostly watch NBA and NFL on sundays",
                point: 0,
                cReaction: "My father as well..."
            }
            ]
        },

        {
            questionNumber: 5,
            cQuestions: "So...",
            answers: [{
                pAnswers: "Can I buy a drink?",
                point: 1,
                cReaction: "Thought you`d never ask"
            },
            {
                pAnswers: "So.... what`s up?",
                point: -1,
                cReaction: "Boorrrriiiing.."
            },
            {
                pAnswers: "You have beautiful eyes, did you know that?",
                point: 0,
                cReaction: "Actually yeah. Hahaha!"
            }
            ]
        },

        {
            questionNumber: 6,
            cQuestions: "What are you drinking today?",
            answers: [{
                pAnswers: "Aperol Spritz",
                point: 1,
                cReaction: "Nice, I'll have the same as you"
            },
            {
                pAnswers: "Just a light beer",
                point: -1,
                cReaction: "Are you on a diet??"
            },
            {
                pAnswers: "Water only, I don`t drink",
                point: 0,
                cReaction: "That`s ok. Keep hydrated."
            }
            ]
        },

        {
            questionNumber: 7,
            cQuestions: "You look well dress tonight. Where do you buy your clothes?",
            answers: [{
                pAnswers: "My mom buys it for me",
                point: 0,
                cReaction: "You must be busy then."
            },
            {
                pAnswers: "At department stores mostly",
                point: -1,
                cReaction: "We have a cheapskate here."
            },
            {
                pAnswers: "Salvatore Ferragamo",
                point: 1,
                cReaction: "Wow! So fancy."
            }
            ]
        },


        {
            questionNumber: 8,
            cQuestions: "The light is low here. I cannot see the color of your eyes properly.",
            answers: [{
                pAnswers: "That`s because I'm wearing glasses",
                point: 0,
                cReaction: "Oh yeah, I can see it now."
            },
            {
                pAnswers: "They are dark green in the sun.",
                point: 1,
                cReaction: "My favorite color."
            },
            {
                pAnswers: "Blue as the ocean",
                point: -1,
                cReaction: "That was kind of lame."
            }
            ]
        },

        {
            questionNumber: 9,
            cQuestions: "Did you tip the bartender? My drink was $ 11,12, yours was half of it, they ask 15% tip.",
            answers: [{
                pAnswers: "I gave  $2,50",
                point: 1,
                cReaction: "Clever guy !"
            },
            {
                pAnswers: "Yeah, $ 3.61",
                point: 0,
                cReaction: "Ok, that`s was way more than 15%."
            },
            {
                pAnswers: "I don't usually tip",
                point: -1,
                cReaction: "Seriously???"
            }
            ]
        },

        {
            questionNumber: 10,
            cQuestions: "I'm kind of bored today, I may not stay longer",
            answers: [{
                pAnswers: "Can I give you a ride home?",
                point: 0,
                cReaction: "Not so fast honey."
            },
            {
                pAnswers: "There`s a club next door, they said it’s the bomb.",
                point: 1,
                cReaction: "I heard about it ! Super nice!"
            },
            {
                pAnswers: "Ok, nice meeting you",
                point: -1,
                cReaction: "Can't say the same here"
            }
            ]
        },

        {
            questionNumber: 11,
            cQuestions: "Oh, I'm so worried about my puppy. Do you enjoy animals?",
            answers: [{
                pAnswers: "Yes, I am a cat person.",
                point: -1,
                cReaction: "Ugh, hate cats."
            },
            {
                pAnswers: "My dog's name is Ted. It`s a mix",
                point: 1,
                cReaction: "That's so nice of you!"
            },
            {
                pAnswers: "In my plate, yeah!",
                point: 0,
                cReaction: "That's fine. I am not a vegetarian myself."
            }
            ]
        }

    ];

class questionsGame {
    constructor(questions) {
        this.questions = questions;
        this.randomQuestions = [];
        this.answeredQuestions = [];
        this.answers = [];
        this.points = 0;
        this.shuffleQuestions();
        this.questionNumber = 0;
    }

    shuffleQuestions() {
        let copyQuestions = this.questions.slice(0);


        for (let i = 0; i <= this.questions.length - 1; i += 1) {

            if (i === 0) {
                this.randomQuestions.push(copyQuestions[0]);
            }
            else if (i === 1) {
                this.randomQuestions.push(copyQuestions[1]);
                copyQuestions.splice(0, 2);
            }
            else {
                let randomN = Math.floor(Math.random() * copyQuestions.length)
                this.randomQuestions.push(copyQuestions[randomN]);
                copyQuestions.splice(randomN, 1);
            }
        }
    }
}

class chatBoards {
    constructor(canvas, canvasW, canvasH) {
        this.canvas = canvas,
            this.ctx = this.canvas.getContext("2d"),
            this.canvasH = canvasH,
            this.canvasW = canvasW,
            this.carmenChatwidth = 520,
            this.carmenChatheight = 120,
            this.playerChatwidth = 360,
            this.playerChatHeight = 250,
            this.colorChatcarmen = '#f4b268',
            this.colorChatplayer = '#042f66',
            this.n = 0;

    }

    drawChatcarmen() {

        this.ctx.strokeStyle = '#1c100b';
        this.ctx.lineWidth = 10;
        this.ctx.setLineDash([20, 3, 3, 3, 3, 3, 3, 3]);
        this.ctx.fillStyle = this.colorChatcarmen;
        this.ctx.fillRect(120, 35, this.carmenChatwidth, this.carmenChatheight);
        this.ctx.strokeRect(120, 35, this.carmenChatwidth, this.carmenChatheight);
        this.ctx.fillStyle = this.colorChatplayer;
        this.ctx.textAlign = 'left';
        this.ctx.font = '24px serif';
        if (this.n > 0) {
            this.ctx.fillText(newQuestions.randomQuestions[this.n - 1].answers[0].cReaction, 130, 80);
        }
        this.ctx.fillText(newQuestions.randomQuestions[this.n].cQuestions, 130, 120);

    }

    drawChatplayer() {
        this.ctx.strokeStyle = '#1c100b';
        this.ctx.lineWidth = 10;
        this.ctx.setLineDash([20, 3, 3, 3, 3, 3, 3, 3]);
        this.ctx.fillStyle = this.colorChatplayer;
        this.ctx.fillRect(180, 250, this.playerChatwidth, this.playerChatHeight);
        this.ctx.strokeRect(180, 250, this.playerChatwidth, this.playerChatHeight);
        this.ctx.fillStyle = this.colorChatcarmen;
        this.ctx.textAlign = 'left';
        this.ctx.font = '24px serif';
        this.ctx.fillText(newQuestions.randomQuestions[this.n].answers[0].pAnswers, 200, 300);
        this.ctx.fillText(newQuestions.randomQuestions[this.n].answers[1].pAnswers, 200, 350);
        this.ctx.fillText(newQuestions.randomQuestions[this.n].answers[2].pAnswers, 200, 400);
    }
}
