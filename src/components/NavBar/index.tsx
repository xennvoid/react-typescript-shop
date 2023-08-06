import { FC, useEffect, useState } from 'react'
import '../../containers.css'
import styles from './navbar.module.css'
import logoSvg from '../../assets/icons/logo.svg'
import searchSvg from '../../assets/icons/search.svg'
import { ReactComponent as CartSvg } from '../../assets/icons/cart.svg'
import userSvg from '../../assets/icons/user.svg'
import crossSvg from '../../assets/icons/cross.svg'
import Search from '../Search'
import CustomButton from '../CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectCartItemsLength } from '../../store/slices/cartSlice'
import navigationItems from './navigationItems'
import { useWindowSize } from 'usehooks-ts'

interface INavBar { }

const NavBar: FC<INavBar> = () => {

    const cartSize = useAppSelector(selectCartItemsLength)

    const { width } = useWindowSize()
    const [searchIsOpen, setSearchIsOpen] = useState<boolean>(width < 992 ? false : true)

    useEffect(() => {
        setSearchIsOpen(width < 992 ? true : false)
    }, [width])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className={styles.background}>
            <div className={styles.row + " container"}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logoSvg} alt="logo" />
                    </Link>
                </div>
                {searchIsOpen
                    ? <div className={styles.search}>
                        <Search />
                    </div>
                    : <nav className={styles.navigation}>
                        <ul className={styles.list}>
                            {navigationItems.map(item => (
                                <li key={item.text} className={styles["list-item"]}>
                                    <Link to={item.link}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li className={styles["list-item"]}>
                                <CustomButton onClick={handleClick}>Our Deals</CustomButton>
                            </li>
                        </ul>
                    </nav>
                }
                <div className={styles.actions}>
                    <div className={styles["search-open"]}>
                        {searchIsOpen
                            ? <img src={crossSvg} alt="cross" onClick={() => setSearchIsOpen(false)} />
                            : <img src={searchSvg} alt="search" onClick={() => setSearchIsOpen(true)} />
                        }
                    </div>
                    <div className={styles.cart}>
                        <Link to="/cart">
                            <CartSvg fill="#000" />
                        </Link>
                        <span>{cartSize}</span>
                    </div>
                    <img src={userSvg} alt="user" />
                </div>
            </div>
        </div>
    )
}

export default NavBar