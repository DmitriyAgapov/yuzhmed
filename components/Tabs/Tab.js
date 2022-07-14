import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Tabs.module.scss'

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	render() {
		const {
			onClick,
			props: { activeTab, label },
		} = this;

		let className = styles.tabs__list_item;

		if (activeTab === label) {
			className += `${styles.tabs__list_active} button-primary`;
		}

		return (
			<li className={className + ` button button-tab `} onClick={onClick}>
				{label}
			</li>
		);
	}
}

export default Tab;