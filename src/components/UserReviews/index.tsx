import { FC, useState } from 'react'
import styles from './user-reviews.module.css'
import UserReview from './UserReview'

interface IUserReviews { }

const UserReviews: FC<IUserReviews> = () => {

    const [activeReview, setActiveReview] = useState<number>(0)

    const reviews = [{
        text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
        author: "Tama Brown"
    },
    {
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus recusandae eius, optio iste nostrum laboriosam nulla quidem eaque similique molestiae ratione expedita sint dolorum dolores ut. Praesentium dolores consectetur dolorem.",
        author: "Ben Brown"
    },
    {
        text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
        author: "Sam Brown"
    }]

    return (
        <section className={styles.container}>
            <UserReview review={reviews[activeReview]} slidesCount={reviews.length} setActiveReview={setActiveReview} />
        </section>
    )
}

export default UserReviews