// Ta wersja działa

// Definiowanie zmiennych
	var myQuestions =
	[
		{
			question: "1. Which practice has a purpose that includes aligning the organization's practices and services with changing business needs?",
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
			question: "2. Competencies required by the 'service level management' practice are?",
			answers:	
			{
				a: 'Incident analysis and prioritization',
				b: 'Business analysis and commercial management',
				c: 'Balanced scorecard reviews and maturity assessment',
				d: 'Problem investigation and resolution'
			},
			correctAnswer: 'b'
		},
		{
			question: "3. Identify the missing word in the following sentence. The use of _______ should support, not replace what is observed, when using the 'start where you are' guiding principle.",
			answers:
			{
				a: 'process',
				b: 'provider',
				c: 'measurement',
				d: 'tool'
			},
			correctAnswer: 'c'
		},
		{
			question: "4. How should the workflow for a new service request be designed?",
			answers:
			{
				a: 'Workflows for simple service requests are not recommended',
				b: 'Leverage existing workflows whenever possible',
				c: 'A single workflow for all types of service request is recommended',
				d: 'Use different workflows for each type of service request'
			},
			correctAnswer: 'b'
		},
		{
			question: "5. What can help to reduce resistance to a planned improvement when applying the guiding principle 'Collaborate and promote visibility’?",
			answers:
			{
				a: 'Restricting information about the improvement to essential stakeholders only',
				b: 'Increasing collaboration and visibility for the improvement',
				c: 'Involving customers after all planning has been completed',
				d: 'Engaging every stakeholder group in the same way, with the same communication'
			},
			correctAnswer: 'b'
		},
		{
			question: "6. Which statement about the automation of service requests is CORRECT?",
			answers:
			{
				a: 'Service requests that cannot be automated should be handled as incidents',
				b: 'Service requests and their fulfilment should be automated as much as possible',
				c: 'Service requests that cannot be automated should be handled as problems',
				d: 'Service requests and their fulfilment should be carried out by service desk staff without automation'
			},
			correctAnswer: 'b'
		},
		{
			question: "7. When planning 'continual improvement', which approach for assessing the current state of a service is CORRECT?",
			answers:
			{
				a: 'An organization should always develop competencies in methodologies and techniques that will meet their needs',
				b: 'An organization should always use a strength, weakness, opportunity and threat (SWOT) analysis',
				c: 'An organization should always use a single technique to ensure metrics are consistent',
				d: 'An organization should always use an approach that combines Lean, Agile and DevOps methodologies'
			},
			correctAnswer: 'a'
		},
		{
			question: "8. Which guiding principle considers customer and user experience?",
			answers:
			{
				a: 'Focus on value',
				b: 'Start where you are',
				c: 'Keep it simple and practical',
				d: 'Collaborate and promote visibility'
			},
			correctAnswer: 'a'
		},
		{
			question: "9. What should be considered as part of the 'Partners and suppliers' dimension?",
			answers:
			{
				a: 'The required skills and competencies of teams and individual members of the organization',
				b: 'The information created, managed and used in the course of service provision and consumption',
				c: 'The activities, workflows, controls and procedures needed to achieve the agreed objectives',
				d: 'The level of integration and formality involved in the relationships between organizations'
			},
			correctAnswer: 'd'
		},
		{
			question: "10. Which is a recommendation of the guiding principle 'Think and work holistically’?",
			answers:
			{
				a: 'Conduct a review of existing service management practices and decide what to keep and what to discard',
				b: 'Review service management practices and remove any unnecessary complexity',
				c: 'Use the four dimensions of service management to ensure coordination of all aspects of an improvement initiative',
				d: 'Review how an improvement initiative can be organized into smaller, manageable sections that can be completed in a timely manner'
			},
			correctAnswer: 'c'
		},
{
			question: "11. What is defined as any component that needs to be managed in order to deliver an IT service?",
			answers:
			{
				a: 'A service request',
				b: 'An incident',
				c: 'An availability report',
				d: 'A configuration item (CI)'
			},
			correctAnswer: 'd'
		},
		{
			question: "12. How should the seven guiding principles be combined when an organization is making a decision?",
			answers:
			{
				a: 'Review each guiding principle to decide how relevant it is to the specific decision',
				b: 'By using the \'Focus on value\' principle and one or two others that are relevant to the specific decision',
				c: 'By using the one or two guiding principles that are most relevant to the specific decision',
				d: 'By using all the guiding principles equally when making any decision'
			},
			correctAnswer: 'a'
		},
		{
			question: "13. Which statement about the use of measurement in the 'Start where you are' guiding principle is CORRECT?",
			answers:
			{
				a: 'Measured data is always more accurate than direct observation',
				b: 'It should always be used instead of direct observation',
				c: 'It should always be used to support direct observation',
				d: 'The act of measuring always positively impacts results'
			},
			correctAnswer: 'c'
		},
		{
			question: "14. Which statement about the steps to fulfil a service request is CORRECT?",
			answers:
			{
				a: 'They should include incident handling',
				b: 'They should be brief and simple',
				c: 'They should be complex and detailed',
				d: 'They should be well-known and proven'
			},
			correctAnswer: 'd'
		},
		{
			question: "15. What describes how components and activities work together to facilitate value creation?",
			answers:
			{
				a: 'The ITIL service value system',
				b: 'The ITIL Service Lifecycle stages',
				c: 'The four dimensions of service management',
				d: 'The ITIL guiding principles'
			},
			correctAnswer: 'a'
		},
		{
			question: "16. Which value chain activity ensures a shared understanding of the current status and required direction for all products and services?",
			answers:
			{
				a: 'Improve',
				b: 'Plan',
				c: 'Deliver and support',
				d: 'Design and transition'
			},
			correctAnswer: 'b'
		},
		{
			question: "17. Where are the details of the required performance outcomes of a service defined",
			answers:
			{
				a: 'Service requests',
				b: 'Service offerings',
				c: 'Service level agreements',
				d: 'Service components'
			},
			correctAnswer: 'c'
		},
		{
			question: "18. Which practice is MOST likely to benefit from the use of chatbots?",
			answers:
			{
				a: 'Service level management',
				b: 'Service desk',
				c: 'Change enblement',
				d: 'Risk management'
			},
			correctAnswer: 'b'
		},
		{
			question: "19. Which is a purpose of the 'service desk' practice?",
			answers:
			{
				a: 'To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels',
				b: 'To support the agreed quality of a service by handling all pre-defined, user-initiated service requests',
				c: 'To minimize the negative impact of incidents by restoring normal service operation as quickly as possible',
				d: 'To be the entry point and single point of contact for the service provider with all of its users'
			},
			correctAnswer: 'd'
		},
		{
			question: "20. Which is included in the purpose of the 'deliver and support' value chain activity?",
			answers:
			{
				a: 'Providing services to agreed specifications',
				b: 'Understanding stakeholder needs',
				c: 'Understanding the organization\'s service vision',
				d: 'Meeting stakeholder expectations for time to market'
			},
			correctAnswer: 'a'
		},
{
			question: "21. Which statement about the \'Change enablement\' practice is CORRECT? ",
			answers:
			{
				a: 'There should be a separate change authority for standard changes which includes senior managers who understand the risks involved',
				b: 'Assessment and authorization of normal changes should be expedited to ensure they can be implemented quickly',
				c: 'Standard changes are those that need to be scheduled, assessed and authorized following defined process',
				d: 'Normal changes are triggered by the creation of a change request which can be created manually or automatically'
			},
			correctAnswer: 'd'
		},
		{
			question: "22. Service Desk usually deals with?",
			answers:	
			{
				a: 'Business requirements',
				b: 'Service requests and incidents',
				c: 'Opportunities and demands',
				d: 'Problems and Errors'
			},
			correctAnswer: 'b'
		},
		{
			question: "23. Why should some service requests be fulfilled with no additional approvals?",
			answers:
			{
				a: 'To ensure that information security requirements are met',
				b: 'To set user expectations for fulfilment times',
				c: 'To streamline the fulfilment workflow',
				d: 'To ensure that spending is properly accounted for'
			},
			correctAnswer: 'c'
		},
		{
			question: "24. A certain organization has implemented a service which merely reduces a risk of data leakage. Does this service provide a value to this organization?",
			answers:
			{
				a: 'No - this service does not increase performance',
				b: 'Yes - implemented services always provide value',
				c: 'Yes - the organization perceives risk reduction as a benefit',
				d: 'No - this service does not improve anything'
			},
			correctAnswer: 'c'
		},
		{
			question: "25. Which of the following is NOT an example of the ITILv4 guiding principle?",
			answers:
			{
				a: 'Focus on value',
				b: 'Make it cheaper and simpler',
				c: 'Optimise and automate',
				d: 'Collaborate and promote visibility'
			},
			correctAnswer: 'b'
		},
		{
			question: "26. Which statement about the service value chain is CORRECT? ",
			answers:
			{
				a: 'Each value chain activity identifies a requirement for resources from an external supplier',
				b: 'The service value chain uses value streams to describe a combination of consumers and providers',
				c: 'The service value chain converts value into demand',
				d: 'Each value chain activity uses different combinations of practices to convert inputs into outputs'
			},
			correctAnswer: 'd'
		},
		{
			question: "27. Which value chain activity ensures that products meet stakeholder expectations for quality, costs and time to market?",
			answers:
			{
				a: 'Design and transition',
				b: 'Obtain/build',
				c: 'Plan',
				d: 'Engage'
			},
			correctAnswer: 'a'
		},
		{
			question: "28. Which statement about managing incidents is CORRECT?",
			answers:
			{
				a: 'The \'incident management\' practice should use a single process regardless of the impact of the incident',
				b: 'Low impact incidents should be resolved efficiently, making logging unnecessary',
				c: 'Low impact incidents should be resolved efficiently so the resource required is reduced',
				d: 'Incidents with the lowest impact should be resolved first'
			},
			correctAnswer: 'c'
		},
		{
			question: "29. In service relationships, what is a benefit of identifying consumer roles?",
			answers:
			{
				a: 'It provides shared service expectations',
				b: 'It removes constraints from the customer',
				c: 'It enables a common definition of value',
				d: 'It enables effective stakeholder management'
			},
			correctAnswer: 'd'
		},
		{
			question: "30. Which describes normal changes?",
			answers:
			{
				a: 'Changes that must be implemented as soon as possible',
				b: 'Changes that need to be scheduled and assessed following a process',
				c: 'Changes that are low-risk and pre-authorized',
				d: 'Changes that are typically initiated as service requests'
			},
			correctAnswer: 'b'
		},
{
			question: "31. For which of the following situations usage of an emergency change is the most appropriate solution?",
			answers:
			{
				a: 'Keyboard replacement',
				b: 'Routine operating system upgrade',
				c: 'Critical security patch implementation',
				d: 'Data conversion'
			},
			correctAnswer: 'c'
		},
		{
			question: "32. Which will help solve incidents more quickly?",
			answers:	
			{
				a: 'Collaboration between teams',
				b: 'Escalating all incidents to support teams',
				c: 'Detailed procedural steps for incident investigation',
				d: 'Target resolution times'
			},
			correctAnswer: 'a'
		},
		{
			question: "33. Which is a result of applying the guiding principle \'Progress iteratively with feedback\’?",
			answers:
			{
				a: 'The ability to discover and respond to failure earlier',
				b: 'Understanding the current state and identifying what can be reused',
				c: 'Standardization of practices and services',
				d: 'Understanding the customer\'s perception of value'
			},
			correctAnswer: 'a'
		},
		{
			question: "34. Which is the BEST description of the value of a service to a customer?",
			answers:
			{
				a: 'The outcomes the customer receives by using the service',
				b: 'The amount of money the customer pays for using the service',
				c: 'The financial return the customer gets from using the service',
				d: 'The customer\'s perception of the benefits of using the service'
			},
			correctAnswer: 'd'
		},
		{
			question: "35. Which gives a user access to a system?",
			answers:
			{
				a: 'Service consumption',
				b: 'Service agreement',
				c: 'Service provision',
				d: 'Service requirement'
			},
			correctAnswer: 'c'
		},
		{
			question: "36. What is a set of specialized organizational capabilities for enabling value for customers in the form of services?",
			answers:
			{
				a: 'Service consumption',
				b: 'Service management',
				c: 'Service transition',
				d: 'Service offering'
			},
			correctAnswer: 'b'
		},
		{
			question: "37. Which practice involves the management of vulnerabilities that have been analysed but not resolved?",
			answers:
			{
				a: 'Problem management',
				b: 'Change enablement',
				c: 'Service level management',
				d: 'Service request management'
			},
			correctAnswer: 'a'
		},
		{
			question: "38. How are target resolution times used in the \'incident management\' practice?",
			answers:
			{
				a: 'They are established, reviewed, and reported to ensure that customers are happy with the service',
				b: 'They are initiated, approved, and managed to ensure that predictable responses are achieved',
				c: 'They are scheduled, assessed and authorized to reduce the risk of service failures',
				d: 'They are agreed, documented, and communicated to help set user expectations'
			},
			correctAnswer: 'd'
		},
		{
			question: "39. Service Desk agent passes complicated tickets to the second line. This is an example of:",
			answers:
			{
				a: 'Swarming',
				b: 'Prioritisation',
				c: 'Categorisation',
				d: 'Escallation'
			},
			correctAnswer: 'd'
		},
		{
			question: "40. A series of steps an organization undertakes to create and deliver products and services to consumers is known as:",
			answers:
			{
				a: 'Process',
				b: 'Failure stream',
				c: 'Value stream',
				d: 'Procedure'
			},
			correctAnswer: 'c'
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


