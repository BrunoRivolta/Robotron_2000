const controle = document.querySelectorAll("[data-controle]"); //criamos o data controle dessa forma o texto pode mudar que vai continuar funcionando isso chama criar um dataSet
const estatisticas = document.querySelectorAll("[data-estatistica]");
const botaoRobotron = document.querySelector("[data-botaoRobotron]");
const botaoFundo = document.querySelector("[data-botaoFundo]");
const botaoZerar = document.querySelector("[data-botaoZera]");
const botaoProducao = document.querySelector("[data-botaoProducao]");
const robotronCores = robotron.attributes.src;
const fundo = document.querySelector("body");

const fundoPagina = {
    "fundo": 'url("./img/cenarios/fundo.jpg")',
    "fundo1": 'url("./img/cenarios/fundo1.jpg")',
    "fundo2": 'url("./img/cenarios/fundo2.jpg")',
    "fundo3": 'url("./img/cenarios/fundo3.jpg")',
    "fundo4": 'url("./img/cenarios/fundo4.jpg")',
    "fundo5": 'url("./img/cenarios/fundo5.jpg")',
    "fundo6": 'url("./img/cenarios/fundo6.jpg")',
    "fundo7": 'url("./img/cenarios/fundo7.jpg")',
    "fundo8": 'url("./img/cenarios/fundo8.jpg")',
}
const coresRobo = {
    "amarelo": "img/robotron/amarelo/robotron.png",
    "azul": "img/robotron/azul/robotron.png",
    "branco": "img/robotron/branco/robotron.png",
    "preto": "img/robotron/preto/robotron.png",
    "rosa": "img/robotron/rosa/robotron.png",
    "vermelho": "img/robotron/vermelho/robotron.png"
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -20,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -18
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -18
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -24,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


botaoZerar.addEventListener("click", () => location.reload());

botaoFundo.addEventListener("click", () => {mudaFundo(fundo.style.background)});

function mudaFundo(fundoAtual) {
    trocaDeFundo = fundoAtual === fundoPagina["fundo"] ? fundoAtual = fundoPagina["fundo1"] : 
                fundoAtual === fundoPagina["fundo1"] ? fundoAtual = fundoPagina["fundo2"] : 
                fundoAtual === fundoPagina["fundo2"] ? fundoAtual = fundoPagina["fundo3"] :
                fundoAtual === fundoPagina["fundo3"] ? fundoAtual = fundoPagina["fundo4"] :
                fundoAtual === fundoPagina["fundo4"] ? fundoAtual = fundoPagina["fundo5"] :
                fundoAtual === fundoPagina["fundo5"] ? fundoAtual = fundoPagina["fundo6"] :
                fundoAtual === fundoPagina["fundo6"] ? fundoAtual = fundoPagina["fundo"] :
                console.log('aconteceu um erro com a imagem de fundo')
    fundo.style.background = trocaDeFundo;
}

botaoRobotron.addEventListener("click", () => {mudaCorRobotron(robotronCores.value)});

function mudaCorRobotron(corAtual) {
    trocaDeCor = corAtual === coresRobo["amarelo"] ? robotronCores.value = coresRobo["azul"] : 
    corAtual === coresRobo["azul"] ? robotronCores.value = coresRobo["branco"] : 
    corAtual === coresRobo["branco"] ? robotronCores.value = coresRobo["preto"] :
    corAtual === coresRobo["preto"] ? robotronCores.value = coresRobo["rosa"] :
    corAtual === coresRobo["rosa"] ? robotronCores.value = coresRobo["vermelho"] :
    corAtual === coresRobo["vermelho"] ? robotronCores.value = coresRobo["amarelo"] : 
    console.log('aconteceu um erro com a cor informada')
}

controle.forEach(elemento => {
    elemento.addEventListener("click", (evento) => { 
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //trazendo a operação + ou -     e tambem a     class="controle" refetente ao +- clicado
        atualizaEstatisticas(evento.target.dataset.peca); //trazendo a propriedade do data-peca de cada botao + e - (blindagem, braços, nucleos ...)      
    });
});



function manipulaDados(operacao, item) {
    const peca = item.querySelector("[data-contador]"); //dentro da classe pai controle ele seleciona o controle-contador especifico de cada pai (agora criamos o dataSet data-contador se valor apenas para )
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach(elemento => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] // lista o texto (valor) de cada propriedade acima estaticas na pagina  e soma com o valor que esta no objeto pecas = pecas[blindagem][forca] por exemplo
    })
}

botaoProducao.addEventListener("click", verificaEstatisticas)

function verificaEstatisticas() {
    const estatisticasArray = [];
    estatisticas.forEach( (estatistica) => estatisticasArray.push(estatistica.textContent))
    estatisticasArray.forEach( (numero) => {
        roboFraco = numero <= 0 ? true : console.log("Robotron ok");
        } 
    )
    if (roboFraco === true) {
        alert("Robotron tem pontos = Zero ou negativo, não pode combater!");
    } else {
        window.open("./img/parabens.png", "_blank");
    }
}
