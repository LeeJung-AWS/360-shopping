// Style : sass/layout/_homePage.scss

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminPage from "./AdminPage";
import SignForm from "../components/SignForm";

const HomePage: React.FC = () => {

    return(<Router>
        <Switch>
            <Route exact path="/">
                <Navbar />
                <SignForm />
                <main className="row">
                    <section className="card">
                        <div className="card-header">
                            <h4>HOME PAGE</h4>
                        </div>
                        <div className="card-body">
                            <p>Home Page Information</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </Route>
            <Route exact path="/login">
                <p>login</p>
            </Route>
            <Route exact path="/contact">
                <p>contact</p>
            </Route>
            <Route exact path="/adminPage">
                <AdminPage />
            </Route>
        </Switch>
    </Router>)

}

export default HomePage;