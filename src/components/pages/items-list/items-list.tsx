import React, {FC, useEffect, useLayoutEffect} from "react";
import styles from "./items-list.module.css"
import ItemsListHeader from "../../items-list-header/items-list-header";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import Spinner from "../../spinner/spinner";
import PageContainer from "../../page-container/page-container";

const ItemsList: FC = () => {
    const {vehicles, loading, error, page, type} = useTypedSelector(state => state.vehicles);
    const {fetchVehicles, setVehiclesFilter} = useActions();

    useLayoutEffect(() => {
        fetchVehicles(type.value, page);
    }, [page, type.value]);

    useEffect(() => {
        return () => {
            setVehiclesFilter({label: 'whatever', value: ''});
        }
    }, []);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <PageContainer>
            <ItemsListHeader className={styles.header} />

            {loading && <Spinner />}
        </PageContainer>
    )
};

export default ItemsList;