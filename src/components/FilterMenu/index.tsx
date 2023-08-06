import { FC, useState } from 'react'
import styles from './filter-menu.module.css'
import { IFilterItem } from '../ProductFilter/filters';

interface IFilterMenu {
    filters: IFilterItem[],
    setActiveFilter: React.Dispatch<React.SetStateAction<IFilterItem[]>>
}

const FilterMenu: FC<IFilterMenu> = ({ filters, setActiveFilter }) => {

    const [selected, setSelected] = useState<IFilterItem>(filters.find(f => f.active == true) || filters[0])

    const changeSelectedFilter = (filter: { title: string, query: string, active: boolean }) => {
        setSelected(filter)
        setActiveFilter(filters => filters.map(f => {
            if (f == filter)
                f.active = true
            else
                f.active = false
            return f
        }))
    }

    return (
        <ul className={styles.filters}>
            {filters.map((filter, i) =>
                <li
                    className={styles.filter + (selected.title === filter.title ? " " + styles.selected : "")}
                    key={i}
                    onClick={() => changeSelectedFilter(filter)}
                >
                    {filter.title}
                </li>)}
        </ul>
    )
}

export default FilterMenu