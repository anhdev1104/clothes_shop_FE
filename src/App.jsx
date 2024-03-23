import { HomeProvider } from './contexts/homeContext';
import HomePage from './pages/HomePage';

function App() {
    return (
        <>
            <HomeProvider>
                <HomePage></HomePage>
            </HomeProvider>
        </>
    );
}

export default App;
