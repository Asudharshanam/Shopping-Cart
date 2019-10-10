import React from 'react'
import { withRouter } from 'react-router-dom'

export function WelcomePage({ history }) {

    function wantToBuy() {
        history.push('/shopping-items')
    }

    function wantToSell() {
        history.push('/seller-form')
    }

    return (
        <div className="WelcomePage">
            <h2>Welcome to Smart Bag!</h2>
            <button onClick={wantToSell}>Want to Sell</button>
            <button onClick={wantToBuy}>Want To Buy</button>
        </div>
    )
}

export default withRouter(WelcomePage)