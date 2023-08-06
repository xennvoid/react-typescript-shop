import { FC } from 'react'
import styles from './cart-empty.module.css'
import cartPng from '../../assets/images/cart.png';
import CustomButton from '../CustomButton';
import { useNavigate } from 'react-router-dom';

const CartEmpty: FC = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={cartPng} alt="cart" />
            </div>
            <h2 className={styles.title}>Cart is empty</h2>
            <p className={styles.text}>But it's never too late to fix it :)</p>
            <CustomButton onClick={() => navigate('/')} reverseColor>To product catalog</CustomButton>
        </div>
    )
}

export default CartEmpty