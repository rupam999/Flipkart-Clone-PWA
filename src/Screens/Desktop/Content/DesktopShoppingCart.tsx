import React, { useContext, useEffect } from "react";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import DesktopEmptyCart from "../Components/DesktopEmptyCart";

export const DesktopShoppingCart = () => {
  const { user } = useContext(Store);

  const showCartData = async () => {
    const data = await getData("cart");
    console.log(data);
  };

  useEffect(() => {
    showCartData();
  }, []);

  return (
    <div>
      {user && user.id ? (
        <p>hjkhk</p>
      ) : (
        <DesktopEmptyCart
          heading="Missing Cart items?"
          text="Login to see the items you added previously"
        />
      )}
    </div>
  );
};
