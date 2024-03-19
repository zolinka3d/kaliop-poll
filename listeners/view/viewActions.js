const { thanksView } = require("../../templates/custom");
const { findChannelsByUserId } = require("../../helpers/message");

module.exports.viewActions = (app) => {
  app.view("no_view_id", async ({ ack, body, client }) => {
    await ack();

    console.log("body", JSON.stringify(body));

    let input = body.view.state.values.block_no_id.info_input.value;
    console.log("input", input);
    let newView = thanksView(body.view.id);

    console.log("no thank view", JSON.stringify(newView));
    await client.views.update(newView);
  });

  app.view("no_input_view", async ({ ack, body, client }) => {
    await ack();
    // console.log("no input body", JSON.stringify(body));
    let input = body.view.state.values.no_input_block.no_input.value;
    console.log("input", input);

    console.log("no body", JSON.stringify(body));

    let channelsOfUser = await findChannelsByUserId(body.user.id);
    console.log("channelsOfUser", channelsOfUser);

    // await client.chat.update({
    //   token: process.env.SLACK_BOT_TOKEN,
    //   ts: body.message.ts,
    //   channel: body.channel.id,
    //   text: "Thank you for feedback!",
    //   blocks: [],
    // });
  });
};
