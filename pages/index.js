import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          <Image
            src="/images/DSCF3205-1.jpg"
            alt="Picture of the author"
            layout="responsive"
            width={6240}
            height={4160}
          />
          <p>Welcome to my homepage!</p>
        </div>
      </main>
    </div>
  );
}
