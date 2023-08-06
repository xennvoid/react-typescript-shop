import { FC } from 'react'
import styles from './product-details.module.css'
import useAxios from '../../hooks/useAxios'

interface IProductDetails {
    productType: string
}

const ProductDetails: FC<IProductDetails> = ({ productType }) => {

    const { data: details } = useAxios<string[]>({
        url: "/details",
        params: {
            productType
        },
        transformResponse: (data) => JSON.parse(data)[0].details
    })

    return (
        <ul className={styles.details}>
            {details?.map((detail, i) =>
                <li key={i} className={styles.detail}>
                    {detail}
                </li>
            )}
        </ul>
    )
}

export default ProductDetails