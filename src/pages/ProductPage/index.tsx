import { FC, useState } from 'react'
import styles from './product-page.module.css'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import '../../containers.css'
import Colors from '../../components/Colors'
import ProductDetails from '../../components/ProductDetails'
import ProductSwitchInfo from '../../components/ProductSwitchInfo'
import useAxios from '../../hooks/useAxios'
import { useMediaQuery } from 'usehooks-ts'
import AddToCart from '../../components/AddToCart'

interface IProductPage {

}

const ProductPage: FC<IProductPage> = () => {

    const { productId } = useParams()

    const maxW768 = useMediaQuery('(max-width: 768px)')

    const { data: product } = useAxios<IProduct>({ method: 'GET', url: `/products/${productId}` })

    const [selectedColor, setSelectedColor] = useState<number>(0)

    const [infoToShow, setInfoToShow] = useState<string>('about')

    const imageSrc = `/src/assets/images/${product?.product_type}/${product?.image}`

    return (
        <main className={styles.container}>
            {maxW768 && product && <AddToCart product={product} />}
            {!maxW768 &&
                <div className={styles.border}>
                    <div className="container">
                        <div className={styles.actions}>
                            <ProductSwitchInfo selectors={['about', 'details']} setElementToShow={setInfoToShow} />
                            {product && <AddToCart product={product} />}
                        </div>
                    </div>
                </div>
            }
            <div className={styles.background}>
                <div className={styles.product}>
                    <div className={styles.left}>
                        <div className={styles.info}>
                            <h3 className={styles.name}>
                                {product?.name}
                            </h3>
                            {infoToShow === 'about' &&
                                <>
                                    <p className={styles.description}>{product?.description}</p>
                                    <Colors colors={product?.colors!} />
                                </>
                            }
                            {infoToShow === 'details' && product && <ProductDetails productType={product.product_type} />}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.image}>
                            <img src={imageSrc} alt="product" />
                        </div>
                        {maxW768 && <ProductSwitchInfo selectors={['about', 'details']} setElementToShow={setInfoToShow} />}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage