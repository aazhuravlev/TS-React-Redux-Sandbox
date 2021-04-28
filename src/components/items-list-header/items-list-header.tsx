import React, {FC} from "react";
import {Link} from 'react-router-dom';
import styles from "./items-list-header.module.css"
import {IClassName} from "../../types/common";

const ItemsListHeader: FC<IClassName> = ({className}) => {
    return (
        <section className={`${styles.ItemsListHeader} ${className}`}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Rent</h1>
                <button className={styles.select}>whatever</button>
            </div>

            <Link to="/add" className={styles.link}>
                Add new

                <div className={styles.btn} />
            </Link>
        </section>
    )
};

export default ItemsListHeader;