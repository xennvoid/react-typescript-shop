import { FC } from 'react'
import styles from './current-product-skeleton.module.css'
import Skeleton from '../Skeleton'

const CurrentProductSkeleton: FC<{ className?: string }> = ({ className }) => {

    return (
        <div className={[styles.columns, 'container'].join(' ')}>
            <div>
                <Skeleton classes='title width-50' />
                <Skeleton classes='text width-50' />
                <Skeleton classes='text width-50' />
            </div>
            <Skeleton classes='profile-circle width-100' />
        </div>
    )
}

export default CurrentProductSkeleton