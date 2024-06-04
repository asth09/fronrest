import * as React from "react";
import { getMesas } from "../api/mesas";
import { getMenuByType } from "../api/menu-tipo";

const OrdersContext = React.createContext({
  mesas: [],
  menusBebidas: [],
  menusDesayuno: [],
  menusAlmuerzo: [],
  clienteMesa: undefined,
  ordenes: {
    almuerzo: [],
    desayuno: [],
    bebidas: [],
    mesa: undefined,
  },
  handleOrdenar: (navigate) => {},
  toggleAmount: (index, amount, type) => {},
});

export const useOrdersContext = () => {
  const context = React.useContext(OrdersContext);
  if (!context) throw Error("");
  return context;
};

const OrdersProvider = (props) => {
  const [mesas, setMesas] = React.useState([]);
  const [ordenes, setOrdenes] = React.useState({ desayuno: [], almuerzo: [], bebidas: [], mesa: undefined, metodo: [] })
  const [clienteMesa, setClienteMesa] = React.useState(null);
  const [menusBebidas, setMenusBebidas] = React.useState([]);
  const [menusDesayuno, setMenusDesayuno] = React.useState([]);
  const [menusAlmuerzo, setMenusAlmuerzo] = React.useState([]);

  const toggleAmount = (index, amount, type) => {
    switch (type) {
      case "Desayuno":
        setMenusDesayuno((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      case "Almuerzo":
        setMenusAlmuerzo((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      case "Bebidas":
        setMenusBebidas((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      default:
        break;
    }
  };

  const handleOrdenar = (navigate) => {
    const newOrdenes = {
      desayuno: menusDesayuno.filter(menu => menu.amount > 0),
      bebidas: menusBebidas.filter(menu => menu.amount > 0),
      almuerzo: menusAlmuerzo.filter(menu => menu.amount > 0),
      mesa: clienteMesa
    };
    setOrdenes(newOrdenes);
    navigate("Ordenes");
};

  const loadMenusDesayuno = async () => {
    const data = await getMenuByType("Desayuno");
    const updatedDesa = data.map((item) => ({ ...item, amount: 0 }));
    setMenusDesayuno(updatedDesa);
  };

  const loadMenusAlmuerzo = async () => {
    const data = await getMenuByType("Almuerzo");
    const updatedAlmu = data.map((item) => ({ ...item, amount: 0 }));
    setMenusAlmuerzo(updatedAlmu);
  };

  const loadMenusBebidas = async () => {
    const data = await getMenuByType("Bebidas");
    const updatedData = data.map((item) => ({ ...item, amount: 0 }));
    setMenusBebidas(updatedData);
  };

  const loadMesas = async () => {
    const data = await getMesas();
    setMesas(
      data.map((mesa) => ({ label: ` ${mesa.numesa}`, value: mesa._id }))
    );
  };

  React.useEffect(() => {
    loadMesas();
    loadMenusBebidas();
    loadMenusAlmuerzo();
    loadMenusDesayuno();
  }, []);

  const values = React.useMemo(
    () => ({
      mesas,
      ordenes,
      setOrdenes,
      setClienteMesa,
      menusBebidas,
      clienteMesa,
      menusAlmuerzo,
      menusDesayuno,
      handleOrdenar,
      toggleAmount,
    }),
    [mesas, ordenes, clienteMesa, menusBebidas, menusAlmuerzo, menusDesayuno]
  );

  return (
    <OrdersContext.Provider value={values}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
