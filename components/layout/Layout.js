import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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