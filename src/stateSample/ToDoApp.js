import React, { useState } from 'react'

function ToDoApp() {

    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');

    const [todoList, setTodoList] = useState([]);


    const addToDo = () => {

        let randomId = Math.floor(Math.random() * 10000)
        let newTodo = {
            id: randomId,
            title: todoTitle,
            description: todoDescription,
            isCompleted: false
        }

        setTodoList([...todoList, newTodo])

    }

    const completeToDo = (id) => {

        var toDo = todoList.find(q => q.id === id);
        toDo.isCompleted = !toDo.isCompleted;

        setTodoList([...todoList])

    }

    const deleteToDo = (id) => {

        var newTodoList = todoList.filter(q => q.id !== id);
        setTodoList([...newTodoList])
    }

    const completeAll = () => {

        // eslint-disable-next-line array-callback-return
        todoList.map((item) => {
            item.isCompleted = true;
        })

        setTodoList([...todoList])
    }

    const deleteAll = () => {
        setTodoList([])
    }

    return (
        <>
            <div>
                <label>Title:</label>
                <input type='text' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}></input>
            </div>

            <div>
                <label>Description:</label>
                <input type='text' value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => addToDo()}>Add Todo</button>
                <button onClick={() => completeAll()}>Complete All</button>
                <button onClick={() => deleteAll()}>Delete All</button>
            </div>

            <div>
                <h1>ToDo Count: {todoList.length}</h1>
                <h2>Active: {todoList.filter(q => q.isCompleted === false).length}</h2>
                <h2>Completed: {todoList.filter(q => q.isCompleted === true).length}</h2>
      
                <ul>
                    {
                        todoList.map((item, key) => {

                            var todoColor = item.isCompleted === true ? 'tomato' : ''


                            return (

                                <li style={{ backgroundColor: todoColor }}>
                                    {item.title} / {item.description}
                                    <button onClick={() => deleteToDo(item.id)}>Delete</button>
                                    <button onClick={() => completeToDo(item.id)}>Complete</button>
                                </li>

                            )
                        }
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ToDoApp