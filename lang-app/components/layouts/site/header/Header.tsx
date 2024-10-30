"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";
import lang_navigations from "@/constants/langNavigations";

export default function Header({ l }: any) {
  console.log(l.lang);

  const [lang, setLang] = useState(false);
  return (
    <header id={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <ul className={styles.links}>
            <li>
              <Link href={`/${l.lang}`}>{l.header.links.home}</Link>
            </li>
            <li>
              <Link href={`${l.lang}/about`}>{l.header.links.about}</Link>
            </li>
          </ul>
          <div className={styles.langs}>
            <div onClick={() => setLang(!lang)} className={styles.lang}>
              {lang_navigations.map((el) => {
                return (
                  <Link key={el} href={el == l.lang ? `/${el}` : "/az"}>
                    {el == l.lang && el}
                  </Link>
                );
              })}
            </div>
            {lang && (
              <div className={styles.other_langs}>
                {lang_navigations.map((el) => {
                  return (
                    el !== l.lang && (
                      <div key={el} className={styles.lang}>
                        <Link href={el !== l.lang ? `/${el}` : "az"}>
                          {el !== l.lang && el}
                        </Link>
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
