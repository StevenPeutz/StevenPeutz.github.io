window.onload = function() {

    var
        //meta data van tree.js krijgen
        tree = getMetaData(),
        // DOM elements krijgen
        buttons = document.querySelectorAll('.answers button'),
		answers = document.querySelector('.answers'),
        question = document.querySelector('.question'),
		result = document.querySelector('.result'),
        back = document.querySelector('.back'),
        restart = document.querySelector('.restart'),
        //var om antwoordpad bij te houden
        pathStr= "0",
        //var om aantal bij te houden
		questionNumber = 1,
        //totaal aantal vragen binnehalen uit tree.js
        questionLength = tree.questions.length;

    //execute rendering eerste vraag
	renderQuestion(tree.questions[questionNumber - 1]);

    //event listener voor vraag
	answers.addEventListener('click', answersClicked, false);

    //event listener voor Back button
    back.addEventListener('click', backClicked, false);

    //event listener voor Restart button
    restart.addEventListener('click', restartClicked, false);

    //function to check path (en afhankelijk van antwoord) render question or fire result
    function renderQuestion(elem) {
        //check if all questions are passed dan ofwel resultaat of -> render next question
        if (questionNumber > questionLength ) {
            //execute resultaat rendering
            showAnswer();
        } else {
            //Array ophalen voor mogelijke answers voor het pad van gebruiker (pathStr)
            var answerArr = elem.answers[pathStr];
            //check if Array of answers is empty, question should not be shown - add "0" to pathStr and render next question
            if (answerArr.length === 0) {
                pathStr += "0";
                questionNumber++;
                renderQuestion(tree.questions[questionNumber - 1]);

            //otherwise -> render current question
            }else {
                //set question text
                question.textContent = elem.questionText;
                //set every of 3 (omdat bij sommige 3 antwoorden, 3e non display zetten) answers buttons
                for (var j = 0; j <= 2; j++) {
                    if (answerArr[j]) {
                        //set Answer text
                        buttons[j].textContent = answerArr[j];
                        //set Answer visible
                        buttons[j].parentNode.classList.remove("hide");
                    } else {
                        //if number of possible answers < 3 -> hide spare buttons
                        buttons[j].parentNode.classList.add("hide");
                    }
                }
            }
        }
    }

	
    //nieuw stuk (interactie)
	
	//function executed when users clicks button
	function answersClicked(event) {
		var target = event.target;
		if (target.tagName == "BUTTON") {
            //get Nr of answer clicked from data-attribute, add it to Path and set Question number +1
			var answerNmbr = target.parentNode.getAttribute("data-answ-nr");
			pathStr += answerNmbr;
			questionNumber++;
		}
        //execute function to check path and (afhankelijk van pad) -> ofwel volgende question of resultaat 
		renderQuestion(tree.questions[questionNumber - 1]);
	}

    //function executed voor resultaat
    function showAnswer() {
        //set text result and make it visible
        result.textContent = tree.results[pathStr];
        result.classList.remove("hide");
        //hide question and answers block
		question.classList.add("hide");
		answers.classList.add("hide");

    }

    //gebruik previous button
    function backClicked() {
        //niets doen als op eerste vraag
        if (questionNumber === 1) return;
        //unhide question/answer block if user on 1st question
        if (questionNumber === questionLength + 1) {
            result.classList.add("hide");
            question.classList.remove("hide");
            answers.classList.remove("hide");
        }
        //find number of last question answered
        var reg = /[1-9]/gi,
            match = pathStr.match(reg),
            lastIndex = pathStr.lastIndexOf(match[match.length - 1]);
        /*cut last answer from answers path*/
        pathStr = pathStr.substring(0, lastIndex);
        questionNumber = lastIndex;
        /*execute previous question rendering*/
        renderQuestion(tree.questions[questionNumber - 1]);

    }

    //niet noodzakelijk -> reload page
    function restartClicked() {
        location.reload();
    }


};
