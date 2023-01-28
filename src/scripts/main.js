document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('form-sorteador').addEventListener('submit', function (event) {

        event.preventDefault();

        sortearNumero();
        mostrarResultado();
    });
});

function sortearNumero() {
    
    let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);
    
    document.getElementById('resultado-valor').innerText = numeroAleatorio;
}

function mostrarResultado() {
    document.querySelector('.resultado').style.display = 'block';
}