document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            text: "Що ти зробиш, коли в лісі почуєш шепіт, якого не видно?",
            options: [
                "Витягну меч і підготуюсь до бою",
                "Спробую встановити ментальний зв'язок",
                "Залишуся в тіні, щоб спостерігати",
                "Промовлю захисне закляття"
            ],
            scores: [1, 2, 3, 2]
        },
        {
            text: "Яка зброя найближча тобі по духу?",
            options: [
                "Двуручний меч",
                "Посох мудрості",
                "Кинджали з отрутою",
                "Стародавня книга заклять"
            ],
            scores: [1, 2, 3, 2]
        },
        {
            text: "Твоя ціль у подорожі через землі Тіней:",
            options: [
                "Захистити слабших",
                "Здобути заборонені знання",
                "Знайти істину в тінях",
                "Повернути утрачену силу"
            ],
            scores: [1, 2, 3, 2]
        }
    ];

    let current = 0;
    let roleScores = {
        warrior: 0,
        mage: 0,
        rogue: 0
    };

    const questionText = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");
    const result = document.getElementById("quiz-result");

    function assignScore(index) {
        const score = questions[current].scores[index];
        if (score === 1) roleScores.warrior++;
        else if (score === 2) roleScores.mage++;
        else if (score === 3) roleScores.rogue++;
    }

    function getRole() {
        const maxScore = Math.max(roleScores.warrior, roleScores.mage, roleScores.rogue);
        if (roleScores.warrior === maxScore) return "Воїн Світла";
        if (roleScores.mage === maxScore) return "Маг Тіней";
        return "Тіньовий Розвідник";
    }

    function showQuestion() {
        if (current < questions.length) {
            const q = questions[current];
            questionText.textContent = q.text;
            answersDiv.innerHTML = "";

            q.options.forEach((option, i) => {
                const btn = document.createElement("button");
                btn.textContent = option;
                btn.classList.add("answer-btn");
                btn.addEventListener("click", () => {
                    assignScore(i);
                    current++;
                    showQuestion();
                });
                answersDiv.appendChild(btn);
            });
        } else {
            questionText.textContent = "Твоя доля визначена...";
            answersDiv.innerHTML = "";
            result.textContent = `Ти — ${getRole()} з Королівства Тіней!`;
        }
    }

    showQuestion();
});
