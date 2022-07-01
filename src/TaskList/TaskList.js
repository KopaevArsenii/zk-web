import SingleTask from './SingleTask';

import './TaskList.css'

const TaskList = ({data, onDelete}) => {
    let elements = data.map(item => {
        return (<SingleTask name={item.name} state={item.state} key={item.id} onDelete={onDelete} id={item.id}/>)
    })
    return(
        <div className='TaskList__wrapper'>
            {elements}
        </div>
    )
}

export default TaskList;