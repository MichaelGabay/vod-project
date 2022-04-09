import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <React.Fragment>
      <Outlet />
      <p style={{fontWeight:'bold'}} className='text-white m-0 p-3 bg-dark'>©️ Michael Gabay 2022 </p>
    </React.Fragment>
  )
}
