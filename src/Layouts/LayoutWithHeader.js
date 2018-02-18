import React from 'react';

import Logo from 'Icons/Logo';

import styles from './styles/layout.css';

export default class LayoutWithHeader extends React.Component {
	render () {
		return <div className={styles.layout}>
			<div className={styles.header}>
				<Logo />
				Boilerplate
			</div>
			<div className={styles.content}>
				{this.props.children}
			</div>
			<div className={styles.footer}>
				&copy; Me
			</div>
		</div>
	}
}
