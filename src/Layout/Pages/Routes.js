import React, { memo } from 'react'
import { Switch, Route } from 'react-router-dom'

import OverviewPage from './Overview'
import ActivitiesPage from './Activities'
import ProspectsPage from './Prospects'
import AdminPage from './Admin'
import NotFoundPage from './NotFound'

function Routes() {
  return (
    <Switch>
      <Route path='/overview'>
        <OverviewPage />
      </Route>
      <Route path='/activities'>
        <ActivitiesPage />
      </Route>
      <Route path='/Prospects'>
        <ProspectsPage />
      </Route>
      <Route path='/admin'>
        <AdminPage />
      </Route>
      <Route path='/*'>
        <NotFoundPage />
      </Route>
    </Switch>
  )
}

export default memo(Routes)
