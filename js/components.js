function Question(question, onClick) {
  const container = createContainer("section", { id: question.id });

  container.appendChild(Title(question.body));
  container.appendChild(ButtonList(question.options, onClick));

  return container;
}

function Title(text) {
  return createElement("h3", text);
}

function ButtonList(options, onClick) {
  const buttons = options.map((option) => {
    return Button(option, onClick);
  });

  return createList(buttons, { class: "options" });
}

function Button(option, onClick) {
  const element = createElement("button", option.text);
  element.setAttribute("data-value", option.id);
  element.setAttribute("data-next", option.next);

  element.addEventListener("click", (e) => {
    const { value, next } = e.target.dataset;
    onClick(value, next);
  });

  return element;
}
