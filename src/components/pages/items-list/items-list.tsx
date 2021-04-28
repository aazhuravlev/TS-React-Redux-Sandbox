import React from "react";
import styles from "./items-list.module.css"
import ItemsListHeader from "../../items-list-header/items-list-header";

const ItemsList: React.FC = () => {
    return (
        <div className={styles.ItemsListPage}>
            <ItemsListHeader className={styles.header} />

        </div>
    )
};

export default ItemsList;