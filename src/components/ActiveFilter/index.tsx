import { FC } from 'react'
import styles from './active-filter.module.css'
import removeSvg from '../../assets/icons/active-filter/remove.svg'

interface IActiveFilter {
    name: string,
    removeFilter?: (filterToRemove: string) => void,
    removeAll?: () => void
}

const ActiveFilter: FC<IActiveFilter> = ({ name, removeFilter, removeAll }) => {

    return (
        <div className={styles.filter} onClick={() => removeAll && removeAll()}>
            <span className={styles.name}>{name}</span>
            {!removeAll &&
                <img src={removeSvg} className={styles.remove} alt="remove" onClick={() => removeFilter && removeFilter(name)} />
            }
        </div>
    )
}

export default ActiveFilter