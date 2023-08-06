import { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

interface ILayout {

}

const Layout: FC<ILayout> = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout