module.exports.button = (action_id, text) => {
  let button = this.basicButton(action_id, text);
  return {
    type: "actions",
    elements: [button],
  };
};

module.exports.basicButton = (action_id, text) => {
  return {
    type: "button",
    text: {
      type: "plain_text",
      text: text,
    },
    action_id: action_id,
  };
};

module.exports.buttonAction = (buttons) => {
  buttons.map((button, id) => {
    if (id === 0) {
      addStyleToButton(button, "primary");
    } else {
      addStyleToButton(button, "danger");
    }
  });
  return {
    type: "actions",
    elements: buttons,
  };
};

function addStyleToButton(button, style) {
  button.style = style;
  return button;
}
