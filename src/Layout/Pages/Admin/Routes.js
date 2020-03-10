import React, { memo } from 'react'
import { Switch, Route } from 'react-router-dom'
import UsersPage from './Users'
import IntegrationsPage from './Integrations'
import NotFoundPage from '../NotFound'
import config from './config'
import SubMenu from '../components/SubMenu'
import { useHistory } from 'react-router-dom'

function Routes() {
  const history = useHistory()

  return (
    <SubMenu
      title={'Admin'}
      menu={config}
      pathname={history.location.pathname}
      onClick={history.push}
    >
      <Switch>
        <Route path='/admin/integrations'>
          <IntegrationsPage />
        </Route>
        <Route path='/admin/users'>
          <UsersPage />
        </Route>
        <Route path='/*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </SubMenu>
  )
}

export default memo(Routes)
