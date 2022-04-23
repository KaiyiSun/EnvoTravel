const getRequest = async (url, token) => {
  let response;
  if (token)
    response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: token,
      },
    });
  else
    response = await fetch(url, {
      method: "GET",
    });
  return response;
};

const patchRequest = async (url, body, token) => {
  let response;
  if (token)
    response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(body),
    });
  else
    response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  return response;
};

const putRequest = async (url, body, token) => {
  let response;
  if (token)
    response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(body),
    });
  else
    response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  return response;
};

const postRequest = async (url, body, token) => {
  let response;
  if (token)
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify,
    });
  else
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  return response;
};

const deleteRequest = async (url, token) => {
  let response;
  if (token)
    response = await fetch(url, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
  else
    response = await fetch(url, {
      method: "DELETE",
    });
  return response;
};

module.exports = {
  getRequest,
  patchRequest,
  putRequest,
  postRequest,
  deleteRequest,
};
