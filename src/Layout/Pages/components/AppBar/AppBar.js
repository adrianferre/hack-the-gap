import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './appBar.css'
import Divider from '@material-ui/core/Divider'
import cs from 'classnames'

function AppBar({ title, light = false }) {
  return (
    <div className={cs({ 'AppBar-root': true, 'AppBar-light': light })}>
      <div className={'AppBar-content'}>{title}</div>
      <Divider />
    </div>
  )
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool
}

export default memo(AppBar)
