import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Books from "../pages/Books";

const Home = () => {
    return(
        <div>
            <Navbar />
            <Books />
            <Footer />            
        </div>
    )
}
export default Home