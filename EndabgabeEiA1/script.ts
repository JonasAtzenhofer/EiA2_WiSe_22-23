namespace EndabgabeEiA1 {

    window.addEventListener("load", handleLoad);

//ein Interface das die Struktur des Fragen Arrays festlegt
    interface Question {
        question: string;
        answers: string[];
        correctAnswer: string;
        explanation: string;
        links: string;
        category: string;
    }

//variablen die später benötigt werden
    let randomQuestion: number;
    let htmlCounter: number = 0;
    let alreadyAskedQuestions: number[] = [];
    let category: string;

   
    
    


//das Fragen Array mit allen Fragen und Antworten und Erklärungen und Links und Kategorien
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
            question: "Wie wird ein Textfeld in HTML dargestellt?",
            answers: ["textarea", "textfield", "input", "inputtext"],
            correctAnswer: "textarea",
            explanation: "Ein Textfeld wird in HTML mit dem textarea-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_textarea.asp",
            category: "HTML"
        },

        {
            question: "Wie wird ein Listenelement in HTML dargestellt?",
            answers: ["li", "list", "ul", "ol"],
            correctAnswer: "li",
            explanation: "Ein Listenelement wird in HTML mit dem li-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_li.asp",
            category: "HTML"
        },

        {
            question: "Wie wird eine ungeordnete Liste in HTML dargestellt?",
            answers: ["ul", "list", "li", "ol"],
            correctAnswer: "ul",
            explanation: "Eine ungeordnete Liste wird in HTML mit dem ul-Tag dargestellt.",
            links: "https://www.w3schools.com/tags/tag_ul.asp",
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
            question: "Wie wird in CSS ein Nachfolger ausgewählt?",
            answers: ["element größer gleich element", "element element", "element + element", "element ~ element"],
            correctAnswer: "element + element",
            explanation: "In CSS wird ein Nachfolger mit einem + ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie setzt man Keyframes in CSS?",
            answers: ["@keyframes", "@frames", "@keyframe", "@frame"],
            correctAnswer: "@keyframes",
            explanation: "In CSS werden Keyframes mit @keyframes gesetzt.",
            links: "https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in CSS ein Pseudoklasse ausgewählt?",
            answers: ["element:pseudoklasse", "element::pseudoklasse", "element:pseudoklasse()", "element::pseudoklasse()"],
            correctAnswer: "element::pseudoklasse",
            explanation: "In CSS wird eine Pseudoklasse mit :: ausgewählt.",
            links: "https://www.w3schools.com/cssref/css_selectors.asp",
            category: "CSS"
        },

        {
            question: "Wie wird in TypeScript eine Variable deklariert?",
            answers: ["let", "variable", "const", "int"],
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
        },

        {
            question: "Wie wird in TypeScript eine Schleife deklariert?",
            answers: ["für", "for", "forever", "loop"],
            correctAnswer: "for",
            explanation: "In TypeScript wird eine Schleife mit for deklariert.",
            links: "https://www.w3schools.com/js/js_loop_for.asp",
            category: "TypeScript"

        },

        {
            question: "Wie wird in TypeScript eine Bedingung deklariert?",
            answers: ["if", "##", "else", "Banane"],
            correctAnswer: "if",
            explanation: "In TypeScript wird eine Bedingung mit if deklariert.",
            links: "https://www.w3schools.com/js/js_if_else.asp",
            category: "TypeScript"
        },

        {
            question: "Wie wird in TypeScript ein Array deklariert?",
            answers: ["Apfel", "array()", "array{}", "array[]"],
            correctAnswer: "array[]",
            explanation: "In TypeScript wird ein Array mit array[] deklariert.",
            links: "https://www.w3schools.com/js/js_arrays.asp",
            category: "TypeScript"
        }



    ];

    

//Nun werden Event Listener auf die einzelnen Buttons gesetzt, die bei einem Klick die Funktion StartQuiz aufrufen
    function handleLoad(_event: Event): void {

        let htmlButton: HTMLButtonElement = document.getElementById("HTMLButton") as HTMLButtonElement;
        htmlButton.addEventListener("click", startQuiz);

        let cssButton: HTMLButtonElement = document.getElementById("CSSButton") as HTMLButtonElement;
        cssButton.addEventListener("click", startQuiz);

        let typeScriptButton: HTMLButtonElement = document.getElementById("TypeScriptButton") as HTMLButtonElement;
        typeScriptButton.addEventListener("click", startQuiz);

        let mixedButton: HTMLButtonElement = document.getElementById("MixedButton") as HTMLButtonElement;
        mixedButton.addEventListener("click", startQuiz);
    }

    //nun soll bei einem Klick auf die Buttons zufällig aus der jeweiligen Kategorie eine Frage und die dazu gehörigen Antwortmöglichkeiten angezeigt werden

    function startQuiz(_event: Event): void {
        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        if (target.innerHTML == "HTML" || category == "HTML") {
            //wenn HTML ausgewählt wurde, setzt man die Katgeorie auf HTML
            category = "HTML";
            randomQuestion = Math.floor(Math.random() * 8);
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist 
            while (alreadyAskedQuestions.includes(randomQuestion)) {
                randomQuestion = Math.floor(Math.random() * 8);
                
            }
        }
        if (target.innerHTML == "CSS" || category == "CSS") {
            //wenn CSS ausgewählt wurde setzt man die Kategorie auf CSS
            category = "CSS";
            randomQuestion = Math.floor(Math.random() * 8) + 8;
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomQuestion)) {
                randomQuestion = Math.floor(Math.random() * 8) + 8;
            }

        }
        if (target.innerHTML == "TypeScript" || category == "TypeScript") {
            //wenn TypeScript ausgewählt wurde setzt man die Kategorie auf TypeScript
            category = "TypeScript";
            randomQuestion = Math.floor(Math.random() * 8) + 16;
            //nun werden so lange ZUfallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomQuestion)) {
                randomQuestion = Math.floor(Math.random() * 8) + 16;
            }
        }
        if (target.innerHTML == "Mixed" || category == "Mixed") {
            //wenn Mixed ausgewählt wurde setzt man die Katgeorie auf Mixed
            category = "Mixed";
            randomQuestion = Math.floor(Math.random() * 24);
            //nun werden so lange Zufallszahlen generiert bis eine Zahl gefunden wird, die noch nicht in dem Array alreadyAskedQuestions ist
            while (alreadyAskedQuestions.includes(randomQuestion)) {
                randomQuestion = Math.floor(Math.random() * 24);
            }


        }
        //nun soll die zufällig generierte Zahl in dem Array alreadyAskedQuestions gespeichert werden
        alreadyAskedQuestions.push(randomQuestion);
        
        let randomQuestionString: string = questions[randomQuestion].question;
        let htmlQuestion: HTMLParagraphElement = document.getElementById("htmlQuestion") as HTMLParagraphElement;
        htmlQuestion.innerHTML = randomQuestionString;
        htmlQuestion.hidden = false;
        //nun wird ein number Array erstellt dass bis zu 3 Zahlen enthält, diese werden dann geshuffelt und so werden die Antworten zufällig generiert
        let randomAnswers: number[] = [0, 1, 2, 3];
        randomAnswers = shuffle(randomAnswers);

        function shuffle (_array: number[]): number[] {
            let currentIndex: number = _array.length;
            let temporaryValue: number;
            let randomIndex: number;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = _array[currentIndex];
                _array[currentIndex] = _array[randomIndex];
                _array[randomIndex] = temporaryValue;
            }
            return _array;
        }

        let htmlAnswer1: HTMLButtonElement = document.getElementById("answer1") as HTMLButtonElement;
        //nun wird das erste Element des Arrays randomAnswers genommen und als Index für das Array answers genommen
        htmlAnswer1.innerHTML = questions[randomQuestion].answers[randomAnswers[0]];
        htmlAnswer1.addEventListener("click", checkAnswer);
        htmlAnswer1.hidden = false;

        let htmlAnswer2: HTMLButtonElement = document.getElementById("answer2") as HTMLButtonElement;
        //nun wird das zweite Element des Arrays randomAnswers genommen und als Index für das Array answers genommen
        htmlAnswer2.innerHTML = questions[randomQuestion].answers[randomAnswers[1]];
        htmlAnswer2.addEventListener("click", checkAnswer);
        htmlAnswer2.hidden = false;

        let htmlAnswer3: HTMLButtonElement = document.getElementById("answer3") as HTMLButtonElement;
        //nun wird das dritte Element des Arrays randomAnswers genommen und als Index für das Array answers genommen
        htmlAnswer3.innerHTML = questions[randomQuestion].answers[randomAnswers[2]];
        htmlAnswer3.addEventListener("click", checkAnswer);
        htmlAnswer3.hidden = false;

        let htmlAnswer4: HTMLButtonElement = document.getElementById("answer4") as HTMLButtonElement;
        //nun wird das vierte Element des Arrays randomAnswers genommen und als Index für das Array answers genommen
        htmlAnswer4.innerHTML = questions[randomQuestion].answers[randomAnswers[3]];
        htmlAnswer4.addEventListener("click", checkAnswer);
        htmlAnswer4.hidden = false;

        let htmlExplanation: HTMLParagraphElement = document.getElementById("htmlExplanation") as HTMLParagraphElement;
        htmlExplanation.innerHTML = questions[randomQuestion].explanation;
        htmlExplanation.hidden = true;

        let htmlLink: HTMLAnchorElement = document.getElementById("htmlLink") as HTMLAnchorElement;
        htmlLink.href = questions[randomQuestion].links;
        htmlLink.innerHTML = questions[randomQuestion].links;
        htmlLink.hidden = true;

        let NextQuestion: HTMLButtonElement = document.getElementById("NextQuestion") as HTMLButtonElement;
        NextQuestion.addEventListener("click", startQuiz);

        
    }
