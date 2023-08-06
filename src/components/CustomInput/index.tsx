import { FC, InputHTMLAttributes } from 'react'
import styles from './custom-input.module.css'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {

}

const CustomInput: FC<ICustomInput> = ({ value, className, ...props }) => {

    return (
        <input
            className={[styles.input, className].join(' ')}
            {...props}
        />
    )
}

export default CustomInput