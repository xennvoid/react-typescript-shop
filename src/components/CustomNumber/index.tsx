import { FC, useState, useEffect } from 'react'
import styles from './custom-number.module.css'

interface ICustomNumberSelect {
    startValue?: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
}

const CustomNumberSelect: FC<ICustomNumberSelect> = ({ startValue = 0, setAmount }) => {

    const [value, setValue] = useState<number>(startValue)

    useEffect(() => {
        setAmount(value)
    }, [value])

    const incrementValue = () => {
        setValue(prev => prev + 1)
    }

    const decrementValue = () => {
        if (value === 1)
            return
        setValue(prev => prev - 1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.value}>{value}</div>
            <div className={styles.arrows}>
                <div className={styles.up} onClick={incrementValue}>&gt;</div>
                <div className={styles.down} onClick={decrementValue}>&lt;</div>
            </div>
        </div>
    )
}

export default CustomNumberSelect