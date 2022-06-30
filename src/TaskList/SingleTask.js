const SingleTask = () => {
    return(
        <div className="SingleTask__wrapper">
            <div className="SingleTask__title">Task name</div>
            <div className="SingleTask__state">Task state</div>
            <div className="SingleTask__buttons">
                <div className="SingleTask__settings">s</div>
                <div className="SingleTask__delete">d</div>
            </div>
        </div>
    )
}

export default SingleTask;