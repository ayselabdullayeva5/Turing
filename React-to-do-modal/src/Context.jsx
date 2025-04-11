import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [tasks, setTasks] = useState([
        { text: "Do homeworks", checked: false },
        { text: "Hit the gym", checked: false },
        { text: "Pay bills", checked: false },
        { text: "Buy eggs", checked: false }
    ]);

    const [alert, setAlert] = useState("");
    const [newTask, setNewTask] = useState("");
    const [taskCount, setTaskCount] = useState(tasks.length);
    const [modalIndex, setModalIndex] = useState(null);

    useEffect(() => {
        setTaskCount(tasks.length);
    }, [tasks]);

    const toggleCheck = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        setTasks(updatedTasks);
    };

    function handleRemoveConfirmed() {
        if (modalIndex !== null) {
            deleteTask(modalIndex);
            setModalIndex(null);
        }
    }

    function handleCancelModal() {
        setModalIndex(null);
    }
    
    function showAlert(message) {
        setAlert(message);
        setTimeout(() => setAlert(""), 2000);
    }

    function addTask(event) {
        event.preventDefault();
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, checked: false }]);
            setNewTask("");
            showAlert("Yeni task əlavə edildi!");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        showAlert("Task silindi!");
    }

    return (
        <TodoContext.Provider value={{
            tasks,
            taskCount,
            alert,
            addTask,
            deleteTask,
            toggleCheck,
            newTask,
            setNewTask,
            modalIndex,
            setModalIndex,
            handleRemoveConfirmed,
            handleCancelModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
