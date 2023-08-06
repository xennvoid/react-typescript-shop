import { FC } from 'react'
import styles from './nav-list.module.css'
import TitleDropDown from '../TitleDropDown'
import List from '../List'

import { useWindowSize } from 'usehooks-ts'

interface INavList {
    lists: {
        title: string;
        items: string[];
    }[]
}

const NavList: FC<INavList> = ({ lists }) => {

    const { width } = useWindowSize()

    return (
        <section className={styles.lists}>
            {lists.map((list, i) => (
                width < 992
                    ? <TitleDropDown
                        key={i}
                        title={list.title}
                        titleColorWhite
                    >
                        {list.items.map((item, i) => <p key={i} className={styles.links}>{item}</p>)}
                    </TitleDropDown>
                    : <List key={i} listTitle={list.title} list={list.items} />
            ))}
        </section>
    )
}

export default NavList