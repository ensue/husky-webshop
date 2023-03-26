import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "../navigation/navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <div className="brand-container">
          <Link className="logo-container" to="/">
            <HuskyLogo className="logo" />
          </Link>
          <div className="name-header">Sklep Husky Polska</div>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SKLEP
          </Link>
          {currentUser ? (
            <span className="nav-link">WYLOGUJ</span>
          ) : (
            <Link className="nav-link" to="/auth">
              ZALOGUJ
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
