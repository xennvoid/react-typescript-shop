import { FC } from 'react'
import './skeleton.css'

const Skeleton: FC<{ classes: string }> = ({ classes }) => {
    const classNames = `skeleton ${classes} animate-pulse`

    return <div className={classNames}></div>
}
export default Skeleton