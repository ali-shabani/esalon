function createContainer(type = "div", attributes = {}) {
  const container = document.createElement(type);

  for (let [key, value] of Object.entries(attributes)) {
    container.setAttribute(key, value);
  }

  return container;
}

function createElement(tag, text, attributes = {}) {
  const element = document.createElement(tag);
  element.textContent = text;

  for (let [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  return element;
}

function createList(items, attributes) {
  const container = createContainer("ul", attributes);

  items.forEach((item) => {
    const li = createElement("li");
    li.appendChild(item);
    container.appendChild(li);
  });

  return container;
}

function render(component) {
  const app = document.getElementById("app");
  Array.from(app.children).forEach((child) => child.remove());

  if (typeof component === "string") {
    component = createElement("p", component);
  }

  app.appendChild(component);
}
