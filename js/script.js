// Pega o formulário pelo ID criado no HTML
const form= document.getElementById('formContato');
// Cria o "ouvinte" de eventos para o envio (submit)
form.addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault();

    // Captura os valores dos campos criados
    const nome = document.getElementById('nome').value.trim(); // Removendo espaços acidentais com o .trim()
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    
    let erros = [];

    // Validação específica pra cada erro
    if (nome === ""){
        erros.push("O campo NOME está vazio");
    }
   
    if (email === ""){
        erros.push("O campo E-MAIL está vazio");
    } else if (!email.includes("@")){
        erros.push("O E-MAIL inserido não é válido (falta o @)")
    }
   
    if (mensagem === ""){
        erros.push("O campo MENSAGEM está vazio");
    }
   
    // Exibição do alerta
    if (erros.length > 0) {
        alert("Ops, encontramos problemas:\n\n" + erros.join('\n'));
    } else {
        alert("Sucesso, " + nome + "! Sua mensagem foi validada e enviada.")
        form.reset();
    }  
});

//Lógica do Tema 
const btnTema  = document.getElementById('btnTema');
btnTema.addEventListener('click', () => {
    // Alterna a presença da classe 'dark-mode' no elemento body
    document.body.classList.toggle('dark-mode');

    // Altera o texto interno do botão para refletir o estado do tema
    if (document.body.classList.contains('dark-mode')) {
        btnTema.innerText = 'Tema Claro';
    } else {
        btnTema.innerText = 'Tema Escuro'
    }
});

// Lógica do botão saiba mais //
// Seleciona o botão e o parágrafo oculto pelo ID
const btnSaibaMais = document.getElementById('btnSaibaMais');
const textoExtra = document.getElementById('textoExtra')

btnSaibaMais.addEventListener('click', () => {
    
    if (textoExtra.style.display === 'none' || textoExtra.style.display ===""){
        textoExtra.style.display = 'block' //Torna o parágrafo visivel
        btnSaibaMais.innerText = 'Mostrar Menos'; // Altera o rótulo do botão
    } else {
        textoExtra.style.display = 'none' // Esconde o parágrafo novamente
        btnSaibaMais.innerText = 'Saiba Mais' // Restaura o rótulo original
    }
});