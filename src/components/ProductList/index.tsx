import { FC } from 'react'
import ProductCard from '../ProductCard'
import styles from './product-list.module.css'
import { IProduct } from '../../types/product'
import HorizontalProductCard from '../HorizontalProductCard'
import ProductCardSkeleton from '../../skeletons/ProductCardSkeleton'

export type IProductList = {
    products: IProduct[],
    loading: boolean,
    horizontal?: boolean,
    loadersCount?: number,
}

const ProductList: FC<IProductList> = ({ products, loading, horizontal = false, loadersCount = 5 }) => {

    const ProductCardType = horizontal ? HorizontalProductCard : ProductCard

    return (
        <section className={horizontal ? styles["product-list--horizontal"] : styles["product-list"]}>
            {loading || products.length < 1
                ? [...Array(loadersCount)].map((_, i) => <ProductCardSkeleton key={i} horizontal={horizontal} />)
                : products?.map(product => <ProductCardType key={product.id} product={product} />)
            }
        </section>
    )
}

export default ProductList