//Procurar o botao
document.querySelector("#add-time")
// Quando cliclar no botao
.addEventListener('click', cloneField)


// Executar uma acao
function cloneField() {
    // Duplicar um botao. que botao?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolen: true or false

    // limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}