import React from "react";

import { useOrdersContext } from "../context/Orders";
import OrdersLayout from "../layout/Orders";

const Desayunos = () => {
  const { menusDesayuno } = useOrdersContext();
  return <OrdersLayout menus={menusDesayuno} type="Desayuno" />;
};

export default Desayunos;
