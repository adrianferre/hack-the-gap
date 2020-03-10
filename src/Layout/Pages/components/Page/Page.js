import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './page.css'

function Page({ appBar, menu, children }) {
  return (
    <div className={'Page-root'}>
      {appBar}
      <div className={'Page-content'}>{children}</div>
    </div>
  )
}

Page.propTypes = {
  appBar: PropTypes.node,
  children: PropTypes.node
}

export default memo(Page)
