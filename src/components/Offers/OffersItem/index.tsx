import { FC } from 'react'
import styles from './offers-item.module.css'
import LazyImage from '../../LazyImage'

interface IOffersItem {
    title: string,
    text: string,
    image: string
}

const OffersItem: FC<IOffersItem> = ({ title, text, image }) => {

    const imageAlt = image.split('/')[image.split('/').length - 1].split('.')[0]

    return (
        <article className={styles.offer}>
            <LazyImage src={image} alt={imageAlt} className={styles.image} />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
        </article>
    )
}

export default OffersItem