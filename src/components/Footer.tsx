import styles from "../styles/Footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="/service">Service</a>
                <a href="/company">Company</a>
                <a href="/recruit">Recruit</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
            <div className={styles.copyRight}>©2024 Sample</div>
        </footer>
    )
}