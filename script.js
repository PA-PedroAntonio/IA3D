const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você se interessa por Inteligência Artifical?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Se Interessa por Inteligência Artifical"
            },
            {
                texto: "Não",
                afirmativa: "Não se Interessa por Inteligência Artifical"
            }
        ]
    },
    {
        enunciado: "Você acha que o futuro vai ser repleto por IAs?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "O Futuro vai ser Repleto por IAs"
            },
            {
                texto: "Não",
                afirmativa: "O Futuro não vai ser Repleto por IAs"
            }
        ]
    },
    {
        enunciado: "Você acha que as IAs irão tomar o lugar dos humanos?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "As IAs irão Tomar o Lugar dos Humanos"
            },
            {
                texto: "Não",
                afirmativa: "As IAs não irão Tomar o Lugar dos Humanos"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();

}

function mostraResultado() {
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}


mostraPergunta();