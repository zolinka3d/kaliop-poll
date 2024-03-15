const { thanksView, noViewUpdated } = require("../../templates/custom");

module.exports.selectActions = (app) => {
  app.action("decision_select", async ({ ack, body, client, action }) => {
    await ack();

    if (action.selected_option.value === "No") {
      if (body.view.blocks.length == 1) {
        let noViewUpdate = noViewUpdated(body.view.id);

        console.log("newView", JSON.stringify(noViewUpdate));

        await client.views.update(noViewUpdate);
      }
    } else if (action.selected_option.value === "Yes") {
      let newView = thanksView(body.view.id);
      console.log("yes thank view", JSON.stringify(newView));
      await client.views.update(newView);
    }
  });
};
