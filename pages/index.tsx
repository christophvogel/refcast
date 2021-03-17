import Head from "next/head";

import styles from "../styles/Home.module.css";
import Logo from "../components/Logo/Logo";
import LoginButton from "../components/Login/LoginButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>refcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo size="big"></Logo>
        <LoginButton></LoginButton>
      </main>
    </div>
  );
}
