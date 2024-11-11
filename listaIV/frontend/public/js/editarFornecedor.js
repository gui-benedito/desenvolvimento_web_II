const frmFornecedor = document.getElementById('editar-fornecedor');
frmFornecedor.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = frmFornecedor.inId.value;
    const nome = frmFornecedor.inNome.value;
    console.log(nome);

    try {
        const response = await fetch(`http://localhost:5000/fornecedor/${+id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Forn_nome: nome }), 
        });

        if (!response.ok) {
            alert("Erro ao atualizar o fornecedor. Verifique os dados e tente novamente.");
            return;
        }

        const data = await response.json();

        if (data.success) {
            alert("Fornecedor atualizado com sucesso!");
            window.location.href = '/fornecedor';
        } else {
            alert("Erro ao atualizar o fornecedor.");
        }

    } catch (error) {
        console.error('Erro:', error);
        alert("Erro na requisição. Verifique sua conexão.");
    }
});
