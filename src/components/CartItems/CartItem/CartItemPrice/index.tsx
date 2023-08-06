import { FC } from 'react'
import styles from './cart-item-price.module.css'

interface CartItemPriceProps {
    price: number,
    discountedPrice: number
}

const CartItemPrice: FC<CartItemPriceProps> = ({ discountedPrice, price }) => {

    const amount = discountedPrice || price

    return (
        <p className={styles.price}>
            {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(amount)}
        </p>
    )
}

export default CartItemPrice