const { text: createText } = require("../text/text");

module.exports.staticSelect = (action_id, text, options, placeholder) => {
  const newBlock = {
    type: "section",
    text: createText(text, "m"),
    accessory: {
      type: "static_select",
      placeholder: createText(placeholder),
      options: options,
      action_id: action_id,
    },
  };
  return newBlock;
};

module.exports.options = (optionArrays) => {
  const options = [];
  optionArrays.forEach((option) => {
    options.push({
      text: createText(option),
      value: option,
    });
  });
  return options;
};

module.exports.staticSelectInput = (action_id, text, options, placeholder) => {
  const newBlock = {
    type: "input",
    block_id: action_id,
    element: {
      type: "static_select",
      placeholder: createText(placeholder),
      options: options,
      action_id: action_id,
    },
    label: createText(text),
  };
  return newBlock;
};
