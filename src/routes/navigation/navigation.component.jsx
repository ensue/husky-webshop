import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <HuskyLogo className="logo" />
          <span className="name-header">Sklep Husky Polska</span>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/sklep">SKLEP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              WYLOGUJ
            </NavLink>
          ) : (
            <NavLink to="/auth">ZALOGUJ</NavLink>
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
