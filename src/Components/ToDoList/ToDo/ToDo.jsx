import './ToDo.css';
import {useDispatch} from "react-redux";
import {ToggleActionCreator, RemoveTaskActionCreator} from "../../../redux/reducers/ToDoReducer";

const ToDo = ({task}) => {
    let dispatch = useDispatch();
    const ToggleToDoCompleteHandler = () => {
        dispatch(ToggleActionCreator(task.id));
    }

    const RemoveTaskHandler = () => {
        dispatch(RemoveTaskActionCreator(task.id));
    }


    return (
        <div className='ToDo'>
            <input type="checkbox" checked={task.complete} onClick={ToggleToDoCompleteHandler}/>
            <p>{task.text}</p>
            <h3>Add at: {task.date}</h3>
            <span onClick={() => RemoveTaskHandler()}>❌</span>
        </div>
    )
}

export default ToDo;