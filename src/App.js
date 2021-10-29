import { useState } from 'react';
import './App.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Routes from './components/routes/Routes';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme? 'dark' : '' }>
     <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes/>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
