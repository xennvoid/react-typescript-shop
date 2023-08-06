import { FC, useState } from 'react'
import styles from './title-drop-down.module.css'

interface ITitleDropDown {
    title: string,
    description?: string,
    children?: React.ReactNode,
    titleColorWhite?: true
}

const TitleDropDown: FC<ITitleDropDown> = ({ title, description, children, titleColorWhite }) => {

    const [showChildren, setShowChildren] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.row} onClick={() => setShowChildren(prev => !prev)}>
                <div className={styles.column}>
                    <div className={styles.title} style={titleColorWhite ? ({ color: '#fff' }) : ({ color: '#000' })}>{title}</div>
                    {description && <div className={styles.description}>{description}</div>}
                </div>
                <div
                    className={[styles.show, (showChildren ? styles.expanded : styles.hidden)].join(' ')}
                    style={titleColorWhite ? ({ color: '#fff' }) : ({ color: '#000' })}
                >
                    &gt;
                </div>
            </div>
            {showChildren && children}
        </div >
    )
}

export default TitleDropDown