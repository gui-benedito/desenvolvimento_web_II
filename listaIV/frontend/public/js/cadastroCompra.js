const frmCompra = document.getElementById('cadastrar-compra')
frmCompra.addEventListener('submit', (e) => {
    e.preventDefault()
    const quantidade = frmCompra.inQuantidade.value
    const produto = frmCompra.inProduto.value
    
    fetch('http://localhost:5000/compra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Compra_quantidade: quantidade,
            Prod_cod: produto
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Compra cadastrada com sucesso!");
            window.location.reload();  
        } else {
            alert("Erro ao cadastrar compra.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro na requisição.");
    });
})