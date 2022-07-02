import SingleTask from './SingleTask';

import './TaskList.css'

const TaskList = ({data, onDelete, onSelectedTask}) => {
    let elements = data.map(item => {
        return (<SingleTask name={item.name} state={item.state} key={item.id} onDelete={onDelete} id={item.id} onSelectedTask={onSelectedTask}/>)
    })
    return(
        <div className='TaskList__wrapper'>
            {elements}
        </div>
    )
}

export default TaskList;