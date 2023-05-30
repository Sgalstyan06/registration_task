async function post(path, data) {
  const responce = await fetch(
    `${process.env.REACT_APP_BASE_URL}/${path}?site_key=${process.env.REACT_APP_SITE_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return responce.json();
}

export async function getLocation(search) {
  const responce = await fetch(
    `${process.env.REACT_APP_BASE_URL}/registration/locations?search=${search}&skip=0&limit=10&site_key=${process.env.REACT_APP_SITE_KEY}`
  );

  return responce.json();
}

export async function startRegistration(username) {

  return await post("registration/start", { username });
}

export async function endRegistration(userId, data) {
  
  return await post(`registration/${userId}`, data);
}
