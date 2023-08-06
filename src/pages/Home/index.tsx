import { FC, useState } from 'react'
import styles from './home.module.css'
import '../../containers.css'
import slide1 from '../../assets/images/msi-bg.jpg'
import Brands from '../../components/Brands'
import Advertising from '../../components/Advertising'
import News from '../../components/News'
import UserReviews from '../../components/UserReviews'
import { ProductListWithExtension } from '../../components/ProductList/ProductListWithExtension'
import useProducts from '../../hooks/useProducts'
import getActiveFilters from '../../utils/getActiveFilters'
import { IFilterItem } from '../../components/ProductFilter/filters'

interface IHome { }

const Home: FC<IHome> = () => {

    const { loading: printersScannersLoading, data: printersScanners } = useProducts({
        productType: "printers-scanners",
    })

    const { loading: laptopsLoading, data: laptops } = useProducts({
        productType: "laptops",
    })

    const [desktopFilters, setDesktopFilters] = useState<IFilterItem[]>([
        { title: "Dell Desktops", query: "brand=Dell", active: true },
        { title: "Lenovo Desktops", query: "brand=Lenovo", active: false },
        { title: "ASUS Desktops", query: "brand=ASUS", active: false },
    ])

    const { loading: desktopsLoading, data: desktops } = useProducts({
        activeFilters: getActiveFilters(desktopFilters),
        productType: "desktops",
        dependencies: [desktopFilters]
    })

    const { loading: gamingMonitorsLoading, data: gamingMonitors } = useProducts({
        productType: "gaming-monitors",
    })

    return (
        <div className={styles.margin + " container"}>
            <div className={styles.slider}>
                <img src={slide1} alt="slide1" />
            </div>
            <ProductListWithExtension
                loading={printersScannersLoading}
                products={printersScanners}
                title="Printers & Scanners"
                link={{ to: "catalog/printers-scanners", text: "See All Products" }}
            />
            <Advertising />
            <ProductListWithExtension
                loading={laptopsLoading}
                products={laptops}
                image="customer-builds"
                imageSignature="Laptops"
                link={{ to: "catalog/laptops", text: "See All Products" }}
            />
            <ProductListWithExtension
                loading={desktopsLoading}
                products={desktops}
                image="desktops"
                imageSignature="Desktops"
                link={{ to: "catalog/desktops", text: "See All Products" }}
                queryFilters={desktopFilters}
                setActiveQueryFilter={setDesktopFilters}
            />
            <ProductListWithExtension
                loading={gamingMonitorsLoading}
                products={gamingMonitors}
                image="gaming-monitors"
                imageSignature="Gaming Monitors"
                link={{ to: "catalog/gaming-monitors", text: "See All Products" }}
            />
            <Brands />
            <News />
            <UserReviews />
        </div>
    )
}

export default Home