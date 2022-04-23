import React from "react"
import { Link } from "react-router-dom"

export const Intro = () => {
  return (
    <div>
        Welcome screen with some info about app
        <br/>
      <Link to="/login">Go to login page</Link>
    </div>
  )
}
