
const frmFornecedor = document.getElementById('cadastrar-fornecedor')
frmFornecedor.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frmFornecedor.inNome.value

    fetch('http://localhost:5000/fornecedor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Forn_nome: nome
        }), 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Fornecedor cadastrado com sucesso!");
            window.location.reload();  
        } else {
            alert("Erro ao cadastrar fornecedor.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro na requisição.");
    });
})