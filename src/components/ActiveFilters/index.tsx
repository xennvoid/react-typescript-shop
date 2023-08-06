import { FC } from 'react'
import styles from './active-filters.module.css'
import { IFilterItem } from '../ProductFilter/filters'
import ActiveFilter from '../ActiveFilter'

interface IActiveFilters {
    filters: IFilterItem[],
    setActiveFilters: React.Dispatch<React.SetStateAction<IFilterItem[]>>
}

const ActiveFilters: FC<IActiveFilters> = ({ filters, setActiveFilters }) => {

    const removeFilter = (filterToRemove: string) => {
        setActiveFilters(filters => filters.filter(filter => filter.title !== filterToRemove))
    }

    return (
        <section className={styles.filters}>
            {filters.map(filter =>
                <ActiveFilter
                    key={filter.title}
                    name={filter.title}
                    removeFilter={removeFilter}
                />
            )}
            {filters.length > 0 &&
                <ActiveFilter
                    name="Clear All"
                    removeAll={() => setActiveFilters([])}
                />
            }
        </section>
    )
}

export default ActiveFilters