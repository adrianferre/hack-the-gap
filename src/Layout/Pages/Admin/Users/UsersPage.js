import React from 'react'
import Page from '../../components/Page'
import AppBar from '../../components/AppBar'

const PAGE_TITLE = 'Users'

function ActivitiesPage() {
  return <Page appBar={<AppBar title={PAGE_TITLE} light />}></Page>
}

export default ActivitiesPage
