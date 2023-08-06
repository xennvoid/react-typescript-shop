import { FC } from 'react'
import styles from './cart-item-name.module.css'

interface CartItemNameProps {
    name: string
}

const CartItemName: FC<CartItemNameProps> = ({ name }) => {

    return (
        <p className={styles.name}>{name}</p>
    )
}

export default CartItemName