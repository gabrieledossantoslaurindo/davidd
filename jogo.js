const questionArea = document.getElementById('question-area');
const optionsArea = document.getElementById('options-area');
const feedbackArea = document.getElementById('feedback-area');
const resultArea = document.getElementById('result-area');
const scoreElement = document.getElementById('score');
const playAgainButton = document.getElementById('play-again');

let currentQuestion = 0;
let score = 0;
let questions = [];

// Definir as perguntas e respostas (facil)
const easyQuestions = [
    { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], answer: 1 },
    { question: "Qual o maior planeta do sistema solar?", options: ["Terra", "Marte", "Júpiter", "Saturno"], answer: 2 },
    { question: "Qual é o animal nacional do Brasil?", options: ["Onça-pintada", "Arara-azul", "Bicho-preguiça", "Jacaré"], answer: 0 },
    { question: "Em qual continente fica a China?", options: ["África", "Europa", "América do Sul", "Ásia"], answer: 3 },
    { question: "Quem escreveu a obra Dom Quixote?", options: ["William Shakespeare", "Miguel de Cervantes", "Charles Dickens", "Victor Hugo"], answer: 1 }
];

// Função para iniciar o quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    questions = easyQuestions; // Pegar apenas as 5 primeiras
    displayQuestion();
}

// Função para exibir a pergunta atual
function displayQuestion() {
    const question = questions[currentQuestion];
    questionArea.innerHTML = `<h2>${question.question}</h2>`;
    optionsArea.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.id = `option-${index + 1}`;
        optionButton.addEventListener('click', checkAnswer);
        optionsArea.appendChild(optionButton);
    });
}

// Função para verificar a resposta
function checkAnswer(event) {
    const selectedOption = event.target.id;
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === `option-${correctAnswer}`) {
        score++;
        feedbackArea.textContent = "Correto! Próxima pergunta!";
        feedbackArea.style.color = 'green';
    } else {
        feedbackArea.textContent = "Errado! Próxima pergunta!";
        feedbackArea.style.color = 'red';
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Função para finalizar o quiz
function endQuiz() {
    questionArea.innerHTML = '';
    optionsArea.innerHTML = '';
    feedbackArea.textContent = '';
    resultArea.style.display = 'block';
    scoreElement.textContent = `Sua pontuação: ${score} de ${questions.length}`;
    playAgainButton.addEventListener('click', () => {
        resultArea.style.display = 'none';
        startQuiz();
    });
}

// Iniciar o quiz
startQuiz();