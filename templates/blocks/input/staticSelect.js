const { text: createText } = require("../text/text");

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
