const API = "http://192.168.1.106:3000/api/menus";

export const getMenus = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveMenu = async (newMenu) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMenu),
  });
  return await res.json();
};

export const getMenu = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const updateMenu = async (id, newMenu) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMenu),
  });
  return res;
};

export const deleteMenu = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};
