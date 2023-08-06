import { FC } from 'react'
import { IProductList } from '../../components/ProductList'
import styles from './withAdditionalElements.module.css'
import { Link } from 'react-router-dom'
import FilterMenu from '../../components/FilterMenu'
import { IProduct } from '../../types/product'
import { IFilterItem } from '../../components/ProductFilter/filters'

interface IwithAdditionalElements {
    products: IProduct[],
    loading: boolean,
    image?: string,
    imageSignature?: string,
    link?: ILink,
    title?: string,
    queryFilters?: IFilterItem[],
    setActiveQueryFilter?: React.Dispatch<React.SetStateAction<IFilterItem[]>>
}

interface ILink {
    to: string,
    text: string
}

const withAdditionalElements = (Component: FC<IProductList>) => (props: IwithAdditionalElements) => {

    const { products, loading, image, imageSignature, link, title, queryFilters, setActiveQueryFilter } = props

    return (
        <section className={styles.container}>
            {title &&
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    {link && <Link className={styles.all} to={link?.to}>{link?.text}</Link>}
                </div>
            }
            {queryFilters && setActiveQueryFilter && <FilterMenu filters={queryFilters} setActiveFilter={setActiveQueryFilter} />}
            <div className={styles.content}>
                {image && <div className={styles.image} style={{ backgroundImage: `url(src/assets/images/${image}.jpg)` }}>
                    {imageSignature && <h3 className={styles.signature}>{imageSignature}</h3>}
                    {link && <Link to={link?.to} className={styles.link}>{link?.text}</Link>}
                </div>}
                <Component products={products} loading={loading} loadersCount={5} />
            </div>
        </section>
    )
}

export default withAdditionalElements