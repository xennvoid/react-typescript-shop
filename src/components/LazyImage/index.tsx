import { FC } from 'react'
import styles from './lazy-image.module.css'
import { useInView } from 'react-intersection-observer'
import Skeleton from '../../skeletons/Skeleton'

interface LazyImageProps {
    src: string,
    alt?: string,
    className?: CSSModuleClasses[string]
}

const LazyImage: FC<LazyImageProps> = ({ src, alt, className }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <div ref={ref} className={[styles.container, className && className].join(' ')}>
            {inView ? <img src={src} alt={alt} /> : <Skeleton classes='profile-circle' />}
        </div>
    )
}

export default LazyImage;