import { FC, useState, ChangeEvent } from 'react'
import styles from './footer.module.css'
import '../../containers.css'
import lists from './lists'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Offers from '../../components/Offers'
import NavList from '../../components/NavList'
import SocialsImages from '../../components/SocialsImages'
import PaymentsImages from '../../components/PaymentsImages'

interface IFooter { }

const Footer: FC<IFooter> = () => {

    const [email, setEmail] = useState<string>('')

    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const sendEmail = () => {
        console.log(email)
    }

    return (
        <footer>
            <Offers />
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>Sign Up To Our Newsletter.</h2>
                            <p className={styles.text}>Be the first to hear about the latest offers.</p>
                        </div>
                        <div className={styles.right}>
                            <CustomInput
                                className={styles.input}
                                placeholder="Your Email"
                                onChange={changeEmail}
                                value={email}
                                type="email"
                            />
                            <CustomButton
                                className={styles.button}
                                onClick={sendEmail}
                                children="Subscribe"
                                reverseColor
                            />
                        </div>
                    </div>
                    <NavList lists={lists} />
                    <div className={styles.bottom}>
                        <SocialsImages />
                        <PaymentsImages />
                        <p className={styles.copy}>Copyright &copy; 2023 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer