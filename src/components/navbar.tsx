import React from 'react';

import styles from './navbar.module.css';

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  return <nav className={styles.navbar}>{props.children}</nav>;
};

export default NavBar;
