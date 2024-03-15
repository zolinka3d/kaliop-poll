module.exports.text = (text) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: text,
    },
  };
};
