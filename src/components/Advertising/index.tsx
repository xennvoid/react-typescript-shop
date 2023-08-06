import { FC } from 'react'
import styles from './advertising.module.css'
import { Link } from 'react-router-dom'
import zipLogoSvg from '../../assets/icons/zip-logo.svg'

interface IAdvertising { }

const Advertising: FC<IAdvertising> = () => {

    return (
        <div className={styles.ad}>
            <div className={styles.logo}>
                <img src={zipLogoSvg} alt="zip-logo" />
            </div>
            <p className={styles.inscription}>
                <strong className={styles.highlighted}>own </strong>
                it now, up to 6 months interest free
            </p>
            <Link to="/" className={styles.more}>learn more</Link>
        </div>
    )
}

export default Advertising