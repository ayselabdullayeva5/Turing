import { useContext } from "react";
import Alert from "./Alert.jsx";
import TodoContext from "./Context.jsx";

function ToDoList() {
    const {
        tasks,
        taskCount,
        alert,
        addTask,
        deleteTask,
        toggleCheck,
        newTask,
        setNewTask
    } = useContext(TodoContext);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    return (
        <>
            {alert && <Alert message={alert} />}
            <img src="/img/letter.png" className="letter" />
            <img src="/img/book.png" className="book" />
            <img src="/img/pencil_icon.png" className="pencil" />
            <img src="/img/money_icon.png" className="money" />
            <img src="/img/love.png" className="love" />
            <img src="/img/note.png" className="note" />
            <div className="container">
                <p>Task: {taskCount}</p>
                <div className="heart">
                    <i className="fa-regular fa-heart"></i>
                    <h1>TO DO LIST</h1>
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div className="todo">
                    <form onSubmit={addTask}>
                        <input
                            type="text"
                            id="myinput"
                            placeholder="Add a new task..."
                            value={newTask}
                            onChange={handleInputChange}
                        />
                        <button id="mybutton" type="submit">Submit</button>
                    </form>
                </div>
                <ul id="mylist">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            onClick={() => toggleCheck(index)}
                            className={task.checked ? 'checked' : ''}
                        >
                            <form onSubmit={(e) => {
                                e.preventDefault();  //<-- sehife yeniden yuklenmesin
                                e.stopPropagation(); // <-- klik "li"yə getməsin
                                deleteTask(index);
                            }}>
                                <span>{task.text}</span>
                                <button className="close"> x</button>
                            </form>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
