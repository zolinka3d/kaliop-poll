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
