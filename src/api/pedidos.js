const API = 'http://192.168.1.106:3000/api/pedidos'

export const getPedidos = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const savePedidos = async (newPedido) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPedido),
    });
    return await res.json();
  };

  export const getPedido = async (id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
  };

  export const updatePedido = async (id, newPedido) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPedido),
    });
    return res;
  };

  export const deletePedido = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    })
  };