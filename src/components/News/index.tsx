import { FC } from 'react'
import styles from './news.module.css'
import newsImages from './images'
import NewsItem from './NewsItem'

interface INews { }

const News: FC<INews> = () => {

    const description = "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
    const date = "01.09.2020"

    return (
        <section className={styles.news}>
            <h3 className={styles.title}>Follow us on Instagram for News, Offers & More</h3>
            <div className={styles.container}>
                {Object.entries(newsImages).map((image, i) =>
                    <NewsItem
                        key={i}
                        imageSrc={image[1]}
                        number={1}
                        description={description}
                        date={date}
                    />
                )}
            </div>
        </section>
    )
}

export default News