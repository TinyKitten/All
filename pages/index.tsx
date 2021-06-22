import React from 'react';
import styles from '../styles/Home.module.css';
import services from '../services.json';

export default function Home(): React.ReactElement {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>All Services</h1>
        <ul className={styles.cards}>
          {services.map((s) => (
            <li className={styles.cardContainer} key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <div className={styles.card}>
                  <span className={styles.link}>
                    {s.name}
                    <br />
                    <small className={styles.url}>{s.url}</small>
                  </span>
                  <p className={styles.description}>{s.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://tinykitten.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; 2021 TinyKitten
        </a>
      </footer>
    </>
  );
}
