import React, { memo } from 'react'
import PropTypes from 'prop-types'
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

MenuItem.propTypes = {
  text: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default memo(MenuItem)
