import NavMenu from "../NavMenu/NavMenu";
import InfoBlock from "../InfoBlock/InfoBlock";
import TaskCounter from "../TaskCounter/TaskCounter";
import FilterBlock from "../FilterBlock/FilterBlock";
import TaskList from "../TaskList/TaskList";

import './App.css'

const App = () => {
    return (
        <div className="body">
            <NavMenu />
            <div className="App-wrapper">
                <TaskCounter />
                <FilterBlock />
                <TaskList />
                <button className="testButton">Create task</button>
            </div>
            <InfoBlock />
        </div>
    )
}

export default App;