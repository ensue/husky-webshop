import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "../navigation/navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <HuskyLogo className="logo" />
        </Link>

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
          <CartIcon/>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
