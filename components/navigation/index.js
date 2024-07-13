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
      name: 'Next.js',
      href: '/nextjs',
    },
    {
      name: 'Cloudinary',
      href: '/cloudinary',
    },
    {
      name: 'Contentful',
      href: '/contentful',
    },
  ];

  return (
    <>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.item}>
            <Link
              href={`/`}
              className={styles.link}
            >
              TP
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
              >
                <Link
                  href={href}
                  className={styles.link}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
