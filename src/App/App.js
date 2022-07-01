import NavMenu from "../NavMenu/NavMenu";
import InfoBlock from "../InfoBlock/InfoBlock";
import TaskCounter from "../TaskCounter/TaskCounter";
import FilterBlock from "../FilterBlock/FilterBlock";
import TaskList from "../TaskList/TaskList";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

import { useState } from "react";

import './App.css'

const App = () => {
    const [isVisiable, setisVisiable] = useState(false);

    const onClose = () => {
        setisVisiable(false)
    }
    const onOpen = () => {
        setisVisiable(true)
    }

    return (
        <div className="body">
            <NavMenu />
            <div className="App-wrapper">
                <TaskCounter />
                <FilterBlock />
                <TaskList />
                <button className="testButton" onClick={() => onOpen()}>Create task</button>
                <AddTaskModal isVisiable={isVisiable} onClose={onClose}/>
            </div>
            <InfoBlock />
        </div>
    )
}

export default App;