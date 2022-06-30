import './FilterBlock.css'

const FilterBlock = () => {
    return(
        <div className='FilterBlock__wrapper'>
            <input type="text" className='FilterBlock__input' placeholder='Search task'/>
            <button>first filter</button>
            <button>second filter</button>
        </div>
    )
}

export default FilterBlock;