import './monkeyBanana.css'
import React, { memo } from 'react'

import computer from './images/computer.png'
import body from './images/body.png'
import frontArm from './images/frontArm.png'
import backArm from './images/backArm.png'
import head from './images/head.png'
import tail from './images/tail.png'
import bananas from './images/bananas.png'

import cs from 'classnames'

import { makeStyles } from '@material-ui/styles'

const DEFAULT_VELOCITY = 1

const useStyles = makeStyles({
  imgContainer: {
    marginTop: 28,
    marginLeft: 28,
    height: '40%',
    position: 'relative'
  },
  img: {
    position: 'absolute',
    top: 0,
    margin: 'auto',
    height: '100%'
  },
  computer: {
    zIndex: '10'
  },
  head: {
    transformOrigin: `50% 40%`,
    zIndex: '9',
    animation: ({ velocity = 1 }) => `head ${400 * velocity}ms linear infinite`
  },
  bananas: {
    transformOrigin: `71% 37%`,
    animation: ({ velocity = 1 }) =>
      `bananas ${400 * velocity}ms linear infinite`
  },
  frontArm: {
    transformOrigin: `70% 55%`,
    animation: ({ velocity = 1 }) =>
      `frontArm ${300 * velocity}ms linear infinite`
  },
  tail: {
    transformOrigin: `81% 69%`,
    animation: ({ velocity = 1 }) =>
      `frontArm ${900 * velocity}ms linear infinite`
  },
  backArm: {
    transformOrigin: `45% 68%`,
    animation: ({ velocity = 1 }) =>
      `frontArm ${300 * velocity}ms linear infinite`
  }
})

function MonkeyBananaAnimation() {
  const classes = useStyles({
    velocity: DEFAULT_VELOCITY
  })

  return (
    <div className={classes.imgContainer}>
      <img
        className={cs(classes.img, classes.computer)}
        src={computer}
        alt={'monkey-computer'}
      />
      <img className={classes.img} src={body} alt={'monkey-body'} />
      <img
        className={cs(
          classes.img,
          classes.backArm,
          'MonkeyBananaAnimation--backArm'
        )}
        src={backArm}
        alt={'monkey-back-arm'}
      />
      <img
        className={cs(classes.img, classes.head, 'MonkeyBananaAnimation--head')}
        src={head}
        alt={'monkey-head'}
      />
      <img
        className={cs(
          classes.img,
          classes.frontArm,
          'MonkeyBananaAnimation--frontArm'
        )}
        src={frontArm}
        alt={'monkey-front-arm'}
      />
      <img
        className={cs(classes.img, classes.tail, 'MonkeyBananaAnimation--tail')}
        src={tail}
        alt={'monkey-tail'}
      />
      <img
        className={cs(
          classes.img,
          classes.bananas,
          'MonkeyBananaAnimation--bananas'
        )}
        src={bananas}
        alt={'monkey-bananas'}
      />
    </div>
  )
}

export default memo(MonkeyBananaAnimation)
