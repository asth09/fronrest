import React from "react";

import { useOrdersContext } from "../context/Orders";
import OrdersLayout from "../layout/Orders";

const Bebidas = () => {
  const { menusBebidas } = useOrdersContext();
  return <OrdersLayout menus={menusBebidas} type="Bebidas" />;
};

export default Bebidas;
