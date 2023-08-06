import { FC, useEffect, useState } from 'react'
import styles from './custom-select.module.css'

interface ICustomSelect {
    options: (string | number)[],
    onChange: (value: React.SetStateAction<number>) => void,
    textBefore?: string,
    textAfter?: string,
}

const CustomSelect: FC<ICustomSelect> = ({ options, onChange, textBefore, textAfter }) => {

    const [selectedMenuOpened, setSelectedMenuOpened] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<{ id: number, text: string }>({ id: 0, text: options[0].toString() })

    const closeSelect = (e: any) => {
        const el = e.target as HTMLElement
        if (!el.closest(`.${styles.select}`))
            setSelectedMenuOpened(false)
    }

    useEffect(() => {
        document.addEventListener('click', closeSelect)
        return () => document.removeEventListener('click', closeSelect)
    }, [])

    return (
        <div
            className={styles.select}
            onClick={() => setSelectedMenuOpened(prev => !prev)}
        >
            <div className={styles.selected}>
                <span className={styles.before}>{textBefore}&nbsp;</span>
                {selectedOption.text}
                <span className={styles.after}>&nbsp;{textAfter}</span>
                {selectedMenuOpened
                    ? <div className={styles.arrowup}>&gt;</div>
                    : <div className={styles.arrowdown}>&gt;</div>
                }
            </div>
            {selectedMenuOpened &&
                <ul className={styles.options}>
                    {options.map((option, i) =>
                        <li
                            className={styles.option}
                            value={option}
                            key={option}
                            onClick={() => {
                                setSelectedOption({ id: i, text: option.toString() })
                                onChange(+option)
                            }}
                        >
                            {option}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default CustomSelect