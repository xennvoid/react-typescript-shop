import { FC } from 'react'
import { IProduct } from '../../types/product'
import styles from './horizontal-product-card.module.css'
import { formatCurrency } from '../../utils/formatCurrency'

import CustomButton from '../CustomButton'

import availableSvg from '../../assets/icons/available.svg'
import unavailableSvg from '../../assets/icons/unavailable.svg'
import favoritesSvg from '../../assets/icons/product-card/favorites.svg'
import compareSvg from '../../assets/icons/product-card/compare.svg'
import { ReactComponent as CartSvg } from '../../assets/icons/cart.svg'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { addToCart } from '../../store/slices/cartSlice'

interface IHorizontalProductCard {
    product: IProduct
}

const HorizontalProductCard: FC<IHorizontalProductCard> = ({ product }) => {

    const dispatch = useAppDispatch()

    const location = useLocation()

    const imgPath = `/src/assets/images/${location.pathname.split('/')[2]}/` + product.image

    return (
        <article className={styles.product}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src={imgPath} alt={product.name} />
                </div>
                <div className={styles.rating}>

                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.name}>
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </div>
                <div className={styles.prices}>
                    <div className={styles.price}>
                        {formatCurrency(product.price)}
                    </div>
                    <div className={styles.discounted}>
                        {formatCurrency(product.discounted_price)}
                    </div>
                </div>
                <div>
                    <CustomButton
                        icon={<CartSvg fill='#0156FF' />}
                        onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))}
                    >
                        Add to cart
                    </CustomButton>
                </div>
            </div>
            <div className={styles.right}>
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
                <div className={styles.actions}>
                    <img src={favoritesSvg} alt="favorite" />
                    <img src={compareSvg} alt="compare" />
                </div>
            </div>
        </article>
    )
}

export default HorizontalProductCard