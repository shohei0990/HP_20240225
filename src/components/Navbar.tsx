import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.brand}>My Work</div>
            <ul>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/works">Works</Link>
                </li>
                <li>
                    <Link href="/news<">News</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}