import { FC, useState, Dispatch } from 'react'
import styles from './dot-swiper.module.css'

interface IDotSwiper {
    amount: number,
    changeActive?: Dispatch<React.SetStateAction<number>>
}

const DotSwiper: FC<IDotSwiper> = ({ amount, changeActive }) => {

    const [active, setActive] = useState<number>(0)

    const handleSetActive = (numOfActive: number) => {
        setActive(numOfActive)
        changeActive && changeActive(numOfActive)
    }

    return (
        <div className={styles.swiper}>
            {[...Array(amount)].map((_, i) =>
                <div
                    key={i}
                    className={styles.point + (active === i ? " " + styles.active : "")}
                    onClick={() => handleSetActive(i)}
                >
                </div>
            )}
        </div>
    )
}

export default DotSwiper