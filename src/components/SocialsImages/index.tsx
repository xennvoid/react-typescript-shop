import { FC } from 'react'
import styles from './socials-images.module.css'
import socialImages from './social-media'

interface ISocialsImages { }

const SocialsImages: FC<ISocialsImages> = () => {

    return (
        <div className={styles.social}>
            {socialImages.map((social, i) => <img key={i} src={social} />)}
        </div>
    )
}

export default SocialsImages