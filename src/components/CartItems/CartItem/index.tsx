import { FC, useEffect, useState, useMemo } from 'react'
import styles from './cart-item.module.css'
import { IProductWithQuantity, changeCartProductQuantity, removeFromCart } from '../../../store/slices/cartSlice'
import CustomNumberSelect from '../../CustomNumber'
import { useAppDispatch } from '../../../store/hooks'
import CartItemImage from './CartItemImage'
import CartItemPrice from './CartItemPrice'
import CartItemTotal from './CartItemTotal'
import CartItemName from './CartItemName'
import CartItemActions from './CartItemActions'
import CartItemCaption from './CartItemCaption'

interface ICartItemProps {
    product: IProductWithQuantity;
    isTitle?: never;
}

const CartItem: FC<ICartItemProps> = ({ product }) => {

    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState<number>(product?.quantity)

    useEffect(() => {
        dispatch(changeCartProductQuantity({ item: product, quantity }))
    }, [quantity])

    const removeItemFromCart = () => {
        dispatch(removeFromCart(product.id))
    }

    const renderItems = useMemo(() => [
        {
            caption: "Item",
            element: <CartItemImage imageName={product.image} productName={product.name} productType={product.product_type} />
        },
        {
            caption: null,
            element: <CartItemName name={product.name} />
        },
        {
            caption: "Price",
            element: <CartItemPrice price={product.price} discountedPrice={product.discounted_price} />
        },
        {
            caption: "Qty",
            element: <CustomNumberSelect startValue={product.quantity} setAmount={setQuantity} />
        },
        {
            caption: "Subtotal",
            element: <CartItemTotal discountedPrice={product.discounted_price} price={product.price} quantity={product.quantity} />
        },
        {
            caption: null,
            element: <CartItemActions removeItemFromCart={removeItemFromCart} />
        }
    ], [product])

    return (
        <article className={styles.container}>
            {renderItems.map((renderItem, i) =>
                <CartItemCaption key={i} caption={renderItem.caption}>
                    {renderItem.element}
                </CartItemCaption>
            )}
        </article>
    )
}

export default CartItem