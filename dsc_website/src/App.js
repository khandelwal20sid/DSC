import './App.css';
import Navbar from './components/Navbar';
import {Route, BrowerRouter, Switch} from "react-router-dom"
import About from './components/About';

function App() {
  return (
    <BrowerRouter>
     <Navbar />  
      <Switch>
        <Route path = "/about">
          <About />
        </Route>
      </Switch>       
    </BrowerRouter>    
  );
}

export default App;