//wenn die richtige Antwort gewählt wird soll der Counter um eins erhöht werden und die Erklärung plus Link angezeigt werden und ein Button zum nächsten Frage erscheinen
//wenn die falsche ANtwort geklickt wird dann soll ein ALert erscheinen dass die Antwort falsch ist und er es nochmal versuchen soll
//wenn alle 5 Fragen aus einer Kategorie richtig beantwortet wurden soll er eine Nachricht bekommen dass er alle Fragen richtig beantwortet,
//hat und er auf den Button klicken soll um zur nächsten Kategorie zu gelangen
    function checkAnswer(_event: Event): void {
        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        console.log(target.innerHTML);
        console.log(questions[randomQuestion].correctAnswer);
        console.log("arsch");

        if (target.innerHTML == questions[randomQuestion].correctAnswer) {
            htmlCounter++;
            document.getElementById("counter").innerHTML = htmlCounter.toString();
            let htmlExplanation: HTMLElement = document.getElementById("htmlExplanation");
            htmlExplanation.hidden = false;

            let htmlLink: HTMLElement = document.getElementById("htmlLink");
            htmlLink.hidden = false;
            let NextQuestion: HTMLElement = document.getElementById("NextQuestion");
            NextQuestion.hidden = false;
            document.getElementById("answer1").hidden = true;
            document.getElementById("answer2").hidden = true;
            document.getElementById("answer3").hidden = true;
            document.getElementById("answer4").hidden = true;
            document.getElementById("htmlQuestion").hidden = true;
            if (htmlCounter == 5 ) {
                htmlExplanation.innerHTML = "Herzlichen Glückwunsch! Du hast 5 Fragen richtig beantwortet! Wähle nun eine neue Kategorie aus!";
                htmlLink.hidden = true;
                NextQuestion.hidden = true;
                //wenn alle Fragen richtig beantwortet wurden soll der Counter wieder auf 0 gesetzt werden
                htmlCounter = 0;
                //nun sollen wieder alle Fragen bereitgestellt werden
                alreadyAskedQuestions = [];
              
            }
        } else {
        //bei falscher ANtwort soll ein Alert erscheinen
            alert("Diese Antwort ist leider falsch. Versuche es nochmal!");
        }  
    }
}


