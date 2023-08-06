import { FC } from 'react'
import styles from './search.module.css'
import searchSvg from '../../assets/icons/search.svg'

interface ISearch { }

const Search: FC<ISearch> = () => {

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search entiere store here..." />
            <img src={searchSvg} alt="search" />
        </div>
    )
}

export default Search