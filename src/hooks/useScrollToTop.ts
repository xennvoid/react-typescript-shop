import { useEffect } from 'react'

const useScrollToTop = (dependencies: any[]) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [...dependencies])
}

export default useScrollToTop