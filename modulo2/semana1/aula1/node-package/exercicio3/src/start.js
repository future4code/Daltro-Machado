let taskList = ["Voltar as aulas", "Almoçar"]
const newTask = process.argv[2]
taskList = taskList.push(newTask)

console.log("Tarefa adicionada com sucesso!");

for (let index = 0; index < taskList.length; index++) {
    console.log(taskList[index]);
    
}

