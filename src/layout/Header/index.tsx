import { FC } from 'react'
import styles from './header.module.css'
import '../../containers.css'
import facebookSvg from '../../assets/icons/facebook.svg'
import instagramSvg from '../../assets/icons/instagram.svg'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'

interface IHeader { }

const Header: FC<IHeader> = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles['working-time']}>
                        Mon-Thu: <span className={styles.highlighted}>9:00 AM - 5:30 PM</span>
                    </div>
                    <div className={styles.contact}>
                        <p>Visit our showroom in 1234 Street Adress City Address, 1234</p>
                        <Link to="/" className={styles.highlighted}>Contact Us</Link>
                    </div>
                    <div className={styles.call}>
                        <span className={styles.highlighted}>Call Us: (00) 1234 5678</span>
                        <div className={styles.social}>
                            <img src={facebookSvg} alt="facebook" />
                            <img src={instagramSvg} alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    )
}

export default Header