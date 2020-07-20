import React from 'react'



const errorMessage = ()=>{

    return(
        <div className="ui form">
                <div className="ui message">
                    <div className="header">We had some issues</div>
                    <ul className="list">
                        <li>Enter valid search term</li>
                        <li>Try again after some time</li>
                    </ul>
                </div>
            </div>
    )
}


export default errorMessage;