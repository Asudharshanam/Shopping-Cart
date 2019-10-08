import React from 'react'
import Success from '../icons/successful.png'

export function SubmittedSuccess() {
    return (
        <div className="SubmittedSuccess" >
            <img className="SuccessIcon" alt="SuccessIcon" src={Success}></img>
            <h4>Submitted Successfully</h4>
        </div>
    )
}