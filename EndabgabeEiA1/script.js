var EndabgabeEiA1;
(function (EndabgabeEiA1) {
    window.addEventListener("load", handleLoad);
    let randomHTMLQuestion;
    let htmlCounter = 0;
    let alreadyAskedQuestions = [];
    let category;
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
            answers: ["element größer gleich element", "element element", "element + element", "element ~ element"],
            correctAnswer: "element größer gleich element",
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
        cssButton.addEventListener("click", HTMLButtonStart);
        let typeScriptButton = document.getElementById("TypeScriptButton");
        typeScriptButton.addEventListener("click", HTMLButtonStart);
        let mixedButton = document.getElementById("MixedButton");
        mixedButton.addEventListener("click", HTMLButtonStart);
    }
    //nun soll bei einem Klick auf die Buttons zufällig aus der jeweiligen Kategorie eine Frage und die dazu gehörigen Antwortmöglichkeiten angezeigt werden
    function HTMLButtonStart(_event) {
        let target = _event.target;
        if (target.innerHTML == "HTML" || category == "HTML") {
            //wenn HTML ausgewählt wurde, setzt man die Katgeorie auf HTML
            category = "HTML";
            randomHTMLQuestion = Math.floor(Math.random() * 5);
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist 
            while (alreadyAskedQuestions.includes(randomHTMLQuestion)) {
                randomHTMLQuestion = Math.floor(Math.random() * 5);
            }
        }
        if (target.innerHTML == "CSS" || category == "CSS") {
            //wenn CSS ausgewählt wurde setzt man die Kategorie auf CSS
            category = "CSS";
            randomHTMLQuestion = Math.floor(Math.random() * 5) + 5;
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomHTMLQuestion)) {
                randomHTMLQuestion = Math.floor(Math.random() * 5) + 5;
            }
        }
        if (target.innerHTML == "TypeScript" || category == "TypeScript") {
            //wenn TypeScript ausgewählt wurde setzt man die Kategorie auf TypeScript
            category = "TypeScript";
            randomHTMLQuestion = Math.floor(Math.random() * 5) + 10;
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomHTMLQuestion)) {
                randomHTMLQuestion = Math.floor(Math.random() * 5) + 10;
            }
        }
        if (target.innerHTML == "Mixed" || category == "Mixed") {
            //wenn Mixed ausgewählt wurde setzt man die Katgeorie auf Mixed
            category = "Mixed";
            randomHTMLQuestion = Math.floor(Math.random() * 15);
            //nun werden so lange Zufallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomHTMLQuestion)) {
                randomHTMLQuestion = Math.floor(Math.random() * 15);
            }
        }
        //nun soll die zufällig generierte Zahl in dem Array alreadyAskedQuestions gespeichert werden
        alreadyAskedQuestions.push(randomHTMLQuestion);
        //nun soll aus der Kategorie HTML eine zufällige Frage ausgesucht werden, und als String angezeigt werden
        //ebenfalls sollen die dazugehörigen ANtwortmöglichkeiten als klickbatte Buttons angezeigt werden
        //wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
        //wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
        //wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
        //wenn er auf den Button klickt soll er wieder die Auswahl zwischen den Kategorien sehen
        let randomHTMLQuestionString = questions[randomHTMLQuestion].question;
        let htmlQuestion = document.getElementById("htmlQuestion");
        htmlQuestion.innerHTML = randomHTMLQuestionString;
        htmlQuestion.hidden = false;
        //nun wird ein number Array erstellt dass bis zu 3 Zahlen enthält, diese werden dann geshuffelt und so werden die Antworten zufällig generiert
        let randomAnswers = [0, 1, 2];
        randomAnswers = shuffle(randomAnswers);
        function shuffle(_array) {
            let currentIndex = _array.length;
            let temporaryValue;
            let randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = _array[currentIndex];
                _array[currentIndex] = _array[randomIndex];
                _array[randomIndex] = temporaryValue;
            }
            return _array;
        }
        let htmlAnswer1 = document.getElementById("answer1");
        //nun wird das erste Element des Arrays randomAnswers genommen und als Index für das Array answers genommen
        htmlAnswer1.innerHTML = questions[randomHTMLQuestion].answers[randomAnswers[0]];
        htmlAnswer1.addEventListener("click", checkAnswer);
        htmlAnswer1.hidden = false;
        let htmlAnswer2 = document.getElementById("answer2");
        htmlAnswer2.innerHTML = questions[randomHTMLQuestion].answers[randomAnswers[1]];
        htmlAnswer2.addEventListener("click", checkAnswer);
        htmlAnswer2.hidden = false;
        let htmlAnswer3 = document.getElementById("answer3");
        htmlAnswer3.innerHTML = questions[randomHTMLQuestion].answers[randomAnswers[2]];
        htmlAnswer3.addEventListener("click", checkAnswer);
        htmlAnswer3.hidden = false;
        let htmlAnswer4 = document.getElementById("answer4");
        htmlAnswer4.innerHTML = questions[randomHTMLQuestion].answers[randomAnswers[3]];
        htmlAnswer4.addEventListener("click", checkAnswer);
        htmlAnswer4.hidden = false;
        let htmlExplanation = document.getElementById("htmlExplanation");
        htmlExplanation.innerHTML = questions[randomHTMLQuestion].explanation;
        htmlExplanation.hidden = true;
        let htmlLink = document.getElementById("htmlLink");
        htmlLink.href = questions[randomHTMLQuestion].links;
        htmlLink.innerHTML = questions[randomHTMLQuestion].links;
        htmlLink.hidden = true;
        let NextQuestion = document.getElementById("NextQuestion");
        NextQuestion.addEventListener("click", HTMLButtonStart);
        let htmlCounter = 0;
    }
    function checkAnswer(_event) {
        let target = _event.target;
        console.log(target.innerHTML);
        console.log(questions[randomHTMLQuestion].correctAnswer);
        if (target.innerHTML == questions[randomHTMLQuestion].correctAnswer) {
            htmlCounter++;
            document.getElementById("counter").innerHTML = htmlCounter.toString();
            let htmlExplanation = document.getElementById("htmlExplanation");
            htmlExplanation.hidden = false;
            let htmlLink = document.getElementById("htmlLink");
            htmlLink.hidden = false;
            let NextQuestion = document.getElementById("NextQuestion");
            NextQuestion.hidden = false;
            document.getElementById("answer1").hidden = true;
            document.getElementById("answer2").hidden = true;
            document.getElementById("answer3").hidden = true;
            document.getElementById("answer4").hidden = true;
            document.getElementById("htmlQuestion").hidden = true;
            if (htmlCounter == 5) {
                htmlExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!";
                htmlLink.hidden = true;
                NextQuestion.hidden = true;
                //wenn alle Fragen richtig beantwortet wurden soll der Counter wieder auf 0 gesetzt werden
                htmlCounter = 0;
                //nun sollen wieder alle Fragen bereitgestellt werden
                alreadyAskedQuestions = [];
            }
        }
        else {
            alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
        }
    }
})(EndabgabeEiA1 || (EndabgabeEiA1 = {}));
//# sourceMappingURL=script.js.map