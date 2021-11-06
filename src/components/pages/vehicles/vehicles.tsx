import React, {FC, useEffect, memo} from "react";
import styles from "./vehicles.module.css"
import ItemsListHeader from "../../items-list-header/items-list-header";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import Spinner from "../../spinner/spinner";
import PageContainer from "../../page-container/page-container";
import {CSSTransition, SwitchTransition} from "react-transition-group"
import VehicleCard from "../../vehicle-card/vehicle-card";
import {IVehicle} from "../../../types/vehicles";

interface IListProps {
    vehicles: IVehicle[]
}

const List: FC<IListProps> = memo(({vehicles}) => (
        <ul className={styles.list}>
            {vehicles.map((item) => (
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
        return (
            <PageContainer>
                <div>{error}</div>
            </PageContainer>
        )
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
                    {loading ? <Spinner /> : <List vehicles={vehicles} />}
                </CSSTransition>
            </SwitchTransition>
        </PageContainer>
    )
};

export default Vehicles;