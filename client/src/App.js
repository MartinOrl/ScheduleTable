import { Component } from 'react';

import Navigation from './components/navigation/navigation';
import { Routes, Route } from 'react-router';

import Home from './pages/home/home'
import Settings from './pages/settings/settings';



class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    
  }

  render(){
    return(
      <div className='master'>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    )
  }
}



export default App;
