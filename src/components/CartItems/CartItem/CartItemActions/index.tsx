import { FC } from 'react'
import styles from './cart-item-actions.module.css'
import deleteSvg from '../../../../assets/icons/delete.svg'

interface CartItemActionsProps {
    removeItemFromCart: () => void
}

const CartItemActions: FC<CartItemActionsProps> = ({ removeItemFromCart }) => {

    return (
        <div className={styles.actions}>
            <img className={styles.content} src={deleteSvg} alt="remove" onClick={removeItemFromCart} />
        </div>
    )
}

export default CartItemActions;