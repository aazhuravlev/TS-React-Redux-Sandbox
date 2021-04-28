import React, {FC, useState} from "react";
import {Link} from 'react-router-dom';
import styles from "./items-list-header.module.css"
import {IClassName} from "../../types/common";
import Select from "../select/select";

const specs = [
    {
        label: 'whatever',
        value: ''
    },
    {
        label: 'helicopter',
        value: 'helicopter'
    },
    {
        label: 'rocket',
        value: 'rocket'
    },
    {
        label: 'plane',
        value: 'plane'
    },
    {
        label: 'airship',
        value: 'airship'
    },
];

const ItemsListHeader: FC<IClassName> = ({className}) => {
    const [currentSortingName, setCurrentSortingName] = useState<string>(specs[0].label);

    const clickHandler = (item) => {
        setCurrentSortingName(item.label);
    }

    return (
        <section className={`${styles.ItemsListHeader} ${className}`}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Rent</h1>
                <Select label={currentSortingName} specs={specs} onClick={clickHandler} />
            </div>

            <Link to="/add" className={styles.link}>
                Add new <div className={styles.btn} />
            </Link>
        </section>
    )
};

export default ItemsListHeader;