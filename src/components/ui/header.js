import React from 'react';
import styles from './ui.module.css';
import hamburger from './../../assets/images/hamburger.png';
import logo from './../../assets/images/logo.png';
import extras from './../../assets/images/extras.png';

const header = (props) => {
    return (
        <div className={styles.header}>
            <div onClick={props.clicked} className={[styles.hamburgerMenu, 'burger'].join(' ')}>
                <img src={hamburger} width="25px" alt="Menu" />
            </div>
            <div className="logo">
                <img src={logo} width="75px" alt="Logo" />
            </div>
            <div className={[styles.hamburgerMenu, 'extras'].join(' ')}>
                <img src={extras} width="25px" alt="Menu" />
            </div>
        </div>
    );
};

export default header;