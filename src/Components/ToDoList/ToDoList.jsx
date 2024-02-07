import ToDo from "./ToDo/ToDo";
import './ToDoList.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    AddTaskActionCreator, RemoveAllTasksActionCreator,
    SortByDateActionCreator, ShowCompletedTasksActionCreator,
    ShowActiveTasksActionCreator, RemoveCompletedTasksActionCreator
} from "../../redux/reducers/ToDoReducer";


const ToDoList = () => {
    const tasks = useSelector((state) => state.todos);
    let dispatch = useDispatch();

    let [text, setText] = useState('');

    const OnChangeHandler = (e) => {
        setText(e.target.value);
    }

    const AddTaskHandler = () => {
        dispatch(AddTaskActionCreator(text));
        setText('')
    }

    const RemoveAllTasksHandler = () => {
        dispatch(RemoveAllTasksActionCreator());
    }

    const SortByDateHandler = () => {
        dispatch(SortByDateActionCreator())
    }

    const ShowCompletedHandler = () => {
        dispatch(ShowCompletedTasksActionCreator());
    }

    const ShowActiveHandler = () => {
        dispatch(ShowActiveTasksActionCreator());
    }

    const RemoveCompletedHandler = () => {
        dispatch(RemoveCompletedTasksActionCreator());
    }

    return (
        <div className='container'>
        <div className='ToDoList'>
            <div className='inp-todo'>
                <input type="text" onChange={(e) => OnChangeHandler(e)} value={text}/>
                <button onClick={() => AddTaskHandler()}>Add task</button>
            </div>
            {
                tasks.length ? tasks.map(task => <ToDo task={task} key={task.id}/>) : <h2>Add new task</h2>
            }
            <div className='btn-todo'>
                <button onClick={() => RemoveAllTasksHandler()}>Remove all</button>
                <button onClick={() => SortByDateHandler()}>Sort by date</button>
                <button onClick={() => RemoveCompletedHandler()}>Delete completed</button>
            </div>
                <div className='spn-todo'>
                    <span className='spn-todo-complete' onClick={() => ShowCompletedHandler()}>Completed</span>
                    <span className='spn-todo-active' onClick={() => ShowActiveHandler()}>Active</span>
                </div>
        </div>
        </div>
    )
}

export default ToDoList;