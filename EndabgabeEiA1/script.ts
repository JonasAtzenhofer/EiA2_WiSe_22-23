namespace EndabgabeEiA1 {

    window.addEventListener("load", handleLoad);


    interface Question {
        question: string;
        answers: string[];
        correctAnswer: string;
        explanation: string;
        links: string;
        category: string;
    }

    let score: number = 0;


    let questions: Question[] = [
        {
            question: "Wie wird ein Absatz in HTML dargestellt?",
            answers: ["p", "h1", "div", "span"],
            correctAnswer: "p",
            explanation: "Ein Absatz wird in HTML mit dem p-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_p.asp",
            category: "HTML"
        },

        {
            question: "Wie wird ein Bild in HTML dargestellt?",
            answers: ["img", "image", "picture", "src"],
            correctAnswer: "img",
            explanation: "Ein Bild wird in HTML mit dem img-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_img.asp",
            category: "HTML"
        },

        {
            question: "Wie wird ein Link in HTML dargestellt?",
            answers: ["a", "link", "href", "url"],
            correctAnswer: "a",
            explanation: "Ein Link wird in HTML mit dem a-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_a.asp",
            category: "HTML"
        },

        {
            question: "Wie wird ein Button in HTML dargestellt?",
            answers: ["button", "btn", "input", "click"],
            correctAnswer: "button",
            explanation: "Ein Button wird in HTML mit dem button-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_button.asp",
            category: "HTML"
        },

        {
            question: "Wie wird ein Input-Feld in HTML dargestellt?",
            answers: ["input", "inputfield", "textfield", "inputtext"],
            correctAnswer: "input",
            explanation: "Ein Input-Feld wird in HTML mit dem input-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_input.asp",
            category: "HTML"
        },

        {
            question: "Wie wird in CSS ein Element ausgewählt?",
            answers: ["#id", ".class", "element", "tag"],
            correctAnswer: "element",
            explanation: "In CSS wird ein Element mit dem Elementnamen ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in CSS eine Klasse ausgewählt?",
            answers: ["#id", ".class", "element", "tag"],
            correctAnswer: ".class",
            explanation: "In CSS wird eine Klasse mit einem Punkt vor dem Klassennamen ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in CSS eine ID ausgewählt?",
            answers: ["#id", ".class", "element", "tag"],
            correctAnswer: "#id",
            explanation: "In CSS wird eine ID mit einem Rautezeichen vor der ID ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in CSS ein Attribut ausgewählt?",
            answers: ["[attribute]", "attribute", "attribute()", "attribute[]"],
            correctAnswer: "[attribute]",
            explanation: "In CSS wird ein Attribut mit eckigen Klammern ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in CSS ein Kind ausgewählt?",
            answers: ["element > element", "element element", "element + element", "element ~ element"],
            correctAnswer: "element > element",
            explanation: "In CSS wird ein Kind mit einem > ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in TypeScript eine Variable deklariert?",
            answers: ["let", "var", "const", "int"],
            correctAnswer: "let",
            explanation: "In TypeScript wird eine Variable mit let deklariert.",
            links: "https://www.w3schools.com/js/js_let.asp",
            category: "TypeScript"
        },

        {
            question: "Wie wird in TypeScript eine Konstante deklariert?",
            answers: ["let", "var", "const", "int"],
            correctAnswer: "const",
            explanation: "In TypeScript wird eine Konstante mit const deklariert.",
            links: "https://www.w3schools.com/js/js_const.asp",
            category: "TypeScript"
        },

        {
            question: "Wie wird in TypeScript eine Funktion deklariert?",
            answers: ["function", "func", "function()", "func()"],
            correctAnswer: "function",
            explanation: "In TypeScript wird eine Funktion mit function deklariert.",
            links: "https://www.w3schools.com/js/js_functions.asp",
            category: "TypeScript"
        },

        {
            question: "Wie wird in TypeScript eine Klasse deklariert?",
            answers: ["class", "class()", "class{}", "class[]"],
            correctAnswer: "class",
            explanation: "In TypeScript wird eine Klasse mit class deklariert.",
            links: "https://www.w3schools.com/js/js_classes.asp",
            category: "TypeScript"
        },

        {
            question: "Wie wird in TypeScript ein Interface deklariert?",
            answers: ["interface", "interface()", "interface{}", "interface[]"],
            correctAnswer: "interface",
            explanation: "In TypeScript wird ein Interface mit interface deklariert.",
            links: "https://www.w3schools.com/js/js_classes.asp",
            category: "TypeScript"
        }

    ];

    function handleLoad(_event: Event): void {

        let htmlButton: HTMLButtonElement = document.getElementById("HTMLButton") as HTMLButtonElement;
        htmlButton.addEventListener("click", HTMLButtonStart);

        let cssButton: HTMLButtonElement = document.getElementById("CSSButton") as HTMLButtonElement;
        cssButton.addEventListener("click", CSSButtonStart);

        let typeScriptButton: HTMLButtonElement = document.getElementById("TypeScriptButton") as HTMLButtonElement;
        typeScriptButton.addEventListener("click", TypeScriptButtonStart);

        let mixedButton: HTMLButtonElement = document.getElementById("MixedButton") as HTMLButtonElement;
        mixedButton.addEventListener("click", MixedButtonStart);
    }

    //nun soll bei einem Klick auf die Buttons zufällig aus der jeweiligen Kategorie eine Frage und die dazu gehörigen Antwortmöglichkeiten angezeigt werden

    function HTMLButtonStart(): void {
        //nun soll aus der Kategorie HTML eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen

        let randomHTMLQuestion: number = Math.floor(Math.random() * 5);
        let randomHTMLQuestionString: string = questions[randomHTMLQuestion].question;
        let htmlQuestion: HTMLParagraphElement = document.getElementById("htmlQuestion") as HTMLParagraphElement;
        htmlQuestion.innerHTML = randomHTMLQuestionString;

        let htmlAnswer1: HTMLButtonElement = document.getElementById("answer1") as HTMLButtonElement;
        htmlAnswer1.innerHTML = questions[randomHTMLQuestion].answers[0];
        htmlAnswer1.addEventListener("click", checkAnswer);

        let htmlAnswer2: HTMLButtonElement = document.getElementById("answer2") as HTMLButtonElement;
        htmlAnswer2.innerHTML = questions[randomHTMLQuestion].answers[1];
        htmlAnswer2.addEventListener("click", checkAnswer);

        let htmlAnswer3: HTMLButtonElement = document.getElementById("answer3") as HTMLButtonElement;
        htmlAnswer3.innerHTML = questions[randomHTMLQuestion].answers[2];
        htmlAnswer3.addEventListener("click", checkAnswer);

        let htmlAnswer4: HTMLButtonElement = document.getElementById("answer4") as HTMLButtonElement;
        htmlAnswer4.innerHTML = questions[randomHTMLQuestion].answers[3];
        htmlAnswer4.addEventListener("click", checkAnswer);

        let htmlExplanation: HTMLParagraphElement = document.getElementById("htmlExplanation") as HTMLParagraphElement;
        htmlExplanation.innerHTML = questions[randomHTMLQuestion].explanation;

        let htmlLink: HTMLAnchorElement = document.getElementById("htmlLink") as HTMLAnchorElement;
        htmlLink.href = questions[randomHTMLQuestion].links;
        htmlLink.innerHTML = questions[randomHTMLQuestion].links;

        let NextQuestion: HTMLButtonElement = document.getElementById("NextQuestion") as HTMLButtonElement;
        NextQuestion.addEventListener("click", HTMLButtonStart);

        let htmlCounter: number = 0;


        function checkAnswer(_event: Event): void {
            let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
            if (target.innerHTML == questions[randomHTMLQuestion].correctAnswer) {
                htmlCounter++;
                htmlExplanation.style.display = "block";
                htmlLink.style.display = "block";
                NextQuestion.style.display = "block";
                htmlAnswer1.style.display = "none";
                htmlAnswer2.style.display = "none";
                htmlAnswer3.style.display = "none";
                htmlAnswer4.style.display = "none";
                htmlQuestion.style.display = "none";
                if (htmlCounter == 5) {
                    htmlExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
                    htmlLink.style.display = "none";
                    NextQuestion.style.display = "none";
                    NextQuestion.innerHTML = "Weiter zur nächsten Kategorie";
                    NextQuestion.addEventListener("click", CSSButtonStart);
                }
            } else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }

    }

    function CSSButtonStart(): void {
        //nun soll aus der Kategorie CSS eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen

        let randomCSSQuestion: number = Math.floor(Math.random() * 5);
        let randomCSSQuestionString: string = questions[randomCSSQuestion].question;
        let cssQuestion: HTMLParagraphElement = document.getElementById("cssQuestion") as HTMLParagraphElement;
        cssQuestion.innerHTML = randomCSSQuestionString;

        let cssAnswer1: HTMLButtonElement = document.getElementById("answer1") as HTMLButtonElement;
        cssAnswer1.innerHTML = questions[randomCSSQuestion].answers[0];
        cssAnswer1.addEventListener("click", checkAnswer);

        let cssAnswer2: HTMLButtonElement = document.getElementById("answer2") as HTMLButtonElement;
        cssAnswer2.innerHTML = questions[randomCSSQuestion].answers[1];
        cssAnswer2.addEventListener("click", checkAnswer);

        let cssAnswer3: HTMLButtonElement = document.getElementById("answer3") as HTMLButtonElement;
        cssAnswer3.innerHTML = questions[randomCSSQuestion].answers[2];
        cssAnswer3.addEventListener("click", checkAnswer);

        let cssAnswer4: HTMLButtonElement = document.getElementById("answer4") as HTMLButtonElement;
        cssAnswer4.innerHTML = questions[randomCSSQuestion].answers[3];
        cssAnswer4.addEventListener("click", checkAnswer);

        let cssExplanation: HTMLParagraphElement = document.getElementById("cssExplanation") as HTMLParagraphElement;
        cssExplanation.innerHTML = questions[randomCSSQuestion].explanation;

        let cssLink: HTMLAnchorElement = document.getElementById("cssLink") as HTMLAnchorElement;
        cssLink.href = questions[randomCSSQuestion].links;
        cssLink.innerHTML = questions[randomCSSQuestion].links;

        let cssNextQuestion: HTMLButtonElement = document.getElementById("cssNextQuestion") as HTMLButtonElement;
        cssNextQuestion.addEventListener("click", CSSButtonStart);

        let cssCounter: number = 0;

        function checkAnswer(_event: Event): void {
            let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
            if (target.innerHTML == questions[randomCSSQuestion].correctAnswer) {
                cssCounter++;
                cssExplanation.style.display = "block";
                cssLink.style.display = "block";
                cssNextQuestion.style.display = "block";
                cssAnswer1.style.display = "none";
                cssAnswer2.style.display = "none";
                cssAnswer3.style.display = "none";
                cssAnswer4.style.display = "none";
                cssQuestion.style.display = "none";
                if (cssCounter == 5) {
                    cssExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
                    cssLink.style.display = "none";
                    cssNextQuestion.style.display = "none";
                    cssNextQuestion.innerHTML = "Weiter zur nächsten Kategorie";
                    cssNextQuestion.addEventListener("click", TypeScriptButtonStart);
                }
            } else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }

        }
    }

    function TypeScriptButtonStart(): void {
        //nun soll aus der Kategorie TypeScript eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen

        let randomTypeScriptQuestion: number = Math.floor(Math.random() * 5);
        let randomTypeScriptQuestionString: string = questions[randomTypeScriptQuestion].question;
        let typeScriptQuestion: HTMLParagraphElement = document.getElementById("typeScriptQuestion") as HTMLParagraphElement;
        typeScriptQuestion.innerHTML = randomTypeScriptQuestionString;

        let typeScriptAnswer1: HTMLButtonElement = document.getElementById("answer1") as HTMLButtonElement;
        typeScriptAnswer1.innerHTML = questions[randomTypeScriptQuestion].answers[0];
        typeScriptAnswer1.addEventListener("click", checkAnswer);

        let typeScriptAnswer2: HTMLButtonElement = document.getElementById("answer2") as HTMLButtonElement;
        typeScriptAnswer2.innerHTML = questions[randomTypeScriptQuestion].answers[1];
        typeScriptAnswer2.addEventListener("click", checkAnswer);

        let typeScriptAnswer3: HTMLButtonElement = document.getElementById("answer3") as HTMLButtonElement;
        typeScriptAnswer3.innerHTML = questions[randomTypeScriptQuestion].answers[2];
        typeScriptAnswer3.addEventListener("click", checkAnswer);

        let typeScriptAnswer4: HTMLButtonElement = document.getElementById("answer4") as HTMLButtonElement;
        typeScriptAnswer4.innerHTML = questions[randomTypeScriptQuestion].answers[3];
        typeScriptAnswer4.addEventListener("click", checkAnswer);

        let typeScriptExplanation: HTMLParagraphElement = document.getElementById("typeScriptExplanation") as HTMLParagraphElement;
        typeScriptExplanation.innerHTML = questions[randomTypeScriptQuestion].explanation;

        let typeScriptLink: HTMLAnchorElement = document.getElementById("typeScriptLink") as HTMLAnchorElement;
        typeScriptLink.href = questions[randomTypeScriptQuestion].links;
        typeScriptLink.innerHTML = questions[randomTypeScriptQuestion].links;

        let typeScriptNextQuestion: HTMLButtonElement = document.getElementById("typeScriptNextQuestion") as HTMLButtonElement;
        typeScriptNextQuestion.addEventListener("click", TypeScriptButtonStart);

        let typeScriptCounter: number = 0;

        function checkAnswer(_event: Event): void {
            let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
            if (target.innerHTML == questions[randomTypeScriptQuestion].correctAnswer) {
                typeScriptCounter++;
                typeScriptExplanation.style.display = "block";
                typeScriptLink.style.display = "block";
                typeScriptNextQuestion.style.display = "block";
                typeScriptAnswer1.style.display = "none";
                typeScriptAnswer2.style.display = "none";
                typeScriptAnswer3.style.display = "none";
                typeScriptAnswer4.style.display = "none";
                typeScriptQuestion.style.display = "none";
                if (typeScriptCounter == 5) {
                    typeScriptExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
                    typeScriptLink.style.display = "none";
                    typeScriptNextQuestion.style.display = "none";
                    typeScriptNextQuestion.innerHTML = "Weiter zur nächsten Kategorie";
                    typeScriptNextQuestion.addEventListener("click", HTMLButtonStart);


                }
            } else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }
    }


    function MixedButtonStart(): void {
        //nun soll aus einer zufälligen Kategorie eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen Antwortmöglichkeiten als klickbare Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll

        let randomMixedQuestion: number = Math.floor(Math.random() * 5);
        let randomMixedQuestionString: string = questions[randomMixedQuestion].question;
        let mixedQuestion: HTMLParagraphElement = document.getElementById("mixedQuestion") as HTMLParagraphElement;
        mixedQuestion.innerHTML = randomMixedQuestionString;

        let mixedAnswer1: HTMLButtonElement = document.getElementById("answer1") as HTMLButtonElement;
        mixedAnswer1.innerHTML = questions[randomMixedQuestion].answers[0];
        mixedAnswer1.addEventListener("click", checkAnswer);

        let mixedAnswer2: HTMLButtonElement = document.getElementById("answer2") as HTMLButtonElement;
        mixedAnswer2.innerHTML = questions[randomMixedQuestion].answers[1];
        mixedAnswer2.addEventListener("click", checkAnswer);

        let mixedAnswer3: HTMLButtonElement = document.getElementById("answer3") as HTMLButtonElement;
        mixedAnswer3.innerHTML = questions[randomMixedQuestion].answers[2];
        mixedAnswer3.addEventListener("click", checkAnswer);

        let mixedAnswer4: HTMLButtonElement = document.getElementById("answer4") as HTMLButtonElement;
        mixedAnswer4.innerHTML = questions[randomMixedQuestion].answers[3];
        mixedAnswer4.addEventListener("click", checkAnswer);

        let mixedExplanation: HTMLParagraphElement = document.getElementById("mixedExplanation") as HTMLParagraphElement;
        mixedExplanation.innerHTML = questions[randomMixedQuestion].explanation;
        
        let mixedLink: HTMLAnchorElement = document.getElementById("mixedLink") as HTMLAnchorElement;
        mixedLink.href = questions[randomMixedQuestion].links;
        mixedLink.innerHTML = questions[randomMixedQuestion].links;

        let mixedNextQuestion: HTMLButtonElement = document.getElementById("mixedNextQuestion") as HTMLButtonElement;
        mixedNextQuestion.addEventListener("click", MixedButtonStart);

        let mixedCounter: number = 0;

        function checkAnswer(_event: Event): void {
            let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
            if (target.innerHTML == questions[randomMixedQuestion].correctAnswer) {
                mixedCounter++;
                mixedExplanation.style.display = "block";
                mixedLink.style.display = "block";
                mixedNextQuestion.style.display = "block";
                mixedAnswer1.style.display = "none";
                mixedAnswer2.style.display = "none";
                mixedAnswer3.style.display = "none";
                mixedAnswer4.style.display = "none";
                mixedQuestion.style.display = "none";
                if (mixedCounter == 5) {
                    mixedExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
                    mixedLink.style.display = "none";
                    mixedNextQuestion.style.display = "none";
                    mixedNextQuestion.innerHTML = "Weiter zur nächsten Kategorie";
                    mixedNextQuestion.addEventListener("click", HTMLButtonStart);
                }
            } else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }


            
    }}
    }


