import styles from '../style';
import { jpgBackground } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`} style={{backgroundImage: `url(${jpgBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='w-full flex flex-col'>
          <h1 className='font-nunito font-semibold sm:text-[130px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-gradient uppercase'>Khazana</h1>
          <div className='w-full flex gap-5 items-end sm:ml-20'>
            <p className={`${styles.paragraph} hidden md:block sm:max-w-[292px]`}>
              We are a leading  software development company that specializes in providing cutting-edge solutions across a wide 
            </p>
            <h1 className='font-nunito font-bold ss:text-[104px] text-[52px] text-gradient uppercase'>Technologies</h1>
          </div>
          <p className={`${styles.paragraph} ml-20 text-start hidden md:block`}>
            range of technologies. With a team of highly skilled and experienced professionals, we offer comprehensive
          </p>
          <p className={`${styles.paragraph} text-start ml-64 hidden md:block`}>
            services in back-end development, front-end development, and blockchain technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
