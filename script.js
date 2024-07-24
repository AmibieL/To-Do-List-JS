let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = "";

    tarefas.map((tarefa)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir tarefa");
        linkElement.appendChild(linkText)

        let posicao = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

    });
};

function adicionarTarefas(){
    if(inputElement.value === ""){
        alert("Digite uma nova tarefa!");
        return false;
    }else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = "";

        renderTarefas();

    };
};

buttonElement.onclick = adicionarTarefas;

function deletarTarefas(posicao){
    tarefas.splice(posicao, 1);

    renderTarefas();
};