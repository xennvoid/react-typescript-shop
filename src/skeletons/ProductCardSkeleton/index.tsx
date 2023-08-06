import { FC } from 'react'
import Skeleton from "../Skeleton"
import styles from './product-card-skeleton.module.css'

interface IProductCardSkeleton {
    horizontal?: boolean
}

const ProductCardSkeleton: FC<IProductCardSkeleton> = ({ horizontal = false }) => {

    return (
        <div className={horizontal ? styles.row : ''}>
            <Skeleton classes='profile-circle' />
            <div className={styles.description}>
                <Skeleton classes='title width-100' />
                <Skeleton classes='text width-100' />
                <Skeleton classes='text width-100' />
            </div>
        </div>
    )
}

export default ProductCardSkeleton