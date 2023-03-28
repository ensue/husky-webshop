import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 10px 0 20px 5px;
`;

export const LogoContainer = styled(Link)`
  
  margin-left: 2%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  .logo {
    height: 100%;
    width: 15%;
  }
  .name-header {
    width: 50%;
    margin-left: 5%;
    padding: 27px 0 0 0px;
    font-weight: 200;
    font-size: 28px;
    font-family: "Montserrat";
    text-align: left;
    white-space: nowrap;
  }
`;

export const ShopName = styled.span``;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

//     .brand-container {
// margin-right: 25px;
// width: 50%;
// height: 100%;
// display: flex;
// align-items: left;
// justify-content: flex-start;

//       .logo-container {
//         margin-left: 2%;
//         height: 100%;
//         min-width: 100px;
//         width: 100px;
//         padding: 8px;
//       }

//       .name-header {
// margin-left: 2%;
// padding: 30px;
// font-weight: 200;
// font-size: 28px;
// font-family: "Montserrat";
// text-align: center;
// white-space: nowrap;
//       }
//     }

//     .nav-links-container {
//       margin-right: 25px;
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;

//       .nav-link {
//         padding: 10px 27px;
//         cursor: pointer;
//         font-weight: 500;
//         font-size: 19px;
//       }
//     }
//   }
// `;
