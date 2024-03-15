const { text: createText } = require("../text/text");

module.exports.staticSelect = (action_id, text, options, placeholder) => {
  let newBlock = {
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
  let options = [];
  optionArrays.forEach((option) => {
    options.push({
      text: createText(option),
      value: option,
    });
  });
  return options;
};
