import React, {FC, memo} from "react";
import styles from "./vehicle-card.module.css";
import {Link} from "react-router-dom";
import LazyImage from "../lazy-image/lazy-image";

interface IVehicleCardProps {
    id: string;
    preview: string;
    image: string;
    name: string;
    description: string;
    rent: string | number;
}

const VehicleCard: FC<IVehicleCardProps> = memo(({id, preview, image, name, description, rent}) => (
    <Link to={`/vehicles/${id}`} className={styles.VehicleCard}>
        <LazyImage
            className={styles.image}
            preview={preview}
            src={image}
            altPreview="Превью транспортного средства"
            alt="Изображение транспортного средства"
        />

        <div>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <span className={styles.rent}>
                {typeof rent === 'string' ? rent.split(',').join(' ') : rent} $/h
            </span>
        </div>
    </Link>
), () => true)

export default VehicleCard;