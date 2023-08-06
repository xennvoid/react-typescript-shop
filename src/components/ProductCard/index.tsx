import { FC } from 'react'
import { IProduct } from '../../types/product'
import styles from './product-card.module.css'
import { formatCurrency } from '../../utils/formatCurrency'

import availableSvg from '../../assets/icons/available.svg'
import unavailableSvg from '../../assets/icons/unavailable.svg'
import favoritesSvg from '../../assets/icons/product-card/favorites.svg'
import compareSvg from '../../assets/icons/product-card/compare.svg'
import { Link } from 'react-router-dom'

interface IProductCard {
    product: IProduct
}

const ProductCard: FC<IProductCard> = ({ product }) => {

    const imgPath = `/src/assets/images/${product.product_type}/` + product.image

    return (
        <article className={styles.product}>
            <div className={styles.availability}>
                {product.availability
                    ? <div className={styles.available}>
                        <img src={availableSvg} alt="available" />
                        <span>in stock</span>
                    </div>
                    : <div className={styles.unavailable}>
                        <img src={unavailableSvg} alt="unavailable" />
                        <span>check availability</span>
                    </div>
                }
            </div>
            <div className={styles.image}>
                <img src={imgPath} alt={product.name} />
            </div>
            <div className={styles.rating}>

            </div>
            <div className={styles.name}>
                <Link to={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </div>
            <div className={styles.price}>
                {formatCurrency(product.price)}
            </div>
            <div className={styles.discounted}>
                {formatCurrency(product.discounted_price)}
            </div>
            <div className={styles.actions}>
                <img src={favoritesSvg} alt="favorite" />
                <img src={compareSvg} alt="compare" />
            </div>
        </article>
    )
}

export default ProductCard