import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.scss';

export default function Navigation({activePage}) {
  const links = [
    {
      name: 'about',
      href: '/about',
    },
    {
      name: 'AWS',
      href: '/aws',
    },
    {
      name: 'NextJS',
      href: '/nextjs',
    },
    {
      name: 'Cloudinary',
      href: '/cloudinary',
    },
  ];

  return (
    <>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.item}>
            <Link href={`/`}>
              <a className={styles.link}>TP</a>
            </Link>
          </li>
          {links && links.map((link) => {
            const {
              name,
              href,
            } = link;

            return (
              <li 
                key={name}
                className={activePage === name.toLowerCase() ? styles.activePage : null}
                className={styles.item}
              >
                <Link href={href}>
                  <a className={styles.link}>
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
