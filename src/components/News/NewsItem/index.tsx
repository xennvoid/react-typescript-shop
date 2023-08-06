import { FC } from 'react'
import styles from './news-item.module.css'
import LazyImage from '../../LazyImage'

interface INewsItem {
    imageSrc: string,
    description: string,
    date: string,
    number: number
}

const NewsItem: FC<INewsItem> = ({ imageSrc, description, date, number }) => {

    return (
        <article className={styles.item}>
            <LazyImage src={imageSrc} alt={`news-${number}`} />
            <p className={styles.description}>
                {description}
            </p>
            <span className={styles.date}>{date}</span>
        </article>
    )
}

export default NewsItem