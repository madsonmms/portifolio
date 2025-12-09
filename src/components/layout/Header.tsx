import styles from '../../assets/styles/Header.module.css'
import Navigation from '../common/Navigation'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.brand}>MMS <span className={styles.dot}>●</span></div>
      <Navigation />
    </header>
  )
}
