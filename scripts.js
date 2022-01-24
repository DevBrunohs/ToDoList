let input = document.getElementById("input")

let button = document.getElementById("button-add")

let task = document.getElementById("nome-lista-1")

let completelist = document.getElementById("tarefas")

let ArrayTask = []
RefreshTask()



function showtask() {
    let Newli = ""
    ArrayTask.forEach((task, index) => {

        Newli = Newli + ` <li class="listinhas ${task.status == true ?'concluir' : ''}">
<button class="botao-concluido " onclick="TaskComplete(${index})">
    <i class="fas fa-check-circle"></i>
</button>

<P class="nome-lista TaskComplete ${task.status == true ?'concluir' : ''}"id="nome-lista-1">${task.task}</P>

<button class="botao-deletar" onclick="taskDelete(${index})">
    <i class="fas fa-trash-alt"></i>
</button>
</li>
`

    })


    
    completelist.innerHTML = Newli
  
    localStorage.setItem("listas",JSON.stringify (ArrayTask))
    
}

function taskDelete(index) {
    ArrayTask.splice(index, 1)

    showtask()
}

function addtask() {

    if(input.value){
        ArrayTask.push({
            task: input.value,
            status: false
        })
        
    } 
    else{
        alert("digite uma tarefa")
    }

    

    input.value = ""

    showtask()

}

function TaskComplete(index) {
    ArrayTask[index].status = !ArrayTask[index].status
    console.log(ArrayTask)

    showtask()

}


function RefreshTask(){
    let mytasks = localStorage.getItem("listas")

if(mytasks){

    ArrayTask = JSON.parse(mytasks)

    showtask()
}

}
    
function addEnter(keyboard){

if(keyboard.key === "Enter"){

    addtask()
}

}

button.addEventListener("click", addtask)

document.addEventListener("keypress", addEnter)