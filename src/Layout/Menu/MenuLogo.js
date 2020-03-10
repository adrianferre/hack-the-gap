import React, { memo } from 'react'
import './menuLogo.css'
import sirenaLogo from './sirenaLogo.svg'

function MenuLogo() {
  return (
    <div className={'MenuLogo-root'}>
      <img src={sirenaLogo} alt={'Sirena logo'} />
    </div>
  )
}

export default memo(MenuLogo)
