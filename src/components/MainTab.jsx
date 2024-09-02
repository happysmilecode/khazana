import React, { useEffect, useState } from 'react'
import { stats } from '../constants'
import styles from '../style'
import FullWidthTab from './FullWidthTab';

const MainTab = ({ homeRef, skillsRef, portfolioRef, footerRef }) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= stickyOffset) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    const navbar = document.getElementById('navbar');
    const stickyOffset = navbar.offsetTop;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6`}>
        <div id='navbar' className={sticky ? 'sticky' : ''} >
            <FullWidthTab 
              homeRef={homeRef}
              skillsRef={skillsRef}
              portfolioRef={portfolioRef}
              footerRef={footerRef}
            />
        </div>
      
    </section>
  )
}

export default MainTab
