import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
      </main>
    </div>
  )
}
