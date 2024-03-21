const { text: createText } = require("../text/text");

module.exports.radioButtons = (block_id, action_id, options, label) => {
  const newBlock = {
    type: "input",
    block_id: block_id,
    element: {
      type: "radio_buttons",
      options: options,
      action_id: action_id,
    },
    label: createText(label),
  };
  return newBlock;
};
