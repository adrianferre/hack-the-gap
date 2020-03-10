import React, { memo } from 'react'
import './menuItem.css'
import Button from '@material-ui/core/Button'

function MenuItem({ text, pathname, Icon, onClick }) {
  function handleChange() {
    onClick(pathname)
  }

  return (
    <Button className={'MenuItem-root'} onClick={handleChange}>
      <Icon classes={{ root: 'MenuItem-icon' }} />
    </Button>
  )
}

export default memo(MenuItem)
