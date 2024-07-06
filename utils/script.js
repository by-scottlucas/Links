/*
Este arquivo contém funções específicas para a funcionalidade do site.
Cada função foi projetada para executar uma tarefa determinada,
visando melhorar a experiência do usuário e a interatividade do site.
*/


/*
Este trecho de código atualiza dinamicamente o rodapé da página para exibir o ano atual
*/
const anoAtual = document.getElementById('ano-atual');

const date = new Date();

anoAtual.innerHTML = date.getFullYear();