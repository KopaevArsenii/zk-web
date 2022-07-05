import './InfoBlock.css'

const InfoBlock = ({selectedObj}) => {
    if (selectedObj.length === 0){
        return(
            <div className='InfoBlock-wrapper'>
                <div>Select task to render some info</div>
            </div>
        )
    }

    let employeesList = [];


    employeesList = selectedObj[0].employees.map(item => {
        return(
            <>
                <span>{item}</span>
                <span> </span>
            </>
        )
            
    })

    return(
        <div className='InfoBlock-wrapper'>
            <div>{selectedObj[0].name}</div>
            <div>{selectedObj[0].state}</div>
            <div>{selectedObj[0].culture}</div>
            <div>{selectedObj[0].planting}</div>
            <div>{employeesList}</div>
        </div>
    )
}

export default InfoBlock;


