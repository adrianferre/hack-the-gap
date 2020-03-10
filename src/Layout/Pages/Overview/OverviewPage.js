import React from 'react'
import Page from '../components/Page'
import AppBar from '../components/AppBar'
import MonkeyBananaAnimation from '../components/MonkeyBananaAnimation'

const PAGE_TITLE = 'Overview (Estamos desarollando esta sección...)'

function OverviewPage() {
  return (
    <Page appBar={<AppBar title={PAGE_TITLE} />}>
      <MonkeyBananaAnimation />
    </Page>
  )
}

export default OverviewPage
