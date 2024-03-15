module.exports.text = (text, type) => {
  if (type) {
    return {
      type: "mrkdwn",
      text: text,
    };
  } else {
    return {
      type: "plain_text",
      text: text,
    };
  }
};

module.exports.textBlock = (text) => {
  let newBlock = {
    type: "section",
    text: this.text(text),
  };
  return newBlock;
};
