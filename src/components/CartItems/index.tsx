import { FC, Fragment } from 'react'
import styles from './cart-items.module.css'
import { useAppSelector } from '../../store/hooks'
import { selectCartItems } from '../../store/slices/cartSlice'
import CartItem from './CartItem'

interface ICartItems {

}

const CartItems: FC<ICartItems> = () => {

    const cartItems = useAppSelector(selectCartItems)

    return (
        <section className={styles.container}>
            {cartItems.map(item =>
                <Fragment key={item.id}>
                    <CartItem product={item} />
                    <hr color="#CACDD8" />
                </Fragment>
            )}
        </section>
    )
}

export default CartItems