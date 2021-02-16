// Ta wersja działa

// Definiowanie zmiennych
	var myQuestions =
	[
		{
			question: "Which practice has a purpose that includes aligning the organization's practices and services with changing business needs?",
			answers:
			{
				a: 'Service level management',
				b: 'Service configuration management',
				c: 'Relationship management',
				d: 'Continual improvement'
			},
			correctAnswer: 'd'
		},
		{
			question: "Ile to jest 30:3?",
			answers:
			{
				a: '3',
				b: '5',
				c: '11',
				d: '10'
			},
			correctAnswer: 'd'
		},
		{
			question: "Ile to jest 12:4?",
			answers:
			{
				a: '7',
				b: '5',
				c: '3',
				d: '9'
			},
			correctAnswer: 'c'
		},
		{
			question: "Ile to jest 18/6?",
			answers:
			{
				a: '6',
				b: '7',
				c: '8',
				d: '4'
			},
			correctAnswer: 'a'
		}
	];







var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton)
{
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function()
{
	showResults(questions, quizContainer, resultsContainer);
}


// Funkcja wyświetlająca pytania

	function showQuestions(questions, quizContainer)
	{
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++)
	{
		// first reset the list of answers
		answers = [];
		// for each available answer to this question...
		for(letter in questions[i].answers)
		{
			// ...add an html radio button
			answers.push
			(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter] + '<BR>'
				+ '</label>'
			);
		}
		// add this question and its answers to the output
		output.push
		(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	}

// Funkcja wyświetaljąca wyniki

	function showResults(questions, quizContainer, resultsContainer)
	{
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	// for each question...
	for(var i=0; i<questions.length; i++)
	{
	// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer)
		{
			// add to the number of correct answers
			numCorrect++;
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else
		{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}


}


