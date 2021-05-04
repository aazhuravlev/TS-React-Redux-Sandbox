import React, {FC} from "react";
import styles from "./page-container.module.css";

const PageContainer: FC = ({children}) => (
    <div className={styles.PageContainer}>
        {children}
    </div>
)

export default PageContainer;