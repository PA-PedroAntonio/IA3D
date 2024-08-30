const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você se interessa por Inteligência Artifical?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acha que o futuro vai ser repleto por IAs?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acha que as IAs irão tomar o lugar dos humanos?",
        alternativas: ["Sim", "Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
    }
}

mostraPergunta();
