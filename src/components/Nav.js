import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeclassname='active'>
            Add Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeclassname='active'>
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
