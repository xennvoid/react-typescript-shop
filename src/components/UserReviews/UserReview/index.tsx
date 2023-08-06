import { FC, Dispatch } from 'react'
import styles from './user-review.module.css'
import CustomButton from '../../CustomButton'
import DotSwiper from '../../DotSwiper'

interface IUserReview {
    review: IReview,
    slidesCount: number,
    setActiveReview: Dispatch<React.SetStateAction<number>>
}

interface IReview {
    text: string,
    author: string,
}

const UserReview: FC<IUserReview> = ({ review, slidesCount, setActiveReview }) => {

    return (
        <article className={styles.review}>
            <div className={styles.description}>
                <p className={styles.quotes}>‘’</p>
                <p className={styles.text}>{review.text}</p>
            </div>
            <p className={styles.author}> - {review.author}</p>
            <div className={styles.actions}>
                <CustomButton onClick={() => console.log(1)}>Leave Us A Review</CustomButton>
                <DotSwiper amount={slidesCount} changeActive={setActiveReview} />
            </div>
        </article>
    )
}

export default UserReview