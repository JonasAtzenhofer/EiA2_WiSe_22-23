var EndabgabeEiA1;
(function (EndabgabeEiA1) {
    window.addEventListener("load", handleLoad);
    let score = 0;
    let questions = [
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
    function handleLoad(_event) {
        let htmlButton = document.getElementById("HTMLButton");
        htmlButton.addEventListener("click", HTMLButtonStart);
        let cssButton = document.getElementById("CSSButton");
        cssButton.addEventListener("click", CSSButtonStart);
        let typeScriptButton = document.getElementById("TypeScriptButton");
        typeScriptButton.addEventListener("click", TypeScriptButtonStart);
        let mixedButton = document.getElementById("MixedButton");
        mixedButton.addEventListener("click", MixedButtonStart);
    }
    //nun soll bei einem Klick auf die Buttons zufällig aus der jeweiligen Kategorie eine Frage und die dazu gehörigen Antwortmöglichkeiten angezeigt werden
    function HTMLButtonStart() {
        //nun soll aus der Kategorie HTML eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen
        let randomHTMLQuestion = Math.floor(Math.random() * 5);
        let randomHTMLQuestionString = questions[randomHTMLQuestion].question;
        let htmlQuestion = document.getElementById("htmlQuestion");
        htmlQuestion.innerHTML = randomHTMLQuestionString;
        let htmlAnswer1 = document.getElementById("answer1");
        htmlAnswer1.innerHTML = questions[randomHTMLQuestion].answers[0];
        htmlAnswer1.addEventListener("click", checkAnswer);
        let htmlAnswer2 = document.getElementById("answer2");
        htmlAnswer2.innerHTML = questions[randomHTMLQuestion].answers[1];
        htmlAnswer2.addEventListener("click", checkAnswer);
        let htmlAnswer3 = document.getElementById("answer3");
        htmlAnswer3.innerHTML = questions[randomHTMLQuestion].answers[2];
        htmlAnswer3.addEventListener("click", checkAnswer);
        let htmlAnswer4 = document.getElementById("answer4");
        htmlAnswer4.innerHTML = questions[randomHTMLQuestion].answers[3];
        htmlAnswer4.addEventListener("click", checkAnswer);
        let htmlExplanation = document.getElementById("htmlExplanation");
        htmlExplanation.innerHTML = questions[randomHTMLQuestion].explanation;
        let htmlLink = document.getElementById("htmlLink");
        htmlLink.href = questions[randomHTMLQuestion].links;
        htmlLink.innerHTML = questions[randomHTMLQuestion].links;
        let NextQuestion = document.getElementById("NextQuestion");
        NextQuestion.addEventListener("click", HTMLButtonStart);
        let htmlCounter = 0;
        function checkAnswer(_event) {
            let target = _event.target;
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
            }
            else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }
    }
    function CSSButtonStart() {
        //nun soll aus der Kategorie CSS eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen
        let randomCSSQuestion = Math.floor(Math.random() * 5);
        let randomCSSQuestionString = questions[randomCSSQuestion].question;
        let cssQuestion = document.getElementById("cssQuestion");
        cssQuestion.innerHTML = randomCSSQuestionString;
        let cssAnswer1 = document.getElementById("answer1");
        cssAnswer1.innerHTML = questions[randomCSSQuestion].answers[0];
        cssAnswer1.addEventListener("click", checkAnswer);
        let cssAnswer2 = document.getElementById("answer2");
        cssAnswer2.innerHTML = questions[randomCSSQuestion].answers[1];
        cssAnswer2.addEventListener("click", checkAnswer);
        let cssAnswer3 = document.getElementById("answer3");
        cssAnswer3.innerHTML = questions[randomCSSQuestion].answers[2];
        cssAnswer3.addEventListener("click", checkAnswer);
        let cssAnswer4 = document.getElementById("answer4");
        cssAnswer4.innerHTML = questions[randomCSSQuestion].answers[3];
        cssAnswer4.addEventListener("click", checkAnswer);
        let cssExplanation = document.getElementById("cssExplanation");
        cssExplanation.innerHTML = questions[randomCSSQuestion].explanation;
        let cssLink = document.getElementById("cssLink");
        cssLink.href = questions[randomCSSQuestion].links;
        cssLink.innerHTML = questions[randomCSSQuestion].links;
        let cssNextQuestion = document.getElementById("cssNextQuestion");
        cssNextQuestion.addEventListener("click", CSSButtonStart);
        let cssCounter = 0;
        function checkAnswer(_event) {
            let target = _event.target;
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
            }
            else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }
    }
    function TypeScriptButtonStart() {
        //nun soll aus der Kategorie TypeScript eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen
        let randomTypeScriptQuestion = Math.floor(Math.random() * 5);
        let randomTypeScriptQuestionString = questions[randomTypeScriptQuestion].question;
        let typeScriptQuestion = document.getElementById("typeScriptQuestion");
        typeScriptQuestion.innerHTML = randomTypeScriptQuestionString;
        let typeScriptAnswer1 = document.getElementById("answer1");
        typeScriptAnswer1.innerHTML = questions[randomTypeScriptQuestion].answers[0];
        typeScriptAnswer1.addEventListener("click", checkAnswer);
        let typeScriptAnswer2 = document.getElementById("answer2");
        typeScriptAnswer2.innerHTML = questions[randomTypeScriptQuestion].answers[1];
        typeScriptAnswer2.addEventListener("click", checkAnswer);
        let typeScriptAnswer3 = document.getElementById("answer3");
        typeScriptAnswer3.innerHTML = questions[randomTypeScriptQuestion].answers[2];
        typeScriptAnswer3.addEventListener("click", checkAnswer);
        let typeScriptAnswer4 = document.getElementById("answer4");
        typeScriptAnswer4.innerHTML = questions[randomTypeScriptQuestion].answers[3];
        typeScriptAnswer4.addEventListener("click", checkAnswer);
        let typeScriptExplanation = document.getElementById("typeScriptExplanation");
        typeScriptExplanation.innerHTML = questions[randomTypeScriptQuestion].explanation;
        let typeScriptLink = document.getElementById("typeScriptLink");
        typeScriptLink.href = questions[randomTypeScriptQuestion].links;
        typeScriptLink.innerHTML = questions[randomTypeScriptQuestion].links;
        let typeScriptNextQuestion = document.getElementById("typeScriptNextQuestion");
        typeScriptNextQuestion.addEventListener("click", TypeScriptButtonStart);
        let typeScriptCounter = 0;
        function checkAnswer(_event) {
            let target = _event.target;
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
            }
            else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }
    }
    function MixedButtonStart() {
        //nun soll aus einer zufälligen Kategorie eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen Antwortmöglichkeiten als klickbare Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        let randomMixedQuestion = Math.floor(Math.random() * 5);
        let randomMixedQuestionString = questions[randomMixedQuestion].question;
        let mixedQuestion = document.getElementById("mixedQuestion");
        mixedQuestion.innerHTML = randomMixedQuestionString;
        let mixedAnswer1 = document.getElementById("answer1");
        mixedAnswer1.innerHTML = questions[randomMixedQuestion].answers[0];
        mixedAnswer1.addEventListener("click", checkAnswer);
        let mixedAnswer2 = document.getElementById("answer2");
        mixedAnswer2.innerHTML = questions[randomMixedQuestion].answers[1];
        mixedAnswer2.addEventListener("click", checkAnswer);
        let mixedAnswer3 = document.getElementById("answer3");
        mixedAnswer3.innerHTML = questions[randomMixedQuestion].answers[2];
        mixedAnswer3.addEventListener("click", checkAnswer);
        let mixedAnswer4 = document.getElementById("answer4");
        mixedAnswer4.innerHTML = questions[randomMixedQuestion].answers[3];
        mixedAnswer4.addEventListener("click", checkAnswer);
        let mixedExplanation = document.getElementById("mixedExplanation");
        mixedExplanation.innerHTML = questions[randomMixedQuestion].explanation;
        let mixedLink = document.getElementById("mixedLink");
        mixedLink.href = questions[randomMixedQuestion].links;
        mixedLink.innerHTML = questions[randomMixedQuestion].links;
        let mixedNextQuestion = document.getElementById("mixedNextQuestion");
        mixedNextQuestion.addEventListener("click", MixedButtonStart);
        let mixedCounter = 0;
        function checkAnswer(_event) {
            let target = _event.target;
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
            }
            else {
                alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
            }
        }
    }
})(EndabgabeEiA1 || (EndabgabeEiA1 = {}));
//# sourceMappingURL=script.js.map