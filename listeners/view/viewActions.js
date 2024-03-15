const { thanksView } = require("../../templates/custom");

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
};
