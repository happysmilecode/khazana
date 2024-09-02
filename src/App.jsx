import React, { useRef } from 'react'
import { 
  Skills,
  Video,
  Portfolio,
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  MainTab,
} from './components'
import styles from './style'

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div ref={homeRef} className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MainTab 
            homeRef={homeRef}
            skillsRef={skillsRef}
            portfolioRef={portfolioRef}
            footerRef={footerRef}
          />
          <Stats/>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <Video />
          <div ref={portfolioRef}>
            <Portfolio/>
          </div>
        </div>
      </div>
      <div ref={footerRef}>
        <Footer/>
      </div>
    </div>
  )
}

export default App