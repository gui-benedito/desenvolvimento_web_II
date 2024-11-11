// PRODUTO
const frm = document.getElementById('editar-produto');
frm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const preco = frm.inPreco.value;
    const fornecedor = frm.inFornecedor.value;
    const id = +frm.inId.value

    const confirma = confirm(`Confirmar edição do produto?\nNome: ${nome}`)

    if(!confirma) return

    if (!nome || !preco || !fornecedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const produtoData = {
        Prod_nome: nome, 
        Prod_preco: preco,
        Forn_id: +fornecedor
    };

    try {
        const response = await fetch(`http://localhost:5000/produto/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produtoData),
        });

        if (!response.ok) {
            alert("Erro ao atualizar o produto. Verifique os dados e tente novamente.");
            return;
        }

        const data = await response.json();

        if (data.success) {
            alert("Produto atualizado com sucesso!");
            window.location.href = '/produto'
        } else {
            alert("Erro ao atualizar o produto.");
        }
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro na requisição. Verifique sua conexão.");
    }
});