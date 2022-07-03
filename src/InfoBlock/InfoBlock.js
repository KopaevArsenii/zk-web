import './InfoBlock.css'

const InfoBlock = ({selectedObj}) => {
    if (selectedObj.length === 0){
        return(
            <div className='InfoBlock-wrapper'>
                <div>Select task to render some info</div>
            </div>
        )
    }

    let imgUrl, employeesList = [];
    switch (selectedObj[0].culture){
        case 'кукуруза':
            imgUrl='https://pikuco.ru/upload/test_stable/e74/e74536fc425443482dfd3b4582f890d5.jpg';
            break;
        case 'горох':
            imgUrl='https://ae04.alicdn.com/kf/H7596f9def7e749ab8a3e91b7da98db42H/3.jpg';
            break;
        case 'помидор':
            imgUrl='https://clck.ru/rgLWs';
            break;
        default:
            imgUrl='http://risovach.ru/upload/2016/02/mem/stalin_106767021_orig_.jpg';
            break;
    }

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
            <img src={imgUrl} alt="culture img" className='timeImg'/>
        </div>
    )
}

export default InfoBlock;


