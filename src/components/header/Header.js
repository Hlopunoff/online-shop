import React from 'react';
import Nav from '../nav/Nav';
import Menu from '../menu/Menu';

import styles from './header.module.scss';

const Navigation = () => {
  return (
		<header className={styles.header}>
			<Nav/>
			<Menu/>
		</header>
  )
}

export default Navigation;
