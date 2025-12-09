import styles from '../../assets//styles/Navigation.module.css'

export default function Navigation(){
    return (
        <nav className={styles.nav}>
        <a className={`${styles.item} ${styles.active}`} href="#">Início</a>
        <a className={styles.item} href="#about">Sobre mim</a>
        <a className={styles.item} href="#projects">Projetos</a>
        <a className={styles.item} href="#contact">Contato</a>
      </nav>
    )
}