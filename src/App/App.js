import NavMenu from "../NavMenu/NavMenu";
import InfoBlock from "../InfoBlock/InfoBlock";
import TaskCounter from "../TaskCounter/TaskCounter";
import FilterBlock from "../FilterBlock/FilterBlock";
import TaskList from "../TaskList/TaskList";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import LoginPage from "../LoginPage/LoginPage";

import { useState, useEffect } from "react";

import './App.css'

const App = () => {
    const [isLogined, setIsLogined] = useState(false);
    const [data, setData] = useState([{name: 'task1', state: 'state1', planting: '17.06.2022', culture: 'кукуруза', employees: ['Коля', 'Петя'], id: +new Date()}, 
                                    {name: 'task2', state: 'state2', planting: '17.06.2022', culture: 'горох', employees: ['Оля', 'Таня'], id: +new Date()-1}, 
                                    {name: 'task3', state: 'state3', planting: '17.06.2022', culture: 'помидор', employees: ['Артём', 'Олег'], id: +new Date()-2}]);
    const [isVisiable, setisVisiable] = useState(false);
    const [selectedObj, setSelectedObj] = useState([]);

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

    const addTask = (name, state, planting, culture, employees) => {
        setData([...data, {name: name, state: state, planting:planting, culture: culture, employees: employees, id: +new Date()}]);
        onClose();
    }

    const onSelectedTask = (id) => {
        let returnObj = data.filter(item => {
            return item.id === id
        })
        setSelectedObj(returnObj)
    }

    useEffect(() => {
        if (data.length === 0) setSelectedObj([])
    }, [data])

    if (!isLogined){
        return (
            <div className="body">
                <LoginPage setIsLogined={setIsLogined}/>
            </div>
        )
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
            <InfoBlock selectedObj={selectedObj}/>
        </div>
    )
}

export default App;