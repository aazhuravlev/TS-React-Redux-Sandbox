import React, {FC} from "react";
import styles from "./lazy-image.module.css";
import {IClassName} from "../../types/common";

interface ILazyImageProps extends IClassName {
    preview?: string,
    src: string,
    altPreview?: string,
    alt?: string,
}

const LazyImage: FC<ILazyImageProps> =
    ({
         className = '',
         preview = '',
         src,
         altPreview = '',
         alt = ''
    }) => (
        <div className={`${styles.LazyImage} ${className}`}>
            {preview && <img className={`${styles.preview} lazy`}
                             data-src={preview}
                             width="100%"
                             height="100%"
                             alt={altPreview} />}
            {src && <img className="lazy lazy-image"
                         data-src={src}
                         width="100%"
                         height="100%"
                         alt={alt} />}
        </div>
    )

export default LazyImage;