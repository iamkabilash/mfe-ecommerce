import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Situation #1: We are in development mode
// We might be running in isolation & "#dev-products" is a unique id used only by products team.
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (!!el) {
    mount(el);
  }
}

// Situation #2: We are in production mode. Container will decide when to show products.
// So we export mount and import in container and use it.
export { mount };
