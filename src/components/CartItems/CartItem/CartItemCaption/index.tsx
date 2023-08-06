import { FC } from 'react'
import styles from './cart-item-caption.module.css'

interface CartItemProps {
    caption: string | null,
    children: React.ReactNode
}

const CartItemCaption: FC<CartItemProps> = ({ caption, children }) => {

    return (
        <div className={styles.container}>
            <div className={styles.caption}>{caption}</div>
            <div className={styles.child}>
                {children}
            </div>
        </div>
    )
}

export default CartItemCaption