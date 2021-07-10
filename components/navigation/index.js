import React from 'react';
import styles from './navigation.module.scss';

export default function Navigation({activePage}) {
  const links = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'Login',
      href: '/login',
    }
  ];

  return (
    <>
      <nav>
        <ul className={styles.navigation}>
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
                <a 
                  href={href}
                  // className={styles.links}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
