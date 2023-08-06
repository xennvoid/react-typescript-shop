import { FC, useState } from 'react'
import styles from './add-to-cart.module.css'
import CustomNumberSelect from '../CustomNumber';
import CustomButton from '../CustomButton';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/slices/cartSlice';
import { IProduct } from '../../types/product';

interface AddToCartProps {
    product: IProduct
}

const AddToCart: FC<AddToCartProps> = ({ product }) => {

    const dispatch = useAppDispatch()

    const [productAmount, setProductAmount] = useState<number>(1)

    const price = product?.discounted_price ? product.discounted_price * productAmount : product?.price ? product?.price * productAmount : 0

    return (
        <div className={styles.cart}>
            <p className={styles.caption}>On Sale from<span className={styles.price}>&nbsp;${price}</span></p>
            <CustomNumberSelect
                setAmount={setProductAmount}
                startValue={productAmount}
            />
            <CustomButton
                reverseColor
                className={styles.button}
                onClick={() => dispatch(addToCart({ item: product, quantity: productAmount }))}
            >
                Add to cart
            </CustomButton>
        </div>
    )
}

export default AddToCart;