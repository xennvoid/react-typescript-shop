import { FC, Fragment, useMemo, useState, ChangeEvent } from 'react'
import styles from './cart-summary.module.css'
import { useAppSelector } from '../../store/hooks'
import { selectCartAmount } from '../../store/slices/cartSlice'
import CustomButton from '../CustomButton'
import TitleDropDown from '../TitleDropDown'
import AmountLines from '../AmountLines'
import CaptionInput from '../CaptionInput'

interface ICartSummary { }

const CartSummary: FC<ICartSummary> = () => {

    const cartTotalAmount = useAppSelector(selectCartAmount)

    const amountLines = useMemo(() => [
        { text: "Subtotal", amount: cartTotalAmount },
        { text: "Shipping", amount: 21, clue: "(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)" },
        { text: "Tax", amount: cartTotalAmount / 1000 },
        { text: "GST(10%)", amount: cartTotalAmount / 1000 },
        { text: "Order Total", amount: cartTotalAmount + 1.91 * 2 + 21 },
    ], [cartTotalAmount])

    const [shippingInputs, setShippingInputs] = useState({
        "Country": '',
        "State/Province": '',
        "Zip/Postal Code": '',
    })

    const handleShippingInputsChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {
        const value = event.target.value
        setShippingInputs(prev => ({ ...prev, [input]: value }))
    }

    const [discountCode, setDiscountCode] = useState<string>('')

    const handleDiscountCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(event.target.value)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Summary</h2>
            <TitleDropDown title="Estimate Shipping and Tax" description="Enter your destination to get a shipping estimate.">
                {Object.keys(shippingInputs).map((input, i) =>
                    <Fragment key={i}>
                        <CaptionInput title={input} onChange={(event) => handleShippingInputsChange(event, input)} />
                    </Fragment>
                )}
            </TitleDropDown>
            <TitleDropDown title="Apply Discount Code">
                <CaptionInput title="Enter discount code" onChange={handleDiscountCodeChange} />
            </TitleDropDown>
            <hr color="#CACDD8" style={{ marginTop: 0 }} />
            <AmountLines amountLines={amountLines} />
            <CustomButton reverseColor>Proceed to checkout</CustomButton>
        </div>
    )
}

export default CartSummary