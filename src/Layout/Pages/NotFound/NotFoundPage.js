import React from 'react'
import Page from '../components/Page'
import AppBar from '../components/AppBar'
import './notFoundPage.css'

const PAGE_TITLE = 'Upss! Página no econtrada'

function NotFoundPage() {
  return (
    <Page appBar={<AppBar title={PAGE_TITLE} />}>
      <div className={'NotFoundPage-content'}>
        No hemos encontrado la sección que buscabas&nbsp;
        <span role={'img'} aria-label='Think'>
          🤔
        </span>
        <br />
        Intentá navegando a otra sección&nbsp;
        <span role={'img'} aria-label='Rocket'>
          🚀
        </span>
      </div>
    </Page>
  )
}

export default NotFoundPage
