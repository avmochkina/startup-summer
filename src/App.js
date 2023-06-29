import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <MantineProvider withNormalizeCSS
    theme={{
      fontFamily: 'Inter'
      }}
    >
      <Router>

          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" /*element={<Favorites >} *//>
          </Routes>
          {/*<Footer />*/}
        </Router>
      
    </MantineProvider>
  );
}
