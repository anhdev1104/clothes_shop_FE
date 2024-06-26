import { BrowserRouter as Router } from 'react-router-dom';
import { HomeProvider } from './contexts/homeContext';
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
