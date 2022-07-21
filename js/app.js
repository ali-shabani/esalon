const container = createContainer();
const question = questions[0];

container.appendChild(
  Question(question, (value, next) => {
    const nominated = questions.find((q) => q.id === next);

    if (!nominated) {
      return;
    }

    container.appendChild(Question(nominated));
  })
);

render(container);
