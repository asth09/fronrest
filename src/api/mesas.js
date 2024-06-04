const API = 'http://192.168.1.106:3000/api/mesas'

export const getMesas = async () => {
    const res = await fetch(API)
    return await res.json()
}
export const saveMesa = async (newMesa) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMesa),
    });
    return await res.json();
  };

  export const getMesa = async (id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
  };

  export const updateMesa = async (id, newMesa) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMesa),
    });
    return res;
  };

  export const deleteMesa = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    })
  };