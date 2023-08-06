import { FC, useEffect, useState } from 'react'
import styles from './product-filter.module.css'
import { IFilterItem, IFilterObject } from './filters'
import arrowUpSvg from '../../assets/icons/filter/arrow-up.svg'
import arrowDownSvg from '../../assets/icons/filter/arrow-down.svg'
import useAxios from '../../hooks/useAxios'

interface IProductFilter {
    activeFilters: IFilterItem[],
    setActiveFilters: React.Dispatch<React.SetStateAction<IFilterItem[]>>,
    productType: string
}

const ProductFilter: FC<IProductFilter> = ({ activeFilters, setActiveFilters, productType }) => {

    const [openedFilters, setOpenedFilter] = useState<string[]>([])

    const { loading, data: filters, makeRequest } = useAxios<IFilterObject[]>({
        method: "GET",
        url: `/catalog-filters?product_type=${productType}`,
        transformResponse: data => JSON.parse(data)[0].items
    })

    const toggleOpenedFilter = (filter: string) => {
        if (openedFilters.includes(filter)) {
            const newFilters = openedFilters.filter(openedFilter => openedFilter !== filter)
            setOpenedFilter(newFilters)
        } else
            setOpenedFilter(prev => [...prev, filter])
    }

    const toggleActiveFilter = (filter: IFilterItem) => {
        if (activeFilters.some(activeFilter => activeFilter.title === filter.title))
            setActiveFilters(activeFilters => activeFilters.filter(activeFilter => activeFilter !== filter))
        else
            setActiveFilters([...activeFilters, filter])
    }

    useEffect(() => {
        makeRequest()
    }, [productType])

    return (
        <div className={styles.container}>
            <h2 className={styles.banner}>Filters</h2>
            {!loading && filters?.map((filter, i) => (
                <ul key={i} className={styles.group}>
                    <h3
                        className={styles.title}
                        onClick={() => toggleOpenedFilter(filter.title)}
                    >
                        <span>{filter.title}</span>
                        <span>
                            <img src={openedFilters.includes(filter.title) ? arrowUpSvg : arrowDownSvg} alt="arrow" />
                        </span>
                    </h3>
                    {
                        openedFilters.includes(filter.title)
                        &&
                        filter.items?.map((item, i) => (
                            <li key={i} className={styles.filter} onClick={() => toggleActiveFilter(item)}>
                                <div className={styles.name}>{item.title}</div>
                            </li>
                        ))
                    }
                </ul>
            ))}
        </div>
    )
}

export default ProductFilter