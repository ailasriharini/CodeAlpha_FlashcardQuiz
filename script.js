const cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript makes websites interactive."
    },
    {
        question: "What is Python?",
        answer: "Python is a programming language."
    }
];

let index = 0;

function displayCard() {
    document.getElementById("question").innerText =
        cards[index].question;

    document.getElementById("answer").innerText =
        cards[index].answer;

    document.getElementById("answer").style.display = "none";

    document.getElementById("count").innerText =
        `Card ${index + 1} of ${cards.length}`;
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function nextCard() {
    index = (index + 1) % cards.length;
    displayCard();
}

function previousCard() {
    index = (index - 1 + cards.length) % cards.length;
    displayCard();
}

displayCard();