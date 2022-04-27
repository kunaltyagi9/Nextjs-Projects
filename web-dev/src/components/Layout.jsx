

import NavBar from './NavBar';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;