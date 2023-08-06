import { FC } from 'react'
import styles from './shopping-cart.module.css'
import '../../containers.css'
import CartItems from '../../components/CartItems'
import { useAppSelector } from '../../store/hooks'
import { selectCartItemsLength } from '../../store/slices/cartSlice'
import CartEmpty from '../../components/CartEmpty'
import CartSummary from '../../components/CartSummary'

interface IShoppingCart {

}

const ShoppingCart: FC<IShoppingCart> = () => {

    const cartItemsLength = useAppSelector(selectCartItemsLength)

    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            {cartItemsLength === 0
                ? <CartEmpty />
                : <div className={styles.row}>
                    <CartItems />
                    <CartSummary />
                </div>
            }
        </div>
    )
}

export default ShoppingCart