import styles from '../assets/styles/Skills.module.css'

type Props = { items: [string, number][] }

export default function Skills({ items }: Props){
  return (
    <div className={styles.skillsGrid}>
      {items.map(([name, level]) => (
        <div key={name} className={styles.skillRow}>
          <div className={styles.skillLabel}>{name}</div>

          <div className={styles.skillDots} aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < level ? styles.dotFilled : styles.dot} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
