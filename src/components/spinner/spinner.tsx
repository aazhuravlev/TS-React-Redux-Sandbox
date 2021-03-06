import React, {FC, memo} from 'react';
import styles from './spinner.module.css';
import {IClassName} from "../../types/common";

interface ISpinnerProps extends IClassName {
    height?: number | string;
}

const Spinner: FC<ISpinnerProps> = memo(({height = '100%', className}) => (
    <section className={`${styles.Spinner} ${className}`}
             style={{height: height}}
    >
        <div className={styles.ldsEllipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </section>
), () => true)

export default Spinner;