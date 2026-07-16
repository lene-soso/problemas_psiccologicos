const questions = [
{
text: "Você se preocupa demais com as coisas?",
category: "ansiedade"
},
{
text: "Você sente medo sem motivo claro?",
category: "ansiedade"
},
{
text: "Você se sente muito cansado(a)?",
category: "estresse"
},
{
text: "Você se sente sobrecarregado(a)?",
category: "estresse"
},
{
text: "Você anda sem vontade de fazer coisas?",
category: "humor"
},
{
text: "Você se sente triste frequentemente?",
category: "humor"
},
{
text: "Você sente que não é bom(a) o bastante?",
category: "autoestima"
},
{
text: "Você costuma se comparar com os outros?",
category: "autoestima"
},
{
text: "Você anda dormindo mal?",
category: "sono"
},
{
text: "Você acorda cansado(a)?",
category: "sono"
},
{
text: "Você perde o foco facilmente?",
category: "foco"
},
{
text: "Você tem dificuldade para se concentrar?",
category: "foco"
},
{
text: "Você pensa demais antes de dormir?",
category: "ansiedade"
},
{
text: "Você anda irritado(a)?",
category: "estresse"
},
{
text: "Você se sente sem energia?",
category: "humor"
}
];

let currentQuestion = 0;

const scores = {
ansiedade: 0,
estresse: 0,
humor: 0,
autoestima: 0,
sono: 0,
foco: 0
};

const startBtn =
document.getElementById("startBtn");

const questionText =
document.getElementById("questionText");

const categoria =
document.getElementById("categoria");

const progressBar =
document.getElementById("progressBar");

const resultadoTexto =
document.getElementById("resultadoTexto");

startBtn.addEventListener(
"click",
startQuiz
);

function showScreen(id) {
document
.querySelectorAll(".screen")
.forEach(screen => {
screen.classList.remove("active");
});

document
.getElementById(id)
.classList.add("active");
}

function startQuiz() {
currentQuestion = 0;

for (let key in scores) {
scores[key] = 0;
}

showScreen("quiz");
showQuestion();
}

function showQuestion() {

const q =
questions[currentQuestion];

categoria.innerHTML =
`Pergunta ${
currentQuestion + 1
} de ${questions.length}`;

questionText.innerHTML =
q.text;

const progress =
(
(currentQuestion)
/
questions.length
) * 100;

progressBar.style.width =
progress + "%";
}

function answer(value) {

const category =
questions[currentQuestion]
.category;

scores[category] += value;

currentQuestion++;

if (
currentQuestion <
questions.length
) {
showQuestion();
} else {
showResult();
}
}

function level(score) {

if (score <= 1)
return "Poucos sinais";

if (score <= 3)
return "Sinais moderados";

return "Sinais intensos";
}

function showResult() {

showScreen("resultado");

resultadoTexto.innerHTML = `
<p>
<b>Ansiedade:</b>
${level(scores.ansiedade)}
</p>

<p>
<b>Estresse:</b>
${level(scores.estresse)}
</p>

<p>
<b>Humor:</b>
${level(scores.humor)}
</p>

<p>
<b>Autoestima:</b>
${level(scores.autoestima)}
</p>

<p>
<b>Sono:</b>
${level(scores.sono)}
</p>

<p>
<b>Foco:</b>
${level(scores.foco)}
</p>

<hr style="margin:15px 0;">

<p style="font-size:13px;">
⚠️ Este resultado é apenas
indicativo e não substitui
uma avaliação profissional.
</p>
`;
}

function abrirConversa() {
showScreen("conversa");
}

function showDoctor(
nome,
numero
) {

showScreen("doctor");

document
.getElementById(
"doctorName"
).innerText = nome;

document
.getElementById(
"doctorNumber"
).innerText =
"Contato: " + numero;
}

function backConversation() {
showScreen("conversa");
}

function goResult() {
showScreen("resultado");
}

function restartQuiz() {
showScreen("inicio");
}
