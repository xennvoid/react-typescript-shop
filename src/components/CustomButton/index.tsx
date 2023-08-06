import { FC, ButtonHTMLAttributes } from 'react'
import styles from './custom-button.module.css'

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element,
    reverseColor?: true
}

const CustomButton: FC<ICustomButton> = ({ children, icon, className, reverseColor, ...props }) => {

    return (
        <button
            className={[styles.button, reverseColor && styles.reverse, className].join(' ')}
            {...props}
        >
            {icon}
            {children}
        </button>
    )
}

export default CustomButton