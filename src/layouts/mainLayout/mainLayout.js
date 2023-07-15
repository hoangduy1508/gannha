import Header from "~/layouts/components/header";
import Footer from "~/layouts/components/footer";


function MainLayout({ children }) {
    return ( 
        <div className="wrapper">
            <Header></Header>
            <div className="body">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;
