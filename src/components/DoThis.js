import { useState, useEffect } from "react";

const DoThis = () => {


    const [done, setDone] = useState("")

    const [todoInput, setTodoInput] = useState("")
    const [arrTodos, setArrTodos] = useState([])


    const handleChange = (e) => {
        console.log(e.target)

        if (e.target.classList.contains("background-red")) {
            e.target.classList.add("background-green")
            e.target.classList.remove("background-red")

            setDone("Congrats!!! Enjoy Bettlix now and have fun 😎")

        }
        else if (e.target.classList.contains("background-green")) {
            console.log("hallo red?")
            e.target.classList.remove("background-green")
            e.target.classList.add("background-red")

            setDone("Sorry, but this task is pending, no time for Bettlix yet 😢")
        }
    }

    // useEffect(() => {
    function handleAdd(e) {
        e.preventDefault();
        console.log("you clicked")
        arrTodos.push(todoInput)
        return arrTodos
    }
    //}, [arrTodos])

    console.log(arrTodos)

    //useEffect(handleAdd(), [arrTodos])




    return (
        <div>
            <form>
                <label htmlFor="newTodo">Add new Todo here:</label>
                <br />
                <input type="text" name="newTodo" onChange={(e) => setTodoInput(e.target.value)} placeholder="Enter new todo..." />
                <button onClick={handleAdd}>Add Todo</button>
            </form>
            <h1>My list of Todos</h1>
            <h6>Please click Todo when completed</h6>
            <ul>
                <li className="background-red" onClick={handleChange}> <span className="bold">do this </span> - {done}</li>

                <div>{arrTodos.map((singleTodo) =>
                    <li className="background-red" onClick={handleChange}>  <span className="bold">{singleTodo}</span> - {done}</li>
                )}</div>


            </ul>

        </div >
    );
}

export default DoThis;