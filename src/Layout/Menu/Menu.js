import React, { memo } from 'react'
import './menu.css'
import config from './config'
import MenuLogo from './MenuLogo'
import MenuItem from './MenuItem'

import { useHistory } from 'react-router-dom'

function Menu() {
  const history = useHistory()

  return (
    <div className='Menu-root'>
      <MenuLogo />
      {config.map((config) => (
        <MenuItem key={config.key} {...config} onClick={history.push} />
      ))}
    </div>
  )
}

export default memo(Menu)
