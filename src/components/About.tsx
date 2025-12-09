import styles from '../assets/styles/About.module.css'
import Skills from './Skills'
import wave2 from '../assets/images/wave2.svg'
import profile from '../assets/images/profile.jpg'

export default function About() {
  const skills: [string, number][] = [
    ['Illustrator', 5],
    ['Photoshop', 4],
    ['Premiere', 4],
    ['Figma', 5],
    ['HTML', 4],
    ['CSS', 4],
    ['Javascript', 3],
    ['React', 2],
  ]

  return (
    <section id="about" className={styles.about}>
      <img className={styles.wave} src={wave2} alt="" />
      <div className={styles.left}>
        <div className={styles.profile} aria-hidden="true">
          {/* <img src={profile} alt="Foto de Madson Martins" /> */}
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel mi vestibulum condimentum. Nunc convallis leo in orci blandit eleifend in vitae leo.
        </p>

        <div className={styles.habilities}>
          <h2 className={styles.title}>Habilidades</h2>
          <Skills items={skills} />
        </div>
      </div>
    </section>
  )
}
