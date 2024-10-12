// Array com os valores das moedas
let moedasArray = [];

// Função para atualizar a lista exibida
function atualizarLista() {
    const listaMoedas = document.getElementById('moedas');
    listaMoedas.innerHTML = ''; // Limpa a lista existente

    // Adiciona cada moeda ao elemento da lista
    moedasArray.forEach((moeda) => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${moeda.quantidade} coins = R$ ${moeda.valor.toFixed(2)}`;
        listaMoedas.appendChild(novoItem);
    });
}

// Evento de clique para adicionar moeda
document.getElementById('adicionar').addEventListener('click', function() {
    const quantidadeMoeda = document.getElementById('quantidade-moeda').value;
    const precoMoeda = document.getElementById('preco-moeda').value;

    if (quantidadeMoeda && precoMoeda) {
        // Adiciona nova moeda ao array
        moedasArray.push({
            quantidade: Number(quantidadeMoeda),
            valor: Number(precoMoeda)
        });

        // Atualiza a lista exibida
        atualizarLista();

        // Limpa os campos após adicionar
        document.getElementById('quantidade-moeda').value = '';
        document.getElementById('preco-moeda').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Atualiza a lista ao carregar a página
atualizarLista();
