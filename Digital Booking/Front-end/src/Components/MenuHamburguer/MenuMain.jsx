import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuMain() {
  return (
    <div className="menuButtons">
        <Link to="/singUp"> Create Account</Link>
        <hr />
        <Link to="/login"> Log in </Link>
    </div>
  )
}
