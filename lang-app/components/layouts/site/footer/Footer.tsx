import styles from './Footer.module.scss'

export default function Footer({ l }: any) {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <p className={styles.text}>{l?.footer.copy_right}</p>
      </div>
    </footer>
  );
}
