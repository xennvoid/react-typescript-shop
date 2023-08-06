import { FC } from 'react'
import styles from './list.module.css'
import '../../containers.css'

interface IList {
    listTitle: string,
    list: string[]
}

const List: FC<IList> = ({ listTitle, list }) => {

    return (
        <figure className={styles.container}>
            <figcaption className={styles.title}>{listTitle}</figcaption>
            <ul className={styles.list}>
                {list.map((el, i) =>
                    <li key={i} className={styles.item}>
                        {el}
                    </li>
                )}
            </ul>
        </figure>
    )
}

export default List