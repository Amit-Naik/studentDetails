import { useState } from 'react';
import './App.css';
import Search from './components/searchField/search';
import Students from './components/Students/students'

function App() {
  const [value, setValue] = useState(undefined);
  return (
    <div className="App">
        <Search setValue={setValue}/>
        <Students value={value}/>
    </div>
  );
}

export default App;
