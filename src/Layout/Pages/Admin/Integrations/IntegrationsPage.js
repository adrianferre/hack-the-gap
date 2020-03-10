import React from 'react'
import Page from '../../components/Page'
import AppBar from '../../components/AppBar'
import MonkeyBananaAnimation from '../../components/MonkeyBananaAnimation'

const PAGE_TITLE = 'Integrations (We are developing this section...)'

function ActivitiesPage() {
  return (
    <Page appBar={<AppBar title={PAGE_TITLE} light />}>
      <MonkeyBananaAnimation />
    </Page>
  )
}

export default ActivitiesPage
