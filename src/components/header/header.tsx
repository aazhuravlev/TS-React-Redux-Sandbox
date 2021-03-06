import React, {FC} from "react";
import {Link} from 'react-router-dom';
import styles from './header.module.css';
import LogoSvg from "../icons/logo";
import NotificationIcon from "../icons/notification-icon";
import ChatIcon from "../icons/chat-icon";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import avatar from '../../static/images/avatar.jpg';
import LazyImage from "../lazy-image/lazy-image";

const Header: FC = () => (
    <header className={styles.Header}>
        <Link
            className={styles.link}
            to="/"
            replace
        >
            <LogoSvg className={styles.logo} />
        </Link>

        <p className={styles.description}>
            World's first affordable airsharing
        </p>

        <div className={styles.container}>
            <ThemeSwitcher />

            <Link
                to="/chat"
                className={`${styles.link} ${styles._icon}`}
            >
                <ChatIcon className={styles.icon} />
            </Link>

            <Link
                to="/notifications"
                className={`${styles.link} ${styles._icon}`}
            >
                <NotificationIcon className={styles.icon} />
            </Link>
        </div>

        <Link
            to="/user"
            className={styles.avatar}
        >
                <span className={styles.name}>
                    Bessie Cooper
                </span>

            <LazyImage className={styles.image}
                       src={avatar}
                       alt="Аватар пользователя" />
        </Link>
    </header>
);

export default Header;
