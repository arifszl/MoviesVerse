import Header from "./components/Header";
import Card from "./components/Card";
import AddForm from "./components/AddForm";
import {BrowserRouter as Router,
Routes,
Route
}  from 'react-router-dom'

function App() {
  return (
 <Router>
       <Header/>
   
     <Routes>
        <Route path="/" element={<Card/>} />
        <Route path='/addForm' element={<AddForm/>} />
     </Routes>
 </Router>
  );
}

export default App;
