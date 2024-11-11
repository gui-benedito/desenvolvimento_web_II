// PRODUTO
//CADASTRAR
const frm = document.getElementById('cadastrar-produto')
frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const preco = frm.inPreco.value;
    const fornecedor = frm.inFornecedor.value;

    if (!nome || !preco || !fornecedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const produtoData = {
        Prod_nome: nome, 
        Prod_preco: preco,
        Forn_id: +fornecedor
    };

    fetch('http://localhost:5000/produto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoData), 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Produto cadastrado com sucesso!");
            window.location.reload();  
        } else {
            alert("Erro ao cadastrar produto.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro na requisição.");
    });
});