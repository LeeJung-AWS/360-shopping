// Style : sass/layout/_homePage.scss

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import AdminPage from "./AdminPage";
import SignForm from "../components/SignForm";

interface ChildProps {
    setAdminPageState: () => void
}
const HomePage: React.FC<ChildProps> = ({setAdminPageState}) => {

    return(
    <Router>
        <Navbar setAdminPageState={setAdminPageState} />
        <main className="row">
            <Switch>
                <Route exact path="/">
                        <section className="card">
                            <div className="card-header">
                                <h4>HOME PAGE</h4>
                            </div>
                            <div className="card-body">
                                <p>Home Page Information</p>
                            </div>
                        </section>
                </Route>
                <Route exact path="/signForm">
                    <SignForm />
                </Route>
                <Route exact path="/contact">
                    <p>contact</p>
                </Route>
                {/* <Route exact path="/adminPage">
                    <AdminPage />
                </Route> */}
            </Switch>
        </main>
        <Footer />
    </Router>
    )

}

export default HomePage;