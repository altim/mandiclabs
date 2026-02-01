import Link from "next/link";
import LogoIcon from "../icons/Logo";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.root}>
      <Link href="/" className={styles.logoWrapper}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <h1>MandicLabs</h1>
      </Link>

      <div className={styles.menu}>
        <Link href="#">What's new</Link>
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
}
