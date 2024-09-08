
const questionBank = {
    math: {
        easy: [
            { question: "What is 5 + 5?", answer: "10" },
            { question: "What is the square root of 49?", answer: "7" },
            { question: "What is the square of 4?", answer: "16" }
        ],
        medium: [
            { question: "What is the value of π (pi)?", answer: "3.14" },
            { question: "What is the area of a square with side length 5?", answer: "25" },
            { question: "What is the area of a cube with side length 2?", answer: "8" }
        ],
        hard: [
            { question: "What is the value of 2^10?", answer: "1024" },
            { question: "What is the circumference of a circle with diameter 10?", answer: "31.4" }
        ]
    },
    science: {
        easy: [
            { question: "What is the chemical symbol for water?", answer: "H2O" },
            { question: "What is the Earth's primary source of energy?", answer: "Sun" },
        ],
        medium: [
            { question: "What is the process by which plants make their own food called?", answer: "Photosynthesis" },
            { question: "What is the smallest unit of matter?", answer: "Atom" }
        ],
        hard: [
            { question: "What is the chemical symbol for gold?", answer: "Au" },
            { question: "What is the speed of light in a vacuum?", answer: "299,792,458 m/s" }
        ]
    }
};

let currentQuiz = [];


function generateQuiz() {
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const questions = questionBank[topic][difficulty];
    const quizContainer = document.getElementById("quizContainer");

    
    quizContainer.innerHTML = "";
    currentQuiz = [];

    
    questions.forEach((questionObj, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("mb-4");
        questionElement.innerHTML = `
            <div class="font-bold">${index + 1}. ${questionObj.question}</div>
            <input type="text" id="answer${index + 1}" class="border border-gray-300 p-2 rounded mt-2 w-full focus:outline-none">
        `;
        quizContainer.appendChild(questionElement);
        currentQuiz.push({ question: questionObj.question, answer: questionObj.answer });
    });

    
    document.getElementById("submitBtn").classList.remove("hidden");
}


function submitQuiz() {
    let score = 0;
    const feedbackContainer = document.getElementById("feedbackContainer");
    feedbackContainer.innerHTML = "";

    
    currentQuiz.forEach((questionObj, index) => {
        const userAnswer = document.getElementById(`answer${index + 1}`).value.trim().toLowerCase();
        const correctAnswer = questionObj.answer.toLowerCase();

        
        if (userAnswer === correctAnswer) {
            score++;
        } else {
            const feedbackElement = document.createElement("div");
            feedbackElement.classList.add("mb-2", "text-red-500");
            feedbackElement.textContent = `Question ${index + 1}: Incorrect. Correct answer: ${correctAnswer}`;
            feedbackContainer.appendChild(feedbackElement);
        }
    });

    
    const scoreElement = document.createElement("div");
    scoreElement.textContent = `Your Score: ${score}/${currentQuiz.length}`;
    feedbackContainer.appendChild(scoreElement);
    feedbackContainer.classList.remove("hidden");
}


document.getElementById("generateBtn").addEventListener("click", generateQuiz);
document.getElementById("submitBtn").addEventListener("click", submitQuiz);
