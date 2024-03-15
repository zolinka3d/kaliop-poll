const { firstView } = require("../../templates/custom");

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
};
