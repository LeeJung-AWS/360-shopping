import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashContainer from "./pages/DashContainer";
import DashNav from "./components/DashNav";
import Login from "./components/Login";
// import DashContainer from './pages/DashContainer';

function App() {
  return (
    <div>
      
      <Router>
      <DashNav/>
        <Switch>
        
          <Route exact path="/adminPage" component={AdminPage}></Route>
          <Route exact path="/" component={DashContainer}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/contact" component={ContactForm}></Route>
        </Switch>
      </Router>

     
      <Footer />
    </div>
  );
}

export default App;
