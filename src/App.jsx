import { HomeProvider } from './contexts/homeContext';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routes/router';

function App() {
    return (
        <>
            <HomeProvider>
                <Router>
                    <AppRouter />
                </Router>
            </HomeProvider>
        </>
    );
}

export default App;
