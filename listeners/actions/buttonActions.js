const { firstView, noInputView } = require("../../templates/custom");

module.exports.buttonActions = (app) => {
  app.action("open_modal_button", async ({ ack, body, client }) => {
    await ack();

    console.log("body", JSON.stringify(firstView(body.trigger_id)));
    try {
      const result = await client.views.open(firstView(body.trigger_id));
    } catch (error) {
      console.error(error);
    }
  });

  app.action("ok", async ({ ack, body, client }) => {
    console.log("body message.ts", JSON.stringify(body.message.ts));
    console.log("body channel.id", JSON.stringify(body.channel.id));
    await ack();
    await client.chat.update({
      token: process.env.SLACK_BOT_TOKEN,
      ts: body.message.ts,
      channel: body.channel.id,
      text: "Dziękujemy za Twoją opinię. Jest ona dla nas bardzo ważna i pomaga udoskonalać nasze działania.",
      blocks: [],
    });
  });

  app.action("no", async ({ ack, body, client }) => {
    console.log("no body", JSON.stringify(body));
    await ack();
    try {
      const result = await client.views.open(noInputView(body.trigger_id));
    } catch (error) {
      console.error(error);
    }
  });
};
