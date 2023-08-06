import { FC, useEffect, useState } from 'react'
import styles from './catalog.module.css'
import ProductFilter from '../../components/ProductFilter'
import { IFilterItem } from '../../components/ProductFilter/filters'
import ActiveFilters from '../../components/ActiveFilters'
import '../../containers.css'
import ProductList from '../../components/ProductList'
import { useParams } from 'react-router-dom'
import ChangeListDisplay from '../../components/ChangeListDisplay'
import Pagination from '../../components/Pagination'
import CustomSelect from '../../components/CustomSelect'
import useScrollToTop from '../../hooks/useScrollToTop'
import useProducts from '../../hooks/useProducts'

interface ICatalog { }

const perPageOptions = [5, 8, 10, 15, 20, 25]

const Catalog: FC<ICatalog> = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productsPerPage, setProductsPerPage] = useState<number>(perPageOptions[0])

    const { productType } = useParams<string>()

    const [activeFilters, setActiveFilters] = useState<IFilterItem[]>([])

    const [displayListHorizontal, setDisplayHorizontal] = useState<boolean>(false)

    const { data: products, totalPages, loading } = useProducts({
        activeFilters,
        productType,
        currentPage,
        productsPerPage,
        dependencies: [activeFilters, productType, currentPage, productsPerPage]
    })

    useEffect(() => {
        setCurrentPage(1)
    }, [activeFilters, productsPerPage, productType])

    useScrollToTop([currentPage])

    return (
        <div className={styles.split + " container"}>
            <ProductFilter
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                productType={productType!}
            />
            <div className={styles.right}>
                <div className={styles.display}>
                    <ChangeListDisplay setDisplayHorizontal={setDisplayHorizontal} />
                    <CustomSelect
                        options={perPageOptions}
                        onChange={(value) => setProductsPerPage(value)}
                        textBefore="Show:"
                        textAfter="per page"
                    />
                </div>
                {activeFilters.length > 0 &&
                    <ActiveFilters filters={activeFilters} setActiveFilters={setActiveFilters} />
                }
                <ProductList
                    products={products}
                    loading={loading}
                    horizontal={displayListHorizontal}
                    loadersCount={productsPerPage}
                />
                <Pagination
                    className={styles["pagination-bar"]}
                    currentPage={currentPage}
                    totalCount={totalPages}
                    pageSize={productsPerPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}

export default Catalog