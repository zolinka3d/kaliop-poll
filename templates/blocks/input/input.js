const { text } = require("../text/text");

module.exports.multineInput = (block_id, action_id, label) => {
  const newBlock = {
    type: "input",
    block_id: block_id,
    element: {
      type: "plain_text_input",
      action_id: action_id,
      multiline: true,
    },
    label: text(label),
  };
  return newBlock;
};
