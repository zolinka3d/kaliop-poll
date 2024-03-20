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

module.exports.textBlock = (text, type) => {
  const newBlock = {
    type: "section",
    text: this.text(text, type),
  };
  return newBlock;
};

module.exports.headerBlock = (text) => {
  return {
    type: "header",
    text: this.text(text),
  };
};
