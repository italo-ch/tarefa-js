/*
    - Selecionar inputs (name, comment), botão de submit e container de feedbacks (last-feedbacks)
    - Quando clicar no botão
        - Armazenar dados dos inputs em variáveis
        - Criar div
        - Adicionar classe .feedback-card na div criada
        - Inserir conteúdo das variáveis na div criada
        - Inserir div criada no container de feedbacks
        - Limpar inputs
*/

// contador
let num_feedbacks = 0;

// Selecionar elementos
const inputName = document.querySelector('.input-name-feedback');
const inputComment = document.querySelector('.input-comment-feedback');
const submitButton = document.querySelector('.submit-button-feedback');
const feedbackContainer = document.querySelector('.feedback-container');

// Função para criação de feedbacks
function handleCreateFeedback(event) {
    event.preventDefault();
    
    num_feedbacks++;

    if (num_feedbacks > 0) {
        feedbackContainer.classList.add('first-feedback');
    }


    const name = inputName.value;
    const comment = inputComment.value;

    const div = document.createElement('div');
    const span = document.createElement('span');
    const p = document.createElement('p');

    div.classList.add('feedback-card');
    span.classList.add('name');
    p.classList.add('comment');

    span.textContent = name;
    p.textContent = comment;

    div.appendChild(span);
    div.appendChild(p);
    feedbackContainer.appendChild(div);

    inputName.value = '';
    inputComment.value = '';
}

// Adicionar event listener no botão de submit
submitButton.addEventListener('click', handleCreateFeedback);
