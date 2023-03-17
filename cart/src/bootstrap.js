import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;
  el.innerHTML = cartText;
};

// Situation #1: We are in development mode
// We might be running in isolation & "#dev-cart" is a unique id used only by products team.

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (!!el) {
    mount(el);
  }
}

// Situation #2: We are in production mode. Container will decide when to show cart.
// So we export mount and import in container and use it.

export { mount };
