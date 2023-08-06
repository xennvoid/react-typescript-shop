import { FC, useState } from 'react'
import styles from './hover-menu.module.css'
import { IHoverMenuItem } from './menu-items'

interface IHoverMenu {
    menuItems: IHoverMenuItem[]
}

const HoverMenu: FC<IHoverMenu> = ({ menuItems }) => {

    const [hoveredId, setHoveredId] = useState<number | null>(2)

    return (
        <ul className={styles.menu}>
            {menuItems.map((item, i) => (
                <li
                    key={i}
                    className={styles.item}
                    onMouseEnter={() => setHoveredId(i)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <span className={styles.name}>{item.name}</span>
                    {item.children && <span className={styles.expand}>&#62;</span>}
                    {(hoveredId === i) && (item.children && <HoverMenu menuItems={item.children} />)}
                </li>
            ))}
        </ul>
    )
}

export default HoverMenu