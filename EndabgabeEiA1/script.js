var EndabgabeEiA1;
(function (EndabgabeEiA1) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const questions = [
            {
                question: "Wie wird ein Absatz in HTML dargestellt?",
                answers: ["<p>", "<h1>", "<div>", "<span>"],
                correctAnswer: "<p>",
                explanation: "Ein Absatz wird in HTML mit dem <p>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_p.asp"]
            },
            {
                question: "Wie wird ein Bild in HTML dargestellt?",
                answers: ["<img>", "<image>", "<picture>", "<src>"],
                correctAnswer: "<img>",
                explanation: "Ein Bild wird in HTML mit dem <img>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_img.asp"]
            },
            {
                question: "Wie wird ein Link in HTML dargestellt?",
                answers: ["<a>", "<link>", "<href>", "<url>"],
                correctAnswer: "<a>",
                explanation: "Ein Link wird in HTML mit dem <a>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_a.asp"]
            },
            {
                question: "Wie wird ein Button in HTML dargestellt?",
                answers: ["<button>", "<btn>", "<input>", "<click>"],
                correctAnswer: "<button>",
                explanation: "Ein Button wird in HTML mit dem <button>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_button.asp"]
            },
            {
                question: "Wie wird ein Input-Feld in HTML dargestellt?",
                answers: ["<input>", "<inputfield>", "<textfield>", "<inputtext>"],
                correctAnswer: "<input>",
                explanation: "Ein Input-Feld wird in HTML mit dem <input>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_input.asp"]
            },
            {
                question: "Wie wird in CSS ein Element ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: "element",
                explanation: "In CSS wird ein Element mit dem Elementnamen ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"]
            },
            {
                question: "Wie wird in CSS eine Klasse ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: ".class",
                explanation: "In CSS wird eine Klasse mit einem Punkt vor dem Klassennamen ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"]
            },
            {
                question: "Wie wird in CSS eine ID ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: "#id",
                explanation: "In CSS wird eine ID mit einem Rautezeichen vor der ID ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"]
            },
            {
                question: "Wie wird in CSS ein Attribut ausgewählt?",
                answers: ["[attribute]", "attribute", "attribute()", "attribute[]"],
                correctAnswer: "[attribute]",
                explanation: "In CSS wird ein Attribut mit eckigen Klammern ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"]
            },
            {
                question: "Wie wird in CSS ein Kind ausgewählt?",
                answers: ["element > element", "element element", "element + element", "element ~ element"],
                correctAnswer: "element > element",
                explanation: "In CSS wird ein Kind mit einem > ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"]
            },
            {
                question: "Wie wird in TypeScript eine Variable deklariert?",
                answers: ["let", "var", "const", "int"],
                correctAnswer: "let",
                explanation: "In TypeScript wird eine Variable mit let deklariert.",
                links: ["https://www.w3schools.com/js/js_let.asp"]
            },
            {
                question: "Wie wird in TypeScript eine Konstante deklariert?",
                answers: ["let", "var", "const", "int"],
                correctAnswer: "const",
                explanation: "In TypeScript wird eine Konstante mit const deklariert.",
                links: ["https://www.w3schools.com/js/js_const.asp"]
            },
            {
                question: "Wie wird in TypeScript eine Funktion deklariert?",
                answers: ["function", "func", "function()", "func()"],
                correctAnswer: "function",
                explanation: "In TypeScript wird eine Funktion mit function deklariert.",
                links: ["https://www.w3schools.com/js/js_functions.asp"]
            },
            {
                question: "Wie wird in TypeScript eine Klasse deklariert?",
                answers: ["class", "class()", "class{}", "class[]"],
                correctAnswer: "class",
                explanation: "In TypeScript wird eine Klasse mit class deklariert.",
                links: ["https://www.w3schools.com/js/js_classes.asp"]
            },
            {
                question: "Wie wird in TypeScript ein Interface deklariert?",
                answers: ["interface", "interface()", "interface{}", "interface[]"],
                correctAnswer: "interface",
                explanation: "In TypeScript wird ein Interface mit interface deklariert.",
                links: ["https://www.w3schools.com/js/js_classes.asp"]
            }
            // weitere Fragen ...
        ];
        function getQuestionsForCategory(category) {
            if (category === "HTML") {
                return questions.filter(question => question.question.includes("HTML"));
            }
            else if (category === "CSS") {
                return questions.filter(question => question.question.includes("CSS"));
            }
            else if (category === "TypeScript") {
                return questions.filter(question => question.question.includes("TypeScript"));
            }
            else {
                // "gemischt"
                return questions;
            }
        }
        //nun wird die Funktion aufgerufen, die die Fragen für die gewählte Kategorie zurückgibt
        let questionsForCategory = getQuestionsForCategory("category");
        //die Funktion shuffleArray wird aufgerufen, um die Fragen zu mischen
        questionsForCategory = shuffleArray(questionsForCategory);
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        //die Funktion pickRandomElement wird aufgerufen, um eine zufällige Frage auszuwählen
        let question = pickRandomElement(questionsForCategory);
        //die Funktion displayQuestion wird aufgerufen, um die Frage anzuzeigen
        displayQuestion(question);
        //die Funktion checkAnswer wird aufgerufen, um zu überprüfen, ob die Antwort richtig ist
        function pickRandomElement(array) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }
        function checkAnswer(question, answer) {
            return question.correctAnswer === answer;
        }
        let score = 0;
        function updateScore(correct) {
            if (correct) {
                score++;
            }
            document.getElementById("score").innerHTML = `Punktestand: ${score}`;
        }
        function displayQuestion(question) {
            document.getElementById("question").innerHTML = question.question;
            const answersContainer = document.getElementById("answers");
            answersContainer.innerHTML = "";
            for (const answer of question.answers) {
                const button = document.createElement("button");
                button.innerHTML = answer;
                button.addEventListener("click", () => {
                    const correct = checkAnswer(question, answer);
                    updateScore(correct);
                    displayExplanation(question, correct);
                });
                answersContainer.appendChild(button);
            }
        }
        function displayExplanation(question, correct) {
            const explanationContainer = document.getElementById("explanation");
            explanationContainer.innerHTML = "";
            const explanation = document.createElement("p");
            explanation.innerHTML = question.explanation;
            explanationContainer.appendChild(explanation);
            const linksContainer = document.createElement("div");
            for (const link of question.links) {
                const linkElement = document.createElement("a");
                linkElement.innerHTML = link;
            }
        }
    }
})(EndabgabeEiA1 || (EndabgabeEiA1 = {}));
//# sourceMappingURL=script.js.map