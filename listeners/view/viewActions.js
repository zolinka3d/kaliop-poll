const { thanksView } = require("../../templates/custom");
const { findChannelByUserId, history } = require("../../helpers/message");

module.exports.viewActions = (app) => {
  app.view("no_view_id", async ({ ack, body, client }) => {
    await ack();

    console.log("body", JSON.stringify(body));

    const input = body.view.state.values.block_no_id.info_input.value;
    console.log("input", input);
    const newView = thanksView(body.view.id);

    console.log("no thank view", JSON.stringify(newView));
    await client.views.update(newView);
  });

  app.view("no_input_view", async ({ ack, body, client }) => {
    await ack();

    const selectInput =
      body.view.state.values.select_block.select_block.selected_option.value;
    console.log("selectInput value", selectInput);

    const multilineInput = body.view.state.values.no_input_block.no_input.value;
    console.log("multilineInput", multilineInput);

    const isAnonymous =
      body.view.state.values.no_input_radio_buttons.no_input_radio_buttons
        .selected_option.value;

    console.log("isAnonymous", isAnonymous);

    // console.log("client", JSON.stringify(client));
    // console.log("body", JSON.stringify(body));
    // console.log("no body user", JSON.stringify(body.user));

    let channelOfUser = await findChannelByUserId(body.user.id);
    // console.log("channelOfUser", channelOfUser);

    const ts = await history(channelOfUser.id, client);
    await client.chat.update({
      token: process.env.SLACK_BOT_TOKEN,
      ts: ts,
      channel: channelOfUser.id,
      text: "Dziękujemy za Twoją opinię. Jest ona dla nas bardzo ważna i pomaga udoskonalać nasze działania.",
      blocks: [],
    });
  });
};
