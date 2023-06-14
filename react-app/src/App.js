
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Firstpage from './Firstpage';
import View from './components/View';

function App() {
  return (
    <div className="App">
      
     <Firstpage />
     <Routes >
    <Route path='/view/:id' element={<View/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
