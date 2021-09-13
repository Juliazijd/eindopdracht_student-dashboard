import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>  
          <Route path="/results" exact component={Results}/>           
          <Route path="/results/:student" component={Results}/>          
          <Route path="/about"  component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
