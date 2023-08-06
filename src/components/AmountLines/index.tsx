import { FC } from 'react'
import styles from './amount-lines.module.css'

interface IAmountLines {
    amountLines: ({
        text: string;
        amount: number;
        clue?: undefined;
    } | {
        text: string;
        amount: number;
        clue: string;
    })[]
}

const AmountLines: FC<IAmountLines> = ({ amountLines }) => {

    return (
        <>
            {amountLines.map((line, i) =>
                <div key={i} className={styles.text}>
                    {line.clue
                        ? <div className={styles.withclue}>
                            <div>{line.text}</div>
                            <div className={styles.clue}>{line.clue}</div>
                        </div>
                        : <p>{line.text}</p>
                    }
                    <div>${line.amount.toFixed(2)}</div>
                </div>
            )}
        </>
    )
}

export default AmountLines