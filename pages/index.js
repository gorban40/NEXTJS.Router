import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/blog/20/202/02">blog</Link>
        </li>
        <li>
          <Link href="/client">client</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
