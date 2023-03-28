import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
// import "../navigation/navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  ShopName,
} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <HuskyLogo className='logo' />    
          <span className="name-header">Sklep Husky Polska</span>      
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SKLEP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              WYLOGUJ
            </NavLink>
          ) : (
            <NavLink to='/auth'>ZALOGUJ</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;