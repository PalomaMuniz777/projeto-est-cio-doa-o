// Seleção dos elementos do DOM
const form = document.getElementById('arrecadacaoForm');
const lista = document.getElementById('arrecadacoesLista');

// Carregar arrecadações salvas no localStorage
document.addEventListener('DOMContentLoaded', carregarArrecadacoes);

// Função para salvar uma nova arrecadação
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const quantidade = document.getElementById('quantidade').value;

    if (nome && tipo && quantidade) {
        const novaArrecadacao = { nome, tipo, quantidade };

        // Salvar no localStorage
        salvarArrecadacao(novaArrecadacao);

        // Adicionar na lista exibida
        adicionarNaLista(novaArrecadacao);

        // Limpar o formulário
        form.reset();
    }
});

// Função para carregar arrecadações do localStorage
function carregarArrecadacoes() {
    const arrecadacoes = JSON.parse(localStorage.getItem('arrecadacoes')) || [];
    arrecadacoes.forEach(adicionarNaLista);
}

// Função para salvar arrecadação no localStorage
function salvarArrecadacao(arrecadacao) {
    const arrecadacoes = JSON.parse(localStorage.getItem('arrecadacoes')) || [];
    arrecadacoes.push(arrecadacao);
    localStorage.setItem('arrecadacoes', JSON.stringify(arrecadacoes));
}

// Função para adicionar arrecadação na lista exibida
function adicionarNaLista(arrecadacao) {
    const li = document.createElement('li');
    li.textContent = `${arrecadacao.nome} - ${arrecadacao.tipo} (${arrecadacao.quantidade})`;
    lista.appendChild(li);
}

