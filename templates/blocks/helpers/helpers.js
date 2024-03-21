const { text: createText } = require("../text/text");

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
