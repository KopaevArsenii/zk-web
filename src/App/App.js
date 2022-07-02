import NavMenu from "../NavMenu/NavMenu";
import InfoBlock from "../InfoBlock/InfoBlock";
import TaskCounter from "../TaskCounter/TaskCounter";
import FilterBlock from "../FilterBlock/FilterBlock";
import TaskList from "../TaskList/TaskList";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

import { useState } from "react";

import './App.css'

const App = () => {
    const [data, setData] = useState([{name: 'task1', state: 'state1', culture: 'culture 1', employee: 'employee1', id: +new Date()}, 
                                    {name: 'task2', state: 'state2', culture: 'culture 2', employee: 'employee2', id: +new Date()-1}, 
                                    {name: 'task3', state: 'state3', culture: 'culture 3', employee: 'employee3', id: +new Date()-2}]);
    const [isVisiable, setisVisiable] = useState(false);
    const [infoId, setInfoId] = useState(0);

    const onClose = () => {
        setisVisiable(false)
    }

    const onOpen = () => {
        setisVisiable(true)
    }

    const onDelete = (id) => {
        let returnArr = data.filter(item => {
            return item.id !== id
        })
        
        setData(returnArr)
    }

    const addTask = (name, state, culture, employee) => {
        setData([...data, {name: name, state: state, culture: culture, employee: employee, id: +new Date()}]);
        onClose();
    }

    const onSelectedTask = (id) => {
        setInfoId(id)
    }

    return (
        <div className="body">
            <NavMenu />
            <div className="App-wrapper">
                <TaskCounter counter={data.length}/>
                <FilterBlock />
                {data.length !== 0 ? null : <div className="error-message">NO DATA!</div>}
                <TaskList data={data} onDelete={onDelete} onSelectedTask={onSelectedTask}/>
                <button className="testButton" onClick={() => onOpen()}>Create task</button>
                <AddTaskModal isVisiable={isVisiable} onClose={onClose} addTask={addTask}/>
            </div>
            <InfoBlock data={data} infoId={infoId}/>
        </div>
    )
}

export default App;