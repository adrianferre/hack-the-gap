import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import './subMenu.css'
import SubMenuItem from './Item'

function SubMenu({ title, menu, pathname, children, onClick }) {
  return (
    <Fragment>
      <div className={'SubMenu-menu'}>
        <div className={'SubMenu-title'}> {title}</div>
        {menu.map((item) => (
          <SubMenuItem
            key={item.key}
            {...item}
            selected={item.pathname.startsWith(pathname)}
            onClick={onClick}
          />
        ))}
      </div>
      <div className={'SubMenu-content'}>{children}</div>
    </Fragment>
  )
}

SubMenu.propTypes = {
  title: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  menu: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired
}

export default memo(SubMenu)
