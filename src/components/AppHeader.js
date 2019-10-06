import React from 'react'
import SmartBagLogo from '../icons/smart-bag-logo.png'


export function AppHeader() {
    return (
        <div className="AppHeader">
            <img alt="SmartBagLogo" className="SmartBagLogo" src={SmartBagLogo}></img>
            <div className="SearchBarContainer">
                <form>
                    <input type="text" placeholder="Search.." name="search" />
                </form>
            </div>
        </div>
    )
}

export default AppHeader