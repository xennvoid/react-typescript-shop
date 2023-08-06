import { FC, useState } from 'react'
import styles from './colors.module.css'

interface IColors {
    colors: string[]
}

const Colors: FC<IColors> = ({ colors }) => {

    const [selectedColor, setSelectedColor] = useState<number>(0)

    return (
        <div className={styles.colors}>
            {colors?.map((color, i) => {

                const colorElem = <div
                    key={i}
                    className={styles.color}
                    style={{ backgroundColor: color.toLowerCase().split(' ').join('') }}
                    onClick={() => setSelectedColor(i)}
                ></div>

                return selectedColor === i
                    ? <div
                        key={i}
                        className={styles.circle}
                    >
                        {colorElem}
                    </div>
                    : colorElem
            })}
        </div>
    )
}

export default Colors