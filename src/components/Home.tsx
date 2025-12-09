import styles from '../assets/styles/Home.module.css'
import wave1 from '../assets/images/wave1.svg'
import arrowDown from '../assets/images/arrowDown.svg'

export default function Home(){
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={styles.home}>
      <img className={styles.wave} src={wave1} alt="" />
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.name}>Madson<br/>Martins <span className={styles.dotLarge}>●</span></h1>
        </div>

        <div className={styles.right}>
          <div className={styles.roles}>
            <div>UI designer</div>
            <div className={styles.amp}>&</div>
            <div>Designer Gráfico</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.social}>
          <div className={styles.bar}>|</div>
          <div className={styles.circle}>●</div>
          <div className={styles.icons}>Beh · In</div>
        </div>
        <button className={styles.scroll} onClick={scrollToAbout} aria-label="Scroll to about">
          <img src={arrowDown} alt="Seta para baixo" />
        </button>
      </div>
    </main>
  )
}
