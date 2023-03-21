import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "../navigation/navigation.styles.scss"

import { ReactComponent as HuskyLogo } from "../../assets/logo_husky.svg";

const Navigation = () => {
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
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
