import { FC } from 'react'
import styles from './cart-item-total.module.css'

interface CartItemTotalProps {
    discountedPrice: number,
    price: number,
    quantity: number,
}

const CartItemTotal: FC<CartItemTotalProps> = ({ discountedPrice, price, quantity }) => {

    const amount = (discountedPrice || price) * quantity

    return (
        <p className={styles.subtotal}>${amount}</p>
    )
}

export default CartItemTotal;