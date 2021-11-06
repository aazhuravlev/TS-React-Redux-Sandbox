import React, {FC, memo} from "react";
import styles from "./page-container.module.css";

const PageContainer: FC = memo(({children}) => (
    <div className={styles.PageContainer}>
        {children}
    </div>
))

export default PageContainer;