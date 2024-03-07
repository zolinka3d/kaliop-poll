const { App, AwsLambdaReceiver } = require("@slack/bolt");

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

const block = (message) => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
          },
          action_id: "button_click",
        },
      },
    ],
  };
};

app.message("hello", async ({ message, say }) => {
  const response = block(message);
  await say(response);
});

app.action("button_click", async ({ ack, body, say }) => {
  await ack();
  console.log(JSON.stringify(body, null, 2));
  await say(`Button clicked by <@${body.user.id}>`);
});

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
