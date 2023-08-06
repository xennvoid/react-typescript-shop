import { FC, useState } from 'react'
import { ReactComponent as HorizontalSvg } from '../../assets/icons/list-displays/horizontal.svg'
import { ReactComponent as VerticalSvg } from '../../assets/icons/list-displays/vertical.svg'

interface IChangeListDisplay {
    setDisplayHorizontal: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeListDisplay: FC<IChangeListDisplay> = ({ setDisplayHorizontal }) => {

    const [horizontal, setHorizontal] = useState<boolean>(false)

    return (
        <div>
            <HorizontalSvg
                onClick={() => {
                    setDisplayHorizontal(true)
                    setHorizontal(true)
                }}
                fill={horizontal ? "#000" : "#A2A6B0"}
                cursor="pointer"
            />
            <VerticalSvg
                onClick={() => {
                    setDisplayHorizontal(false)
                    setHorizontal(false)
                }}
                fill={!horizontal ? "#000" : "#A2A6B0"}
                cursor="pointer"
            />
        </div>
    )
}

export default ChangeListDisplay