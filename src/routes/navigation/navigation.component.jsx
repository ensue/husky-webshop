import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action.js";

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";
import { signOutStart } from "../../store/user/user.action.js"; 
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
