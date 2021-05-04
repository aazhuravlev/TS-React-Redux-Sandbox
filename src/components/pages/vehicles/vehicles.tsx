import React, {FC, useEffect} from "react";
import styles from "./vehicles.module.css"
import ItemsListHeader from "../../items-list-header/items-list-header";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import Spinner from "../../spinner/spinner";
import PageContainer from "../../page-container/page-container";
import {CSSTransition, SwitchTransition} from "react-transition-group"
import VehicleCard from "../../vehicle-card/vehicle-card";

const List = ({list}) => (
    <ul className={styles.list}>
        {list.map((item) => (
                    <li key={item._id} className={styles.item}>
                        <VehicleCard
                            id={item._id}
                            preview={item.preview}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            rent={item.rent}
                        />
                    </li>
                )
            )
        }
    </ul>
)

const Vehicles: FC = () => {
    const {vehicles, loading, error, page, type} = useTypedSelector(state => state.vehicles);
    const {fetchVehicles, resetVehiclesState} = useActions();

    useEffect(() => {
        fetchVehicles(type.value, page);
    }, [page, type.value]);

    useEffect(() => {
        return () => {
            resetVehiclesState();
        }
    }, []);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <PageContainer>
            <ItemsListHeader className={styles.header} />

            <SwitchTransition>
                <CSSTransition
                    key={loading}
                    classNames='appear'
                    unmountOnExit
                    timeout={300}
                >
                    {loading ? <Spinner /> : <List list={vehicles} />}
                </CSSTransition>
            </SwitchTransition>
        </PageContainer>
    )
};

export default Vehicles;