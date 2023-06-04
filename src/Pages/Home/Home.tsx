import Hero from '../../Components/Hero/Hero';
import Main from '../../Components/Main/Main';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Main />
            <Footer mode="dark" />
        </div>
    )
}

export default Home;