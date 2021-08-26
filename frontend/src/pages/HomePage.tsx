// Style : sass/layout/_homePage.scss

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import AdminPage from "./AdminPage";
import SignForm from "../components/SignForm";
import DisplayProducts from "../components/DisplayProducts";

import Auth from '../utils/auth';
import { getMe } from "../utils/API";

interface ChildProps {
    setAdminPageState: () => void
}
const HomePage: React.FC<ChildProps> = ({setAdminPageState}) => {

    const [ favoritedProducts, setFavoriteProducts ] = useState<string[] | undefined>();
    const [ cartProducts, setCartProducts ] = useState<string[] | undefined>();

    useEffect(() => {
        getFavoriteProducts();
    }, [])

    async function getCartProducts() {
        let tempCart = localStorage.getItem('cart');
        if(tempCart){
            setCartProducts([...tempCart.split(",")])
        }
    }

    async function getFavoriteProducts() {
        // Check if there are favorite products.
        if(Auth.loggedIn()){
            const userToken: any = Auth.getToken();
            console.log(userToken);

            const userData = await getMe(userToken);
            const userDataJson = await userData.json()
            // console.log(userDataJson);
            if(userDataJson.favoriteProduct.length > 0){
                setFavoriteProducts([...userDataJson.favoriteProduct])
            }else{
                setFavoriteProducts(undefined)
            }
        }
    }

    return(
    <Router>
        <Navbar setAdminPageState={setAdminPageState} favoritedProducts={favoritedProducts} cartProducts={cartProducts} />
        <main className="row">
            <Switch>
                <Route exact path="/">
                    <DisplayProducts getFavoriteProducts={getFavoriteProducts} getCartProducts={getCartProducts} />
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