import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  { Login, Home }  from './components';
import './index.css';

const App = () => (
 <div>
    <Router>
        <Routes>
            <Route exact path='/' element={<Login  />} />
            <Route path='/Home' element={<Home  />} />
        </Routes>
    </Router>
 </div>
)

export default App