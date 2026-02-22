const grammarQuestions = [
    { q: "She usually ___ (go) to bed at 10 PM.", options: ["go", "goes", "is going", "went"], correct: 1 },
    { q: "Look! The dog ___ (chase) the cat.", options: ["chases", "chasing", "is chasing", "chase"], correct: 2 },
    { q: "I ___ (not/like) coffee. I prefer tea.", options: ["am not liking", "not like", "don't like", "doesn't like"], correct: 2 },
    { q: "What ___ you ___ (do) right now?", options: ["are / doing", "do / do", "is / doing", "do / doing"], correct: 0 },
    { q: "The Earth ___ (go) around the Sun.", options: ["is going", "go", "goes", "going"], correct: 2 },
    { q: "My brother ___ (play) football every Sunday.", options: ["plays", "is playing", "play", "playing"], correct: 0 },
    { q: "Hurry up! The bus ___ (come).", options: ["comes", "is coming", "coming", "come"], correct: 1 },
    { q: "They never ___ (eat) meat because they are vegetarians.", options: ["eats", "are eating", "eat", "eating"], correct: 2 },
    { q: "Listen! Somebody ___ (sing) a beautiful song.", options: ["sing", "sings", "is singing", "are singing"], correct: 2 },
    { q: "Water ___ (boil) at 100 degrees Celsius.", options: ["is boiling", "boil", "boils", "boiled"], correct: 2 },
    { q: "___ you ___ (understand) this grammar rule?", options: ["Are / understanding", "Do / understand", "Does / understand", "Is / understanding"], correct: 1 },
    { q: "He ___ (read) a very interesting book these days.", options: ["reads", "is reading", "read", "are reading"], correct: 1 },
    { q: "We ___ (not/go) to the cinema very often.", options: ["don't go", "aren't going", "doesn't go", "not go"], correct: 0 },
    { q: "Where is mom? She ___ (cook) in the kitchen.", options: ["cooks", "cooking", "is cooking", "cook"], correct: 2 },
    { q: "I ___ (think) you are absolutely right.", options: ["am thinking", "thinks", "think", "thinking"], correct: 2 },
    { q: "Prices ___ (go) up very fast nowadays.", options: ["go", "goes", "are going", "is going"], correct: 2 },
    { q: "The train ___ (leave) at 6 PM sharp.", options: ["is leaving", "leaves", "leave", "leaving"], correct: 1 },
    { q: "Why ___ you ___ (cry)? What's wrong?", options: ["do / cry", "are / crying", "is / crying", "does / cry"], correct: 1 },
    { q: "My father ___ (work) as a doctor in a big hospital.", options: ["works", "is working", "work", "working"], correct: 0 },
    { q: "This cake ___ (smell) delicious!", options: ["is smelling", "smell", "smells", "smelled"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;
let errorsInCurrent = 0;

const GrammarQuizPage = {
    render: async () => {
        // Reset state
        currentQuestionIndex = 0;
        score = 0;
        errorsInCurrent = 0;

        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <div>
                    <h2 style="color: var(--primary);">Present Tenses Mastery 🏆</h2>
                    <p style="color: var(--text-secondary);">Choose the correct present tense form.</p>
                </div>
                <button id="btn-back-games" style="background: transparent; color: var(--text-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;">← Back to Games</button>
            </div>
            
            <div class="card fade-in" style="max-width: 700px; margin: 0 auto; text-align: center; padding: 40px 24px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">
                    <span id="quiz-progress">Question 1 of ${grammarQuestions.length}</span>
                    <span id="quiz-score" style="color: var(--warning);"><span class="star-icon">★</span> Score: 0</span>
                </div>
                
                <h3 id="quiz-question" style="font-size: 1.6rem; margin-bottom: 32px; color: var(--text-primary); line-height: 1.4;">
                    ${grammarQuestions[0].q}
                </h3>
                
                <div id="quiz-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <!-- Options injected here -->
                </div>
                
                <div id="quiz-feedback" style="margin-top: 24px; min-height: 24px; font-weight: 600; font-size: 1.1rem; opacity: 0; transition: opacity 0.3s;">
                    <!-- Feedback injected here -->
                </div>
            </div>
            
            <style>
                .quiz-option {
                    background: var(--bg-main);
                    border: 2px solid var(--border-color);
                    padding: 16px;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .quiz-option:hover {
                    background: var(--primary-light);
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }
                .quiz-option.correct {
                    background: #d1fae5;
                    border-color: var(--success);
                    color: #065f46;
                    animation: pop 0.3s ease;
                }
                .quiz-option.wrong {
                    background: #fee2e2;
                    border-color: var(--danger);
                    color: #991b1b;
                    animation: shake 0.4s ease;
                }
                .quiz-option:disabled {
                    cursor: not-allowed;
                    opacity: 0.6;
                    transform: none;
                }
                @keyframes pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                }
            </style>
        `;
        return container;
    },

    init: () => {
        const backBtn = document.getElementById('btn-back-games');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.appRouter.navigate('games');
            });
        }
        GrammarQuizPage.loadQuestion();
    },

    loadQuestion: () => {
        errorsInCurrent = 0;
        const qData = grammarQuestions[currentQuestionIndex];

        document.getElementById('quiz-question').innerText = qData.q;
        document.getElementById('quiz-progress').innerText = `Question ${currentQuestionIndex + 1} of ${grammarQuestions.length}`;
        document.getElementById('quiz-score').innerHTML = `<span class="star-icon">★</span> Score: ${score}`;

        const feedback = document.getElementById('quiz-feedback');
        feedback.style.opacity = '0';

        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';

        qData.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.innerText = opt;
            btn.onclick = () => GrammarQuizPage.handleAnswer(index, btn);
            optionsContainer.appendChild(btn);
        });
    },

    handleAnswer: (selectedIndex, btn) => {
        const qData = grammarQuestions[currentQuestionIndex];
        const isCorrect = (selectedIndex === qData.correct);
        const feedback = document.getElementById('quiz-feedback');
        const allButtons = document.querySelectorAll('.quiz-option');

        if (isCorrect) {
            btn.classList.add('correct');
            feedback.innerText = "🎉 Excellent! That's correct.";
            feedback.style.color = 'var(--success)';
            feedback.style.opacity = '1';

            // disable all buttons
            allButtons.forEach(b => b.disabled = true);

            // Increment score only if no errors were made on this question
            if (errorsInCurrent === 0) {
                score += 10;
            } else if (errorsInCurrent === 1) {
                score += 5; // Half points if one mistake
            }

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < grammarQuestions.length) {
                    GrammarQuizPage.loadQuestion();
                } else {
                    GrammarQuizPage.showResults();
                }
            }, 1500);
        } else {
            errorsInCurrent++;
            btn.classList.add('wrong');
            btn.disabled = true; // disable only the wrong one
            feedback.innerText = "Oops! Try again.";
            feedback.style.color = 'var(--danger)';
            feedback.style.opacity = '1';
        }
    },

    showResults: () => {
        const container = document.querySelector('.card');
        const maxScore = grammarQuestions.length * 10;
        const percentage = Math.round((score / maxScore) * 100);

        let message = "";
        if (percentage >= 90) message = "Outstanding! You are a grammar master! 🌟";
        else if (percentage >= 70) message = "Great job! Keep practicing! 👍";
        else message = "Good effort! Let's review the rules and try again. 📚";

        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 5rem; margin-bottom: 24px;">🎓</div>
                <h2 style="font-size: 2rem; color: var(--primary); margin-bottom: 16px;">Quiz Completed!</h2>
                <div style="font-size: 1.5rem; margin-bottom: 8px;">Final Score: <span style="color: var(--warning); font-weight: 700;">${score} / ${maxScore}</span></div>
                <div style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 32px;">(${percentage}% Accuracy)</div>
                <p style="font-size: 1.1rem; margin-bottom: 32px; font-weight: 500;">${message}</p>
                
                <button onclick="window.appRouter.navigate('games')" style="background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;">
                    Back to Games Menu
                </button>
            </div>
        `;
    }
};
