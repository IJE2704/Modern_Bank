import React from 'react';
import styles from './style';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import Business from './Components/Business';
import Billing from './Components/Billing';
import CardDeal from './Components/CardDeal';
import Testimonials from './Components/Testimonials';
import Clients from './Components/Clients';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;