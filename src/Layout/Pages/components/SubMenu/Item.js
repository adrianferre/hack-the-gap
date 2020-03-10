import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './item.css'
import Button from '@material-ui/core/Button'
import cs from 'classnames'

function SubMenuItem({ text, selected, pathname, Icon, onClick }) {
  function handleClick() {
    onClick(pathname)
  }
  console.log(selected)
  return (
    <Button
      className={cs({
        'SubMenuItem-root': true,
        'SubMenuItem-selected': selected
      })}
      style={{ ':hover': {} }}
      onClick={handleClick}
    >
      <Icon classes={{ root: 'SubMenuItem-icon' }} />
      {text}
    </Button>
  )
}

SubMenuItem.propTypes = {
  text: PropTypes.node.isRequired,
  Icon: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default memo(SubMenuItem)
