

import Navigation from './components/navigation/navigation';
import { Routes, Route } from 'react-router';

import Home from './pages/home/home'
import Settings from './pages/settings/settings';




function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/settings" element={<Settings/>} />
      </Routes>
      
    </div>
  );
}



export default App;
