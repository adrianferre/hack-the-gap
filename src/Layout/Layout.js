import React, { memo } from 'react'
import './layout.css'
import Menu from './Menu'
import Pages from './Pages'

function Layout() {
  return (
    <div className='Layout'>
      <Menu />
      <Pages />
    </div>
  )
}

export default memo(Layout)
