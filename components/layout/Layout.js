import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <div className="min-h-[700px]">
                    {children}
                </div>
            <Footer/>
        </>
    );
}

export default Layout;