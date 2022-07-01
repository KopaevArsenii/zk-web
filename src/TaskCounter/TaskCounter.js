import './TaskCounter.css'

const TaskCounter = ({counter}) => {
    return(
        <div className='TaskCounter-title'>Total tasks: {counter}</div>
    )
}

export default TaskCounter;