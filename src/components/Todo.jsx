import React, {useState} from 'react'

function Todo() {

    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [submit, setSubmit] = useState("");

    function addTask(){
        if (todo.trim === "") return;
        setTasks([...todo, setTodo]);
        setTodo("")
    }

    function deleteTask(index){
        const updatedTodo = tasks.filter((_, i) => i !== index)
        setTasks(updatedTodo)
    }

    function handleSubmit(e){
        e.preventdefault();
        setSubmit(true)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo' onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </form>
      <h3>Todo List</h3>
        <p>{todo}</p>
    </div>
  )
}

export default Todo
