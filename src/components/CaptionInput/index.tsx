import { FC, InputHTMLAttributes } from 'react'
import styles from './caption-input.module.css'
import CustomInput from '../CustomInput'

interface ICaptionInput extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
}

const CaptionInput: FC<ICaptionInput> = ({ title, ...props }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <CustomInput
                className={styles.input}
                {...props}
            />
        </div>
    )
}

export default CaptionInput