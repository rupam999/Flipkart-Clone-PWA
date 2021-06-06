import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { HeaderWithBack } from "../Header";
import CartMainBody from "./components/CartMainBody";
import Loader from "../components/mobileLoader";

export const ShoppingCart = () => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(Store);
  const history = useHistory();
  const loggedUser = getData("user");

  useEffect(() => {
    if (userCheck(history)) {
      setUser(loggedUser);
      setLoading(false);
    }
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HeaderWithBack name="My Cart" icon="left" />
          <CartMainBody />
        </div>
      )}
    </React.Fragment>
  );
};
