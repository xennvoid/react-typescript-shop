import { FC } from 'react'
import logos from './logos'
import styles from './brands.module.css'
import LazyImage from '../LazyImage'

interface IBrands { }

const Brands: FC<IBrands> = () => {

    return (
        <section className={styles.container}>
            {Object.values(logos).map((image, i) =>
            (<div key={i} className={styles.image}>
                <LazyImage src={image} alt={`brand-${i}`} />
            </div>)
            )}
        </section>
    )
}

export default Brands