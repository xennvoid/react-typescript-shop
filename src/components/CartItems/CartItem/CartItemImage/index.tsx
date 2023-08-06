import { FC } from 'react'
import styles from './cart-item-image.module.css'

interface CartItemImageProps {
    imageName: string,
    productType: string,
    productName: string,
}

const CartItemImage: FC<CartItemImageProps> = ({ imageName, productType, productName }) => {

    const imgPath = `/src/assets/images/${productType}/${imageName}`

    return (
        <div className={styles.image}>
            <img className={styles.content} src={imgPath} alt={productName} />
        </div>
    )
}

export default CartItemImage;