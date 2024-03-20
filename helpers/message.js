const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

module.exports.findChannelByUserId = async (userId) => {
  try {
    const result = await web.conversations.list({
      types: "mpim,im",
      limit: 100,
    });

    console.log("result", JSON.stringify(result));
    if (result.ok) {
      console.log("result.channels", JSON.stringify(result.channels));
      const userChannel = result.channels.filter((channel) =>
        channel.user.includes(userId)
      );

      return userChannel[0];
    } else {
      console.error("Error fetching channels:", result.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching channels:", error);
    return null;
  }
};

module.exports.history = async (channelId, client) => {
  const history = await client.conversations.history({
    token: process.env.SLACK_BOT_TOKEN,
    channel: channelId,
    limit: 1,
  });

  if (history.ok) {
    console.log("last message", history.messages[0]);
    console.log("ts", history.messages[0].ts);
  }

  return {
    ts: history.messages[0].ts,
  };
};
