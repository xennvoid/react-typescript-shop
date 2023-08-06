import { FC, useState } from 'react'
import styles from './product-switch-info.module.css'

interface IProductSwitchInfo {
    selectors: string[],
    setElementToShow: React.Dispatch<React.SetStateAction<string>>,
}

const ProductSwitchInfo: FC<IProductSwitchInfo> = ({ selectors, setElementToShow }) => {

    const [selected, setSelected] = useState<number>(0)

    return (
        <div className={styles.content}>
            <div className={styles.selectors}>
                {selectors?.map((selector, i) =>
                    <div
                        key={i}
                        onClick={() => {
                            setSelected(i)
                            setElementToShow(selector)
                        }}
                        className={selected === i ? styles.selected : styles.item}
                    >
                        {selector}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductSwitchInfo