//

const url = "http://localhost:3000/users/images";

async function request() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default request;
