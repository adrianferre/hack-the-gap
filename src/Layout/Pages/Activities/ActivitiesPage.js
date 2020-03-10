import React from 'react'
import Page from '../components/Page'
import AppBar from '../components/AppBar'
import MonkeyBananaAnimation from '../components/MonkeyBananaAnimation'

const PAGE_TITLE = 'Activities (Estamos desarollando esta sección...)'

function ActivitiesPage() {
  return (
    <Page appBar={<AppBar title={PAGE_TITLE} />}>
      <MonkeyBananaAnimation />
    </Page>
  )
}

export default ActivitiesPage
