const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
  if (correct)  {
      element.classList.add('correct')}
      else {
        element.classList.add('wrong')
      } 
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'The correct sequence of HTML tags for starting a webpage is -',
        answers: [
            { text: 'HTML, Head, Title, Body', correct: true},
            { text: 'Head, Title, HTML, body', correct: false},
            { text: 'HTML, Body, Title, Head', correct: false},
            { text: 'HTML, Head, Title, Script', correct: false}

        ]
    },
    {
        question: 'Which of the following element is responsible for making the text bold in HTML?',
        answers: [
            { text: '<pre>', correct: false},
            { text: '<a>', correct: false},
            { text: '<b>', correct: true},
            { text: '<br>', correct: false}

        ] 
     },
     {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answers: [
            { text: '<h3>', correct: false},
            { text: '<h1>', correct: true},
            { text: '<h5>', correct: false},
            { text: '<h6>', correct: false}

        ] 
     },
     {
        question: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
        answers: [
            { text: '<ul>', correct: true},
            { text: '<ol>', correct: false},
            { text: '<li>', correct: false},
            { text: '<i>', correct: false}

        ] 
     },
     {
        question: 'Which character is used to represent the closing of a tag in HTML?',
        answers: [
            { text: '\\', correct: false},
            { text: '!', correct: false},
            { text: '/', correct: true},
            { text: '.', correct: false}

        ] 
     },
     {
        question: 'How to create a hyperlink in HTML?',
        answers: [
            { text: '<a href = "https://docs.google.com/"> google </a>', correct: true},
            { text: '<a url = "https://docs.google.com/"google/a>', correct: false},
            { text: '<a link = "https://docs.google.com/"> google</a>', correct: false},
            { text: '<a>https://docs.google.com/ <google /a>', correct: false}

        ] 
     },
     {
        question: 'How to create an ordered list (a list with the list items in numbers) in HTML?',
        answers: [
            { text: '<ul>', correct: false},
            { text: '<ol>', correct: true},
            { text: '<li>', correct: false},
            { text: '<i>', correct: false}

        ] 
     },
     {
        question: 'Which of the following element is responsible for making the text italic in HTML?',
        answers: [
            { text: '<i>', correct: true},
            { text: '<italic>', correct: false},
            { text: '<it>', correct: false},
            { text: '<pre>', correct: false}

        ] 
     },
     {
        question: 'How to insert an image in HTML?',
        answers: [
            { text: '<img href = "jtp.png" />', correct: false},
            { text: '<img url = "jtp.png" />', correct: false},
            { text: '<img link = "jtp.png" />', correct: false},
            { text: '<img src = "jtp.png" />', correct: true}

        ] 
     },
     {
        question: '<input> is',
        answers: [
            { text: 'a format tag.', correct: false},
            { text: 'an empty tag.', correct: false},
            { text: 'All of the above', correct: false},
            { text: 'None of the above', correct: true}

        ] 
     },
     {
        question: 'Which of the following tag is used to make the underlined text?',
        answers: [
            { text: '<i>', correct: false},
            { text: '<ul>', correct: false},
            { text: '<u>', correct: true},
            { text: '<pre>', correct: false}

        ] 
     },
     {
        question: 'How to create a checkbox in HTML?',
        answers: [
            { text: '<input type = "checkbox">', correct: true},
            { text: '<input type = "button">', correct: false},
            { text: '<checkbox>', correct: false},
            { text: '<input type = "check">', correct: false}

        ] 
     },
     {
        question: 'Which of the following tag is used to define options in a drop-down selection list?',
        answers: [
            { text: '<select>', correct: true},
            { text: '<list>', correct: false},
            { text: '<dropdown>', correct: false},
            { text: '<option>', correct: false}

        ] 
     },
     {
        question: 'HTML tags are enclosed in-',
        answers: [
            { text: '# and #', correct: false},
            { text: '{ and }', correct: false},
            { text: '! and ?', correct: false},
            { text: '< and >', correct: true}

        ] 
     },
     {
        question: 'Which of the following is the correct way to change the font face in HTML?',
        answers: [
            { text: '<font name = "Calibri"> ……… </font>', correct: false},
            { text: '<font face = "Calibri"> ……… </font>', correct: true},
            { text: '<font = "Calibri"> ……… </font>', correct: false},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which of the following tag is used to add rows in the table?',
        answers: [
            { text: '<td> and </td>', correct: false},
            { text: 'Option 2', correct: false},
            { text: '<tr> and </tr>', correct: true},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?',
        answers: [
            { text: '<sup>', correct: true},
            { text: '<sub>', correct: false},
            { text: 'p>', correct: false},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which is the correct way to comment out something in HTML?',
        answers: [
            { text: 'Using ## and #', correct: false},
            { text: 'Using <!-- and -->', correct: true},
            { text: 'Using </-- and -/->', correct: false},
            { text: 'Using <!-- and -!>', correct: false}

        ] 
     },
     {
        question: 'Which of the following are the attributes of the tag?',
        answers: [
            { text: 'method', correct: false},
            { text: 'action', correct: false},
            { text: 'Both (a) & (b)', correct: true},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which of the following tag is used to create a combo box (or drop-down box)?',
        answers: [
            { text: '<list>', correct: false},
            { text: '<select>', correct: true},
            { text: '<input type = "dropdown">', correct: false},
            { text: '<ul>', correct: false}

        ] 
     },
     {
        question: 'In HTML5, which of the following tag is used to initialize the document type?',
        answers: [
            { text: '<Doctype HTML>', correct: false},
            { text: '<\Doctype html>', correct: false},
            { text: '<Doctype>', correct: false},
            { text: '<!DOCTYPE html>', correct: true}

        ] 
     },
     {
        question: 'A program in HTML can be rendered and read by -',
        answers: [
            { text: 'Web browser', correct: true},
            { text: 'Server', correct: false},
            { text: 'Interpreter', correct: false},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'An HTML program is saved by using the ____ extension.',
        answers: [
            { text: '.ht', correct: false},
            { text: '.html', correct: true},
            { text: '.hml', correct: false},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which of the following HTML attribute is used to define inline styles?',
        answers: [
            { text: 'style', correct: true},
            { text: 'type', correct: false},
            { text: 'class', correct: false},
            { text: 'None of the above', correct: false}

        ] 
     },
     {
        question: 'Which of the following is the container for <tr>, <th>, and <td> ?',
        answers: [
            { text: '<data>', correct: false},
            { text: '<table>', correct: true},
            { text: '<group>', correct: false},
            { text: 'All of the above', correct: false}

        ] 
     },
     {
        question: 'What is the first step in the Design Thinking Process?',
        answers: [
            { text: 'Ideate', correct: false},
            { text: 'Empathize', correct: true},
            { text: 'Define', correct: false},
            { text: 'Prototype', correct: false}

        ] 
     },
     {
        question: 'After you define the problem, the next step is to ____.',
        answers: [
            { text: 'Test', correct: false},
            { text: 'Ideate', correct: true},
            { text: 'Prototype', correct: false},
            { text: 'Empathize', correct: false}

        ] 
     },
     {
        question: 'You would interview people to gain an understanding of how they feel during the ____ stage of Design Thinking.',
        answers: [
            { text: 'Prototype', correct: false},
            { text: 'Define', correct: false},
            { text: 'Empathize', correct: true},
            { text: 'Ideate', correct: false}

        ] 
     },
     {
        question: 'During which stage would you: Write a problem statement focused on a specific need or goal.',
        answers: [
            { text: 'Prototype', correct: false},
            { text: 'Define', correct: true},
            { text: 'Ideate', correct: false},
            { text: 'Empathize', correct: false}

        ] 
     },
     {
        question: 'What are the steps of Design Thinking Process?',
        answers: [
            { text: 'Understand > Draw > Ideate > Create > Test', correct: false},
            { text: 'Empathise > Define > Ideate > Prototype > Test', correct: true},
            { text: 'Empathise > Design > Implement > Produce > Test', correct: false},
            { text: 'Understand > Define > Ideate > Produce > Try', correct: false}

        ] 
     }

       
    

]