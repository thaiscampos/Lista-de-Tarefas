import { ArrowDown, ArrowUpIcon, Trash2 } from "lucide-react";
import React, { useState } from "react";


export default function ToDoList(){
    

    const [task, setTask] = useState(["Estudar", "Arrumar Quarto"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

        setNewTask(event.target.value);
        console.log(newTask)
        

    }

    function addTask(){
        
        if(newTask.trim() !==""){
                setTask(t=>[...t,newTask]);
        setNewTask("")
        }
        

    }

    function deleteTask(index){

            const updatedTasks = task.filter((_, i) => i !== index);
            setTask(updatedTasks); 

    }

    function moveTaskUp(index){

        if(index>0){
            const updatedTask =[...task];
            [updatedTask[index],updatedTask[index -1]] = 
            [updatedTask[index-1],updatedTask[index]]

            setTask(updatedTask)
        }

    }

    function moveTaskDown(index){
             if(index<task.length - 1){
            const updatedTask =[...task];
            [updatedTask[index],updatedTask[index + 1]] = 
            [updatedTask[index + 1],updatedTask[index]]

            setTask(updatedTask)
    }
}
    return (
        <>
            <div className="to-do-list">
                
                <h1>Lista de Tarefas</h1>
                <div className="container">
                <input
                   type="text"
                   placeholder="Digite uma tarefa"
                   value={newTask}
                   onChange={handleInputChange} 
                />
                <button 
                    className="botao-add"
                    onClick={addTask}
                >Adicionar</button>
                </div>
                <ol>
                    {task.map((task, index)=> 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button"
                            onClick={()=>deleteTask(index)}>
                               <Trash2/>
                            </button>
                            <button className="move-button"
                            onClick={()=>moveTaskUp(index)}>
                                <ArrowUpIcon/>
                            </button>
                            <button className="move-button"
                            onClick={()=>moveTaskDown(index)}>
                                <ArrowDown/>
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        
        
        </>
    )
}