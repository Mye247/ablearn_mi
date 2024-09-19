import React from 'react'
import { Outlet } from 'react-router-dom'

function PageSetting() {
  return (
    <div className='p-10'>
        <Outlet />
    </div>
  )
}

export default PageSetting