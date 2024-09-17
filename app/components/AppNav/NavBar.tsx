import React from 'react'
import LoggedInNav from './LoggedInNav'
import NotLoggedInNav from './NotLoggedInNav'
const NavBar = () => {
    const loggedIn:boolean = false
  return (
    <div>
        {loggedIn === true? (
            <LoggedInNav />
        ):(
            < NotLoggedInNav/>
        )}
    </div>
  )
}

export default NavBar