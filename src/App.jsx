import { HomeProvider } from './contexts/homeContext';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';

function App() {
    return (
        <>
            <HomeProvider>
                <Header />
                <HomePage />
                <Footer />
            </HomeProvider>
        </>
    );
}

export default App;
