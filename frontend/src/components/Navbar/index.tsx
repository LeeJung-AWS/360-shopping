// Style: sass/layout/_navBar.scss
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import BriefProductsLists from '../BriefProductLists';

import Auth from '../../utils/auth';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { getProducts } from '../../utils/API';

interface ChildProps {
    setAdminPageState: () => void
    favoritedProducts: string[] | undefined
    cartProducts: string[] | undefined
    getFavoriteProducts: () => Promise<void>
}

interface ProductDataType {
    _id: string;
    title: string;
    description: string;
    thumbnailImgURL: string;
    imgURLlists: string[];
    price: number;
    onSale: boolean;
    salePrice: number;
    quantity: number;
    sku: string;
    categories: string[];
    productCreated: Date;
}

const Navbar: React.FC<ChildProps> = ({ setAdminPageState, favoritedProducts, cartProducts , getFavoriteProducts}) => {
    const [ userName, setUserName ] = useState('');
    const [ currentPage ,setCurrentPage ] = useState('');
    const [ favoriteProductData, setFavoriteProductData ] = useState<ProductDataType[]>();


    useEffect(() => {
        if(Auth.getToken()){
            // console.log('test');
            let userProfile: any = Auth.getProfile()
            setUserName(capitalizeFirstLetter(userProfile.data.username))
        }
    },[userName])
    // In Mobile Size, display or hide Navigation Menu
    const mobileNavClick = () => {
        const navBarmobileLinksEl = document.getElementById('navBar-mobile-Links')!;  // The exclamation mark means a developer knows there is a button element.( The value is not null )
        // console.log(navBarmobileLinksEl);
        if (navBarmobileLinksEl.style.height === '100%') {
            navBarmobileLinksEl.style.height = '0';
            navBarmobileLinksEl.style.padding = '0';
          } else {
            navBarmobileLinksEl.style.height = '100%';
            navBarmobileLinksEl.style.padding = '6rem 2rem';
          }
    }

    function onclickMenu (event: any) {
        const navBarmobileLinksEl = document.getElementById('navBar-mobile-Links')!;
        navBarmobileLinksEl.style.height = '0';
        navBarmobileLinksEl.style.padding = '0';
        // console.log(event.target.textContent)
        if(event.target.textContent === 'ADMIN PAGE'){
            setAdminPageState();
        }
    }

    function onClickAdminLink() {
        setAdminPageState();
    }

    function onClickDesktopNavMenu(event: any) {
        setCurrentPage(event.target.dataset.name)
    }

    useEffect(() =>{
        console.log(favoritedProducts)
        if(favoritedProducts){
            getFavoriteProductDATA();
        }
    }, [favoritedProducts])

    async function getFavoriteProductDATA() {
        // console.log(favoritedProducts)
        let productlists: ProductDataType[] = await getProducts();
        let myProduct: ProductDataType[] = productlists.filter(product => favoritedProducts?.indexOf(product._id) !== -1);
        setFavoriteProductData(myProduct)
    }

    return (
    <header className="navBar-header">
        <Link id="navBar-page-btn" to="/" data-name='main' onClick={onClickDesktopNavMenu}>360-Shopping</Link>
        <nav className="navBar-mobile">
            <Link to='#'>
                <i className="fas fa-shopping-cart navBar-mobile-cart" id="mobile-cart-menu"> 
                    {cartProducts ? 
                    <span className="mobile-cart-menu-number"> {cartProducts.length} </span>: 
                    <span className="mobile-cart-menu-number-zero"> </span> 
                    }
                    <div className="dropdown-content dropdown-content-cart">
                            {cartProducts 
                            ? <BriefProductsLists /> 
                            :<p style={{textAlign: "center"}}>Shopping Bag is Empty.</p>
                            }
                    </div> 
                </i>
            </Link>
            <Link to="#" id="navBar-mobile-menu" onClick={mobileNavClick}><i className="fas fa-bars"></i></Link>
        </nav>
        <div id="navBar-mobile-Links">
            {Auth.loggedIn() 
            ? 
            <>
            <Link to='/women' onClick={onclickMenu}>WOMEN</Link>
            <Link to='/kids' onClick={onclickMenu}>KIDS</Link>
            <Link to='/men' onClick={onclickMenu}>MEN</Link>
            <Link to='/beauty' onClick={onclickMenu}>BEAUTY</Link> 
            <Link to='#' onClick={Auth.logout}>LOGOUT</Link> 
            {userName==='Admin'?<Link to='/adminPage' style={{color:"red"}}  onClick={onclickMenu}>ADMIN PAGE</Link>:<></>}
            </>
            : 
            <Link to='/signForm' onClick={onclickMenu}>LOGIN/SIGNUP</Link>}
            
        </div>
        <nav className="navBar-desktop">
            <ul>
                <li className={currentPage === 'women' ? 'active-desktop-nav-menu': ''} >
                    <Link to='/women' data-name='women' onClick={onClickDesktopNavMenu}>WOMEN</Link>
                </li>
                <li className={currentPage === 'kids' ? 'active-desktop-nav-menu': ''}>
                    <Link to='/kids' data-name='kids' onClick={onClickDesktopNavMenu}>KIDS</Link>
                </li>
                <li className={currentPage === 'men' ? 'active-desktop-nav-menu': ''}>
                    <Link to='/men' data-name='men' onClick={onClickDesktopNavMenu}>MEN</Link>
                </li>
                <li className={currentPage === 'beauty' ? 'active-desktop-nav-menu': ''}>
                    <Link to='/beauty' data-name='beauty' onClick={onClickDesktopNavMenu}>BEAUTY</Link>
                </li>
                {userName==='Admin'?<li>
                    <Link to='/adminPage' style={{color:"red"}} onClick={onClickAdminLink}>ADMIN PAGE</Link>
                </li>: <></>}
            </ul>
            <ul>
                <li className='dropdown'>
                    <Link to='/test'><i className="far fa-user" ></i></Link>
                    <div className="dropdown-content dropdown-content-account">
                        {Auth.loggedIn() ?<>
                        <div className="hello-userName">Hello, {userName}</div>
                        <div className="myHr"></div>
                        <Link to="#">Your Profile</Link>
                        <Link to="#">My Orders</Link>
                        <Link to="#">Your Messages</Link>
                        <Link to="#">Recently Viewed</Link>
                        <Link to="#" onClick={Auth.logout}>Sign Out</Link> 
                        </>
                        :
                        <Link to="/signForm">Sign In / Register</Link>
                        
                    }
                    </div>
                </li>
                <li className='dropdown'>
                    <Link to='#'><i className="fas fa-shopping-cart"></i> {cartProducts ? cartProducts.length : 0}</Link>
                    <div className="dropdown-content dropdown-content-cart">
                        {cartProducts 
                        ? <BriefProductsLists /> 
                        :<p style={{textAlign: "center"}}>Shopping Bag is Empty.</p>
                        }
                    </div>
                </li>
                <li className='dropdown'>
                    <Link to="#"><i className="far fa-heart"></i> { favoritedProducts ? favoritedProducts.length : 0}</Link>
                    <div className="dropdown-content dropdown-content-favorite">
                        { favoritedProducts 
                        ? (favoriteProductData ? <BriefProductsLists favoriteProductData={favoriteProductData} favoriteProductID={favoritedProducts} getFavoriteProductFuncFromHomePage={getFavoriteProducts} /> : 'Loading...')
                        : <p style={{textAlign: "center"}}>Time to find your favorite items</p>
                        }
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Navbar;