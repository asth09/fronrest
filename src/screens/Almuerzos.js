import React from "react";

import { useOrdersContext } from "../context/Orders";
import OrdersLayout from "../layout/Orders";

const Almuerzos = () => {
  const { menusAlmuerzo } = useOrdersContext();
  return <OrdersLayout menus={menusAlmuerzo} type="Almuerzo" />;
};

export default Almuerzos;
