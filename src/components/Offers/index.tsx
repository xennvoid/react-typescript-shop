import { FC } from 'react'
import styles from './offers.module.css'
import OffersItem from './OffersItem'
import images from './images'

interface IOffers { }

const Offers: FC<IOffers> = () => {

    const offers = [
        { title: "Product Support", text: "Up to 3 years on-site warranty available for your peace of mind." },
        { title: "Personal Account", text: "With big discounts, free delivery and a dedicated support specialist." },
        { title: "Amazing Savings", text: "Up to 70% off new Products, you can be sure of the best price." }
    ]

    return (
        <section className={styles.offers}>
            {offers.map((offer, i) =>
                <OffersItem
                    key={i}
                    title={offer.title}
                    text={offer.text}
                    image={images[i]}
                />
            )}
        </section>
    )
}

export default Offers