import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  { Login }  from './components';
import './index.css';

const App = () => (
 <div>
    <Router>
        <Routes>
            <Route exact path='/' element={<Login  />} />
        </Routes>
    </Router>
 </div>
)

export default App