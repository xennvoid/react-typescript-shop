import { FC } from 'react'
import styles from './payments-images.module.css'
import paymentsImages from './payments'

interface IPaymentsImages { }

const PaymentsImages: FC<IPaymentsImages> = () => {

    return (
        <div className={styles.payments}>
            {paymentsImages.map((payment, i) => <img key={i} src={payment} />)}
        </div>
    )
}

export default PaymentsImages