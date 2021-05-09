import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm"

function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo){
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [...todos,todo];
        setTodos(newTodos)
    }

    function removeTodo(id){
        const removeArr = [...todos].filter(todo => todo.id!==id);
        setTodos(removeArr);
    }

    function updateTodo(todoId, newValue){
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>item.id===todoId?newValue:item))
    }

    function completeTodo(id){
        const updatedTodos=todos.map((todo)=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
