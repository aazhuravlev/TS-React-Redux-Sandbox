import React, {FC} from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import styles from "./theme-switcher.module.css";
import NightModeIcon from "../icons/night-mode-icon";
import DayModeIcon from "../icons/day-mode-icon";

const ThemeSwitcher: FC = () => {
    const theme = useTypedSelector(state => state.theme);
    const {changeTheme} = useActions();
    const isLight = theme === 'light';

    const themeChangeHandler = (): void => {
        const themeName = isLight ? 'dark' : 'light';
        changeTheme(themeName);

        document.documentElement.dataset.theme = themeName;
    }

    return (
        <SwitchTransition>
            <CSSTransition
                key={theme}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames='appear'
            >
                <button
                    className={styles.btn}
                    onClick={themeChangeHandler}
                >
                    {isLight
                        ? <NightModeIcon className={styles.icon} />
                        : <DayModeIcon className={styles.icon} />
                    }

                    <span className={styles.btnText}>
                        {isLight
                            ? 'Night mod'
                            : 'Day mod'
                        }
                    </span>
                </button>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default ThemeSwitcher;