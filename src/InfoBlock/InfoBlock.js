import './InfoBlock.css'

const InfoBlock = ({data, infoId}) => {
    /* if (infoId === 0) return(
        <div className='InfoBlock-wrapper'>
            <div>No data!</div>
        </div>
    )

    const currentData = data.filter(item => {
        if (item.id === infoId) return item;
    })

    const {name, state, culture, employee} = currentData[0];
    console.log(currentData)

    let imgUrl;
    switch (culture){
        case 'culture 1':
            imgUrl='https://pikuco.ru/upload/test_stable/e74/e74536fc425443482dfd3b4582f890d5.jpg';
            break;
        case 'culture 2':
            imgUrl='https://ae04.alicdn.com/kf/H7596f9def7e749ab8a3e91b7da98db42H/3.jpg';
            break;
        case 'culture 3':
            imgUrl='https://clck.ru/rgLWs';
            break;
        default:
            imgUrl='http://risovach.ru/upload/2016/02/mem/stalin_106767021_orig_.jpg';
            break;
    }
    console.log(currentData);
    
    return(
        <div className='InfoBlock-wrapper'>
            <div>{name}</div>
            <div>{state}</div>
            <div>{culture}</div>
            <div>{employee}</div>
            <img src="" alt="" className='timeImg'/>
        </div>
    ) */
}

export default InfoBlock;

