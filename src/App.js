import './assets/css/normalize.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/styles.css'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import PortfolioView from './views/Portfolio.view';
import AdminView from './views/Admin.view';

function App() {

  return (
    <Router>
      <Routes>
        <Route  path='/' element={<PortfolioView/>}/>
        <Route path='/admin' element={<AdminView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
