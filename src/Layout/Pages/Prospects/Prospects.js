import React from 'react'
import Page from '../components/Page'
import AppBar from '../components/AppBar'
import MonkeyBananaAnimation from '../components/MonkeyBananaAnimation'

const PAGE_TITLE = 'Prospects (We are developing this section...)'

function PageProspects() {
  return (
    <Page appBar={<AppBar title={PAGE_TITLE} />}>
      <MonkeyBananaAnimation />
    </Page>
  )
}

export default PageProspects
