import React from "react";
import Checkout from "./Checkout";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
import Static from "./Static";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContext";
import { AuthContextProvider } from "../../Context/AuthContext";

const CheckOutmain = () => {
    // const {id} = React.useContext(AuthContext)
    // console.log(id)
  return (
    <AuthContextProvider>
      <Div>
        <Checkout />
        <Static />
      </Div>
    </AuthContextProvider>
  );
};

export default CheckOutmain;

const Div = styled.div`
  display: flex;
`;
