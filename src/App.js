import './App.css';
import React, { useState } from 'react';
import { useSpring, animated, config, useSprings, useTrail } from 'react-spring';
import { FacebookShareButton, FacebookIcon } from "react-share";

/* import HookPage from './hooksComponent/h-useState'
import EHookPage from './hooksComponent/h-effect';
import UseMemoPage from './hooksComponent/h-useMemo';
import UserReducerPage from './hooksComponent/h-useReducer'
import UseContextFather from './hooksComponent/h-useContext'
import UserReactRedux from './hooksComponent/h-useSelector' */
function App() {
  /* const animation = useSpring({
    from: { opacity: 0, transform: `rotateY(-90deg)` },
    to: { opacity: 1, transform: `rotateY(0deg)` },
    config: config.wobbly
  });

  const [visible, setVisible] = useState(false)
  
  const springs = useTrail(6, {
    from: { opacity: 0, transform: 'rotateY(-90deg)' },
    to: { opacity: 1, transform: `rotateY(0deg)` },
    config: {
      mass: 15,
      clamp: true
    },
    reset: true,
    immediate: false
  })
  const shadows = useTrail(6, {
    from: { left: '-100%' },
    to: { left: '150%' },
    config: {
      mass: 10,
      clamp: true
    },
    reset: true
  })

  const [trail, api] = useTrail(6, () => ({

    transform: 'scale(0) rotateY(-90deg)',
    left: '-100%',
    config: config.default
  }))

  const fn = () => {

    api.start({ transform: `scale(1) rotateY(0deg)`, left: '150%' })
  }
  return (
    <div className="App">
      <button onClick={() => { fn() }}>dian</button>
      {
        trail.map((spring, index) => {
          const { transform, left } = spring
          return (
            <animated.div className='test' key={index} style={{ transform }}>
              <animated.div className='shadow' key={`shadow${index}`} style={{ left }}></animated.div>
              aaaa
            </animated.div>
          )
        })
      }


    </div>
  ); */
  const shareUrl = 'http://www.baidu.com'
  const title = 'test'
  return (
    <div className='App'>
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  )
}

export default App;
