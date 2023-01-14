namespace EndabgabeEiA1 {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        interface Question {
            question: string;
            answers: string[];
            correctAnswer: string;
            explanation: string;
            links: string[];
            category: string;
        }




        let questions: Question[] = [
            {
                question: "Wie wird ein Absatz in HTML dargestellt?",
                answers: ["<p>", "<h1>", "<div>", "<span>"],
                correctAnswer: "<p>",
                explanation: "Ein Absatz wird in HTML mit dem <p>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_p.asp"],
                category: "HTML"
            },

            {
                question: "Wie wird ein Bild in HTML dargestellt?",
                answers: ["<img>", "<image>", "<picture>", "<src>"],
                correctAnswer: "<img>",
                explanation: "Ein Bild wird in HTML mit dem <img>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_img.asp"],
                category: "HTML"
            },

            {
                question: "Wie wird ein Link in HTML dargestellt?",
                answers: ["<a>", "<link>", "<href>", "<url>"],
                correctAnswer: "<a>",
                explanation: "Ein Link wird in HTML mit dem <a>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_a.asp"],
                category: "HTML"
            },

            {
                question: "Wie wird ein Button in HTML dargestellt?",
                answers: ["<button>", "<btn>", "<input>", "<click>"],
                correctAnswer: "<button>",
                explanation: "Ein Button wird in HTML mit dem <button>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_button.asp"],
                category: "HTML"
            },

            {
                question: "Wie wird ein Input-Feld in HTML dargestellt?",
                answers: ["<input>", "<inputfield>", "<textfield>", "<inputtext>"],
                correctAnswer: "<input>",
                explanation: "Ein Input-Feld wird in HTML mit dem <input>-Tag dargestellt.",
                links: ["https://www.w3schools.com/tags/tag_input.asp"],
                category: "HTML"
            },

            {
                question: "Wie wird in CSS ein Element ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: "element",
                explanation: "In CSS wird ein Element mit dem Elementnamen ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"],
                category: "CSS"
            },

            {
                question: "Wie wird in CSS eine Klasse ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: ".class",
                explanation: "In CSS wird eine Klasse mit einem Punkt vor dem Klassennamen ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"],
                category: "CSS"
            },

            {
                question: "Wie wird in CSS eine ID ausgewählt?",
                answers: ["#id", ".class", "element", "tag"],
                correctAnswer: "#id",
                explanation: "In CSS wird eine ID mit einem Rautezeichen vor der ID ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"],
                category: "CSS"
            },

            {
                question: "Wie wird in CSS ein Attribut ausgewählt?",
                answers: ["[attribute]", "attribute", "attribute()", "attribute[]"],
                correctAnswer: "[attribute]",
                explanation: "In CSS wird ein Attribut mit eckigen Klammern ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"],
                category: "CSS"
            },

            {
                question: "Wie wird in CSS ein Kind ausgewählt?",
                answers: ["element > element", "element element", "element + element", "element ~ element"],
                correctAnswer: "element > element",
                explanation: "In CSS wird ein Kind mit einem > ausgewählt.",
                links: ["https://www.w3schools.com/cssref/css_selectors.asp"],
                category: "CSS"
            },

            {
                question: "Wie wird in TypeScript eine Variable deklariert?",
                answers: ["let", "var", "const", "int"],
                correctAnswer: "let",
                explanation: "In TypeScript wird eine Variable mit let deklariert.",
                links: ["https://www.w3schools.com/js/js_let.asp"],
                category: "TypeScript"
            },

            {
                question: "Wie wird in TypeScript eine Konstante deklariert?",
                answers: ["let", "var", "const", "int"],
                correctAnswer: "const",
                explanation: "In TypeScript wird eine Konstante mit const deklariert.",
                links: ["https://www.w3schools.com/js/js_const.asp"],
                category: "TypeScript"
            },

            {
                question: "Wie wird in TypeScript eine Funktion deklariert?",
                answers: ["function", "func", "function()", "func()"],
                correctAnswer: "function",
                explanation: "In TypeScript wird eine Funktion mit function deklariert.",
                links: ["https://www.w3schools.com/js/js_functions.asp"],
                category: "TypeScript"
            },

            {
                question: "Wie wird in TypeScript eine Klasse deklariert?",
                answers: ["class", "class()", "class{}", "class[]"],
                correctAnswer: "class",
                explanation: "In TypeScript wird eine Klasse mit class deklariert.",
                links: ["https://www.w3schools.com/js/js_classes.asp"],
                category: "TypeScript"
            },

            {
                question: "Wie wird in TypeScript ein Interface deklariert?",
                answers: ["interface", "interface()", "interface{}", "interface[]"],
                correctAnswer: "interface",
                explanation: "In TypeScript wird ein Interface mit interface deklariert.",
                links: ["https://www.w3schools.com/js/js_classes.asp"],
                category: "TypeScript"
            }

        ];

        function getQuestionsForCategory(category: string): Question[] {
            if (category === "HTML") {
                return questions.filter(question => question.question.includes("HTML"));
            } else if (category === "CSS") {
                return questions.filter(question => question.question.includes("CSS"));
            } else if (category === "TypeScript") {
                return questions.filter(question => question.question.includes("TypeScript"));
            } else {
                // "gemischt"
                return questions;
            }
        }

        //nun wird die Funktion aufgerufen, die die Fragen für die gewählte Kategorie zurückgibt
        let questionsForCategory: Question[] = getQuestionsForCategory("category");


        //die Funktion shuffleArray wird aufgerufen, um die Fragen zu mischen
        questionsForCategory = shuffleArray(questionsForCategory);
        function shuffleArray(array: any[]): any[] {
            for (let i: number = array.length - 1; i > 0; i--) {
                const j: number  = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        //die Funktion pickRandomElement wird aufgerufen, um eine zufällige Frage auszuwählen
        let question: Question = pickRandomElement(questionsForCategory);

        //die Funktion displayQuestion wird aufgerufen, um die Frage anzuzeigen
        displayQuestion(question);

        //die Funktion checkAnswer wird aufgerufen, um zu überprüfen, ob die Antwort richtig ist



        function pickRandomElement(array: any[]): any {
            let randomIndex: number = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }




        function checkAnswer(question: Question, answer: string): boolean {
            return question.correctAnswer === answer;
        }

        let score: number = 0;

        function updateScore(correct: boolean): void {
            if (correct) {
                score++;
            }
            document.getElementById("score").innerHTML = `Punktestand: ${score}`;
        }

        function displayQuestion(question: Question): void {
            document.getElementById("question").innerHTML = question.question;
            let answersContainer: HTMLElement = document.getElementById("answers");
            answersContainer.innerHTML = "";
            for (let answer of question.answers) {
                let button: HTMLButtonElement = document.createElement("button");
                button.innerHTML = answer;
                button.addEventListener("click", () => {
                    let  correct: boolean = checkAnswer(question, answer);
                    updateScore(correct);
                    displayExplanation(question, correct);
                });
                answersContainer.appendChild(button);


            }
        }

        function displayExplanation(question: Question, correct: boolean): void {
            let explanationContainer: HTMLElement = document.getElementById("explanation");
            explanationContainer.innerHTML = "";
            let explanation: HTMLParagraphElement = document.createElement("p");
            explanation.innerHTML = question.explanation;
            explanationContainer.appendChild(explanation);
            let linksContainer: HTMLDivElement = document.createElement("div");
            for (let link of question.links) {
                let linkElement: HTMLAnchorElement = document.createElement("a");
                linkElement.innerHTML = link;

            }


        }

        function displayNextQuestion(): void {
            let nextQuestion: Question = pickRandomElement(questionsForCategory);
            displayQuestion(nextQuestion);
        }

       
        












    }
}