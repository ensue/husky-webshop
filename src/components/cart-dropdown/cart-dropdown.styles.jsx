import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 20px;
  z-index: 5;
  

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 30px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;


// .cart-dropdown-container {
//   position: absolute;
//   width: 300px;
//   height: 355px;
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   border: 1px solid black;
//   background-color: white;
//   top: 100px;
//   right: 20px;
//   z-index: 5;
  

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     overflow: auto;
//   }

//   button {
//     margin-top: auto;
//     width: 100%;
//   }
// }