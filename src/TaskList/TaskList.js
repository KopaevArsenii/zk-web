import SingleTask from './SingleTask';

import './TaskList.css'

const TaskList = () => {
    return(
        <div className='TaskList__wrapper'>
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
        </div>
    )
}

export default TaskList;