import React from 'react'
import SmartBagLogo from '../icons/smart-bag-logo.png'
import SearchIcon from '../icons/search.png'


export function AppHeader() {
    return (
        <div className="AppHeader">
            <img className="SmartBagLogo" src={SmartBagLogo}></img>
            <div className="SearchBarContainer">
                <form>
                    <input type="text" placeholder="Search.." name="search" />
                    <img className="SearchIcon" src={SearchIcon}></img>
                </form>
            </div>
        </div>
    )
}

export default AppHeader